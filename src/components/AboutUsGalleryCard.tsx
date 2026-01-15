import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutUsGalleryCard.module.css';
import { useWindowSize } from './useWindowSize';

interface AboutUsGalleryCardProps {
	images: ImageMetadata[];
}

const variantLeft = {
	visible: { opacity: 1, transform: "translateX(0%)" },
	hidden: { opacity: 0.5, transform: "translateX(10%)" }
};
const variantRight = {
	visible: { opacity: 1, transform: "translateX(0%)" },
	hidden: { opacity: 0.5, transform: "translateX(-10%)" }
};
const variantEye = {
	visible: { opacity: 1, transform: "scaleY(1)" },
	hidden: { opacity: 0.01, transform: "scaleY(0.1)" }
};

export function AboutUsGalleryCard({ images }: AboutUsGalleryCardProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isExpanded, setIsExpanded] = useState(false);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const scrollPosRef = useRef(0);
	const size = useWindowSize();

	let variantsGallery = variantLeft;
	const variantsText = variantRight;

	if (size.width && size.width <= 1400) {
		variantsGallery = variantEye;
	}

	const resetTimer = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		if (images.length > 1 && !isExpanded) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % images.length);
			}, 3000);
		}
	}, [images.length, isExpanded]);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
		resetTimer();
	}, [images.length, resetTimer]);

	const goToPrev = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
		resetTimer();
	}, [images.length, resetTimer]);

	const toggleExpanded = useCallback(() => {
		setIsExpanded((prev) => !prev);
	}, []);

	// Lock body scroll when expanded
	useEffect(() => {
		if (isExpanded) {
			scrollPosRef.current = window.scrollY;
			document.body.style.overflow = 'hidden';
			document.documentElement.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.width = '100%';
			document.body.style.top = `-${scrollPosRef.current}px`;
		} else {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.top = '';
			window.scrollTo(0, scrollPosRef.current);
		}
		return () => {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
			document.body.style.top = '';
		};
	}, [isExpanded]);

	useEffect(() => {
		resetTimer();
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [resetTimer, isExpanded]);

	const galleryContent = (
		<>
			<div className={styles.counter}>
				{currentIndex + 1}/{images.length}
			</div>
			<div className={styles.imageContainer}>
				{images.map((image, index) => (
					<img
						key={index}
						src={image.src}
						alt={`Team image ${index + 1}`}
						className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
					/>
				))}
			</div>
			{images.length > 1 && (
				<>
					<button
						className={`${styles.navButton} ${styles.prevButton}`}
						onClick={goToPrev}
						aria-label="Previous image"
					/>
					<button
						className={`${styles.navButton} ${styles.nextButton}`}
						onClick={goToNext}
						aria-label="Next image"
					/>
				</>
			)}
			<button
				className={`${styles.fullscreenButton} ${isExpanded ? styles.expanded : ''}`}
				onClick={toggleExpanded}
				aria-label="Toggle fullscreen"
			/>
		</>
	);

	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.galleryContainer}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: 'easeOut', type: "tween", bounce: 0, delay: 0.1 }}
						variants={variantsGallery}
						className={styles.galleryInner}
					>
						<div className={styles.gallery}>
							{galleryContent}
						</div>
					</motion.div>
				</div>
				<div className={styles.text}>
					<div className={styles.textInner}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
							variants={variantsText}
						>
							<h2>Team</h2>
							<h3>alle zusammen</h3>
							<p>Gute Bildungsmedien entstehen nicht am Schreibtisch allein. Sie wachsen, wenn unterschiedliche Perspektiven zusammenkommen: Didaktik trifft auf Design, Technik auf Inhalt, Konzept auf Umsetzung. Bei uns arbeiten Menschen miteinander, die ihr Fach verstehen – und Lust haben, gemeinsam etwas Neues zu schaffen. Kürzeste Wege, keine Türen und die Freude daran, Ideen wirklich umzusetzen: Das macht den Unterschied. Die besten Ideen und Umsetzungen entstehen da, wo Menschen gerne zusammenarbeiten.</p>
						</motion.div>
					</div>
				</div>
			</div>
			{isExpanded && (
				<div className={styles.overlay} onClick={toggleExpanded}>
					<div className={styles.expandedGallery} onClick={(e) => e.stopPropagation()}>
						{galleryContent}
					</div>
				</div>
			)}
		</>
	);
}

