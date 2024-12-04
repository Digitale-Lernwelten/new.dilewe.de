import React, { type ReactNode } from 'react';
import css from './AboutUsHeaderCard.module.css';
import { motion } from 'framer-motion';
import type { ImageMetadata } from 'astro';
import { useWindowSize } from './useWindowSize';

interface ReferenceProps {
	image?: ImageMetadata | undefined;
	odd?: boolean;
	children?: ReactNode;
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

const AboutUsHeaderCard: React.FC<ReferenceProps> = (props) => {
	if(!props){
		return <></>;
	}
	const {image, odd, children} = props;

	let variantsImage = odd ? variantLeft : variantRight;
	const variantsText = !odd ? variantLeft : variantRight;

	const size = useWindowSize();
	if(size.width && (size.width <= 1400)){
		variantsImage = variantEye;
	}

	const imageTransition = (size.width && (size.width <= 1400))
		? ({ duration: 0.6, ease:'easeOut', type: "tween", bounce: 0 })
		: ({ duration: 0.6, ease:'easeOut', type: "tween", bounce: 0 });

	return (
		<div className={odd ? `${css.wrap} ${css.odd}` : `${css.wrap} ${css.even}`}>
			<div className={css.image}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={imageTransition}
					variants={variantsImage}
				>
					{
					image
					?
						<img src={image?.src} width={image?.width} height={image?.height} />
					:
						<div className={css.textVariant2Container}>
							<div className={css.textVariant2Wrapper}>
								<h2 className={css.textVariant2Header}>Unsere Kompetenz</h2>
								<p className={css.textVariant2}>ganzheitliche Projekte</p>
							</div>
							<div className={css.textVariant2Wrapper}>
								<h2 className={css.textVariant2Header}>Unsere Leistungen</h2>
								<p className={css.textVariant2}>alles aus einer Hand</p>
							</div>
							<div className={css.textVariant2Wrapper}>
								<h2 className={css.textVariant2Header}>Unsere Lösungen</h2>
								<p className={css.textVariant2}>als Antwort auf akute Krisen</p>
							</div>
							<div className={css.textVariant2Wrapper}>
								<h2 className={css.textVariant2Header}>Unsere Geschichte</h2>
								<p className={css.textVariant2}>über 10 Jahre Engagement für digitale Bildung</p>
							</div>
						</div>
					}

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

export default AboutUsHeaderCard;
