import React, { useState } from 'react';
import { type TeamSliderSlideProps, TeamSliderSlide } from './TeamSliderSlide';
import TeamSliderTab from './TeamSliderTab';
import css from './TeamSlider.module.css';

interface TeamSliderProps {
	headline: string;
	slides: TeamSliderSlideProps[];
}

const TeamSlider: React.FC<TeamSliderProps> = props => {
	const headline = props.headline || '';
	const slides = props.slides || [];

	const [activeSlide, setActiveSlide] = useState<string>(() => slides[0]?.name || '');

	const slideNodes = slides.map(s => <TeamSliderSlide {...s} active={activeSlide === s.name} />);
	const slideTabs = slides.map(s => <TeamSliderTab name={s.name} active={activeSlide === s.name} setActiveSlide={setActiveSlide} />)

	return <div className={css.wrap}>
		<div className={css.headerWrap}><h3>{headline}</h3></div>
		<div className={css.slides}>{slideNodes}</div>
		<div className={css.tabs}>{slideTabs}</div>
	</div>;
};

export default TeamSlider;
