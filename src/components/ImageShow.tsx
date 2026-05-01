import React, { useEffect, useState } from 'react';
import css from './ImageShow.module.css';
import type { ImageMetadata } from 'astro';

interface ImageShowProps {
	images: ImageMetadata[];
	imageAlt?: string | undefined;
}

export const ImageShow: React.FC<ImageShowProps> = ({images, imageAlt = "Impression der Digitalen Lernwelten"}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevCounter) => (prevCounter + 1) % images.length);
		}, 5000);
	
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		setIndex((prevCounter) => (prevCounter + 1) % images.length);
	}, []);

	return (<div className={css.show}>
		{images.map((image, i) => (<img key={i} className={i === index  ? `${css.img} ${css.active}` : css.img} src={image.src} width={image.width} height={image.height} alt={i === 0 ? imageAlt : ""} />))}
	</div>);
};