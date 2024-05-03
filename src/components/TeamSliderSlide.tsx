import React from 'react';
import css from './TeamSliderSlide.module.css';
import type { ImageMetadata } from 'astro';

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
	if(active){
		classes.push(css.active);
	}

	return <div className={classes.join(' ')}>
		<div className={css.left}>
			<h4>{name}</h4>
			<p>{text}</p>
		</div>
		<div className={css.right}>
			<img src={'.' + portrait.src} width={portrait.width} height={portrait.height} alt={portraitName ? portraitName : portraitLeftName + ' und ' + portraitRightName} />
			<div className={css.nameWrap}>
				{portraitLeftName ? <span className={css.leftName}>{portraitLeftName}</span> : ''}
				{portraitRightName ? <span className={css.rightName}>{portraitRightName}</span> : ''}
				{portraitName ? <span className={css.name}>{portraitName}</span> : ''}
			</div>
		</div>
	</div>;
};

export default TeamSliderSlide;
