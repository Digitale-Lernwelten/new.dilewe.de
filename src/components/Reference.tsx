import React, { type ReactNode } from 'react';
import css from './Reference.module.css';
import { motion } from 'framer-motion';
import type { ImageMetadata } from 'astro';
import { useWindowSize } from './useWindowSize';

interface ReferenceProps {
	image: ImageMetadata;
	odd?: boolean;
	children?: ReactNode;
}

const variantLeft = {
	visible: { opacity: 1, transform: "translateX(0)" },
	hidden: { opacity: 0, transform: "translateX(100%)" }
};
const variantRight = {
	visible: { opacity: 1, transform: "translateX(0)" },
	hidden: { opacity: 0, transform: "translateX(-100%)" }
};
const variantEye = {
	visible: { opacity: 1, transform: "scaleY(1)" },
	hidden: { opacity: 0, transform: "scaleY(0)" }
}

const Reference: React.FC<ReferenceProps> = (props) => {
	if(!props){
		return <></>;
	}
	const {image, odd, children} = props;

	let variantsImage = odd ? variantLeft : variantRight;
	const variantsText = !odd ? variantLeft : variantRight;

	const size = useWindowSize();
	if(size.width && (size.width <= 900)){
		variantsImage = variantEye;
	}

	const imageTransition = (size.width && (size.width <= 900))
		? ({ duration: 0.6, ease:'circInOut', type: "spring", bounce: 0.5 })
		: ({ duration: 0.3, ease:'easeOut', type: "spring", bounce: 0.5 });

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
					<clipPath id="headerImageClipPathTop" clipPathUnits="objectBoundingBox">
						<path d="M 1 0.2 C 0.6667 -0.05 0.3333 -0.05 0 0.2 L 0 0.8 C 0.3333 1.05 0.6667 1.05 1 0.8 L 1 0.2"></path>
					</clipPath>
				</defs>
			</svg>
			<div className={css.image}>
				<motion.img
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={imageTransition}
					variants={variantsImage}
					src={image.src}
					width={image.width}
					height={image.height}
				/>
			</div>
			<div className={css.text}>
					<div className={css.textInner}>
						<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.3, ease:'easeOut' }}
						variants={variantsText}
					>
						{children}
					</motion.div>
				</div>
			</div>
		</div>)
};

export default Reference;
