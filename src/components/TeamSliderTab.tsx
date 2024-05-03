import React, { useCallback } from 'react';
import css from './TeamSliderTab.module.css';

export interface TeamSliderTabProps {
	name: string;
	active?: boolean;
	setActiveSlide: (name: string) => void,
}

const TeamSliderTab: React.FC<TeamSliderTabProps> = ({
	name,
	active = false,
	setActiveSlide,
}) => {
	const onClick = useCallback(() => setActiveSlide(name), [setActiveSlide, name]);
	const classes = [css.tab];
	if(active){
		classes.push(css.active)
	}

	return <h4 className={classes.join(' ')} onClick={onClick}>{name}</h4>;
};

export default TeamSliderTab;
