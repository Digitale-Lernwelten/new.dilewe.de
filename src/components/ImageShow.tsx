import React, { useEffect, useState } from 'react';
import css from './ImageShow.module.css';
import type { ImageMetadata } from 'astro';

interface ImageShowProps {
	images: ImageMetadata[];
	imageAlt?: string | undefined;
}

export const ImageShow: React.FC<ImageShowProps> = ({images, imageAlt = "Impression der Digitalen Lernwelten"}) => {
	const [order, setOrder] = useState<number[]>(() => images.map((_, i) => i));
	const [step, setStep] = useState(0);

	useEffect(() => {
		const arr = images.map((_, i) => i);
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j]!, arr[i]!];
		}
		setOrder(arr);
	}, [images]);

	useEffect(() => {
		const interval = setInterval(() => {
			setStep((prev) => (prev + 1) % images.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [images.length]);

	const activeIndex = order[step] ?? 0;

	return (<div className={css.show}>
		{images.map((image, i) => (<img key={i} className={i === activeIndex  ? `${css.img} ${css.active}` : css.img} src={image.src} width={image.width} height={image.height} alt={i === 0 ? imageAlt : ""} />))}
	</div>);
};