import React, { type ReactNode } from 'react';
import css from './Reference.module.css';
import { motion } from 'framer-motion';
import type { ImageMetadata } from 'astro';

interface ReferenceProps {
	image: ImageMetadata;
	odd?: boolean;
	children?: ReactNode;
}

const Reference: React.FC<ReferenceProps> = ({image, odd, children}) => {
	const variantLeft = {
		visible: { opacity: 1, transform: "translateX(0)" },
		hidden: { opacity: 0, transform: "translateX(100%)" }
	};
	const variantRight = {
		visible: { opacity: 1, transform: "translateX(0)" },
		hidden: { opacity: 0, transform: "translateX(-100%)" }
	};
	const variantsImage = odd ? variantLeft : variantRight;
	const variantsText = !odd ? variantLeft : variantRight;
	return (
		<div className={odd ? `${css.wrap} ${css.odd}` : `${css.wrap} ${css.even}`}>
			<svg height="0" width="0" style={{position:'absolute'}}>
				<defs>
					<clipPath id="referenceClipPathLeft" clipPathUnits="objectBoundingBox">
						<path d="M 0 0 L 1 0 C 0.95 0.4 0.95 0.6 1 1 L 0 1 L 0 0"></path>
					</clipPath>
					<clipPath id="referenceClipPathRight" clipPathUnits="objectBoundingBox">
						<path d="M 1 0 L 0 0 C 0.05 0.4 0.05 0.6 0 1 L 1 1 L 1 0"></path>
					</clipPath>
				</defs>
			</svg>
			<div className={css.image}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					
					variants={variantsImage}
				>
					<img src={image.src} width={image.width} height={image.height} />
				</motion.div>
			</div>
			<div className={css.text}>
					<div className={css.textInner}>
					<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.3 }}
					variants={variantsText}
				>
						{children}
				</motion.div>
					</div>
			</div>
		</div>)
};

export default Reference;
