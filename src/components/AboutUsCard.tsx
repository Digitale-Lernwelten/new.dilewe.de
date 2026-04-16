import React, { type ReactNode } from 'react';
import css from './AboutUsCard.module.css';
import { motion } from 'framer-motion';
import type { ImageMetadata } from 'astro';

interface AboutUsCardProps {
	image: ImageMetadata;
	odd?: boolean;
	color: "blue" | "yellow" | "pink";
	children?: ReactNode;
	isDoublePortrait: boolean
}

const variantLeft = {
	visible: { opacity: 1, transform: "translateX(0%)" },
	hidden: { opacity: 0, transform: "translateX(8%)" }
};
const variantRight = {
	visible: { opacity: 1, transform: "translateX(0%)" },
	hidden: { opacity: 0, transform: "translateX(-8%)" }
};

const AboutUsCard: React.FC<AboutUsCardProps> = (props) => {
	if(!props){
		return <></>;
	}
	const {image, odd, children, color, isDoublePortrait} = props;

	const variantsImage = odd ? variantRight : variantLeft;
	const variantsText = !odd ? variantRight : variantLeft;

	const imageTransition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const, type: "tween", bounce: 0, delay: 0 };

	return (
		<div className={odd ? `${css.wrap} ${css.odd}` : `${css.wrap} ${css.even}`}>
			<div className={`${css.image}`} >
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={imageTransition}
					variants={variantsImage}
					className={`${color === "blue" ? css.blue : color === "yellow" ? css.yellow : css.pink}`}
				>
					<img src={image?.src} width={image?.width} height={image?.height} className={` ${isDoublePortrait ? css.doublePortrait : ""} ${color === "blue" ? css.blue : color === "yellow" ? css.yellow : css.pink}`}/>

				</motion.div>
			</div>
			<div className={css.text}>
					<div className={css.textInner}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.05 }}
							variants={variantsText}
						>
						{children}
					</motion.div>
				</div>
			</div>
		</div>)
};

export default AboutUsCard;
