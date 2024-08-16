import React, { type ReactNode } from 'react';
import css from './Reference.module.css';
import { motion } from 'framer-motion';
import type { ImageMetadata } from 'astro';
import { useWindowSize } from './useWindowSize';

interface ReferenceProps {
	image: ImageMetadata;
	odd?: boolean;
	children?: ReactNode;
	backgroundColor: string;
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
}

const Reference: React.FC<ReferenceProps> = (props) => {
	if(!props){
		return <></>;
	}
	const {image, odd, children, backgroundColor} = props;
	let variantsImage = odd ? variantLeft : variantRight;
	const variantsText = !odd ? variantLeft : variantRight;

	const size = useWindowSize();
	if(size.width && (size.width <= 900)){
		variantsImage = variantEye;
	}

	const imageTransition = (size.width && (size.width <= 900))
		? ({ duration: 0.6, ease:'circInOut', type: "spring", bounce: 0.5 })
		: ({ duration: 0.3, ease:'easeOut', type: "spring", bounce: 0.5 });

	const wrapClasses = [css.wrap]; 
	if (odd) {
		wrapClasses.push(css.odd);
	} else {
		wrapClasses.push(css.even);
	}

	if (backgroundColor){
		wrapClasses.push(css.hasBackgroundColor)
	}

	return (
		<div className={wrapClasses.join(' ')}>
			<div className={css.image}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={imageTransition}
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
