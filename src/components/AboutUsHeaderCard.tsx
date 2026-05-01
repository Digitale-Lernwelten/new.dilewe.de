import React from 'react';
import css from './AboutUsHeaderCard.module.css';
import { motion } from 'framer-motion';
import type { ImageMetadata } from 'astro';
import { useWindowSize } from './useWindowSize';
import { MobileAboutUsHeader, type AboutUsHeaderSection } from './MobileAboutUsHeader';

interface ReferenceProps {
	image?: ImageMetadata | undefined;
	alt?: string | undefined;
	odd?: boolean;
	sections: AboutUsHeaderSection[];
}

const variantLeft = {
	visible: { opacity: 1, transform: "translateX(0%)" },
	hidden: { opacity: 0.5, transform: "translateX(10%)" }
};
const variantRight = {
	visible: { opacity: 1, transform: "translateX(0%)" },
	hidden: { opacity: 0.5, transform: "translateX(-10%)" }
};
const AboutUsHeaderCard: React.FC<ReferenceProps> = (props) => {
	if(!props){
		return <></>;
	}
	const {image, alt, odd, sections} = props;

	let variantsImage = odd ? variantLeft : variantRight;
	const variantsText = !odd ? variantLeft : variantRight;

	const size = useWindowSize();
	if(size.width && (size.width <= 1400)){
		return <MobileAboutUsHeader sections={sections} />;
	}

	const imageTransition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const, type: "tween" as const, bounce: 0 };

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
						<img src={image?.src} width={image?.width} height={image?.height} alt={alt ?? ""} />
					:
						<div className={css.textVariant2Container}>
							{sections.map((section) => (
								<div className={css.textVariant2Wrapper} key={section.title}>
									<h2 className={css.textVariant2Header}>{section.title}</h2>
									<p className={css.textVariant2}>{section.subTitle}</p>
								</div>
							))}
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
							transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.05 }}
							variants={variantsText}
						>
						<div className="alignedWrapper">
							{sections.map((section) => (
								<p className="aligned" key={section.title}>{section.text}</p>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</div>)
};

export default AboutUsHeaderCard;
