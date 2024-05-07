import React from 'react';
import css from './TeamSliderSlide.module.css';
import type { ImageMetadata } from 'astro';
import { motion } from 'framer-motion';

export interface TeamSliderSlideProps {
	portraitLeftName?: string;
	portraitRightName?: string;
	portraitName?: string;
	portraitWide?: boolean;
	portrait: ImageMetadata;
	name: string;
	text: string;
	active?: boolean;
}

export const TeamSliderSlide: React.FC<TeamSliderSlideProps> = ({
	portraitLeftName,
	portraitRightName,
	portraitName,
	portraitWide = false,
	portrait,
	name,
	text,
	active,
}) => {
	if(!active){return null;}
	const classes = [css.slide];
	if(portraitWide){
		classes.push(css.wide);
	}

	return <div className={classes.join(' ')}>
		<motion.div
			className={css.left}
			animate={active ? 'visible' : 'hidden'}
			initial="hidden"
			transition={{ duration: 0.3, ease:'easeOut' }}
			variants={{
				visible: { opacity: 1, transform: "translate(0,0)" },
				hidden: { opacity: 0, transform: "translate(-100%,0)" }
			}}
		>
			<h4>{name}</h4>
			<p>{text}</p>
		</motion.div>
		<motion.div
			className={css.right}
			animate={active ? 'visible' : 'hidden'}
			initial="hidden"
			transition={{ duration: 0.3, ease:'easeOut' }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 }
			}}
		>
			<img src={'.' + portrait.src} width={portrait.width} height={portrait.height} alt={portraitName ? portraitName : portraitLeftName + ' und ' + portraitRightName} />
			<div className={css.nameWrap}>
				{portraitLeftName ? <span className={css.leftName}>{portraitLeftName}</span> : ''}
				{portraitRightName ? <span className={css.rightName}>{portraitRightName}</span> : ''}
				{portraitName ? <span className={css.name}>{portraitName}</span> : ''}
			</div>
		</motion.div>
	</div>;
};

export default TeamSliderSlide;
