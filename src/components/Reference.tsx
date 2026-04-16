import React, { type ReactNode, useState, useCallback, useRef } from 'react';
import css from './Reference.module.css';
import { motion } from 'framer-motion';
import type { ImageMetadata } from 'astro';

interface ReferenceProps {
	images: ImageMetadata[];
	odd?: boolean;
	children?: ReactNode;
}

const variantLeft = {
	visible: { opacity: 1, transform: "translateX(0%)" },
	hidden: { opacity: 0, transform: "translateX(8%)" }
};
const variantRight = {
	visible: { opacity: 1, transform: "translateX(0%)" },
	hidden: { opacity: 0, transform: "translateX(-8%)" }
};

const Reference: React.FC<ReferenceProps> = (props) => {
	if(!props){
		return <></>;
	}
	const {images, odd, children} = props;
	const [currentIndex, setCurrentIndex] = useState(0);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	const handleTouchStart = useCallback((e: React.TouchEvent) => {
		touchStartX.current = e.touches[0]!.clientX;
	}, []);

	const handleTouchEnd = useCallback((e: React.TouchEvent) => {
		touchEndX.current = e.changedTouches[0]!.clientX;
		const diff = touchStartX.current - touchEndX.current;
		if (Math.abs(diff) > 40) {
			if (diff > 0) {
				setCurrentIndex((prev) => (prev + 1) % images.length);
			} else {
				setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
			}
		}
	}, [images.length]);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	}, [images.length]);

	const goToPrev = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	}, [images.length]);

	const variantsImage = odd ? variantRight : variantLeft;
	const variantsText = !odd ? variantRight : variantLeft;
	const imageTransition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const, type: "tween", bounce: 0, delay: 0 };

	return (
		<div className={odd ? `${css.wrap} ${css.odd}` : `${css.wrap} ${css.even}`}>
			<div className={css.image}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={imageTransition}
					variants={variantsImage}
				>
					<div className={css.carousel} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
						{images.map((image, index) => (
							<img
								key={index}
								src={image?.src}
								width={image?.width}
								height={image?.height}
								className={`${css.carouselImg} ${index === currentIndex ? css.carouselActive : ''}`}
							/>
						))}
						{images.length > 1 && (
							<>
								<div className={css.carouselCounter}>
									{currentIndex + 1}/{images.length}
								</div>
								<button
									className={`${css.carouselNav} ${css.carouselPrev}`}
									onClick={goToPrev}
									aria-label="Vorheriges Bild"
								/>
								<button
									className={`${css.carouselNav} ${css.carouselNext}`}
									onClick={goToNext}
									aria-label="Nächstes Bild"
								/>
							</>
						)}
					</div>
				</motion.div>
			</div>
			<div className={css.text}>
					<div className={css.textInner}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.05 }}
							variants={variantsText}
						>
						{children}
					</motion.div>
				</div>
			</div>
		</div>)
};

export default Reference;
