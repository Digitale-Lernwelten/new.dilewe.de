import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
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

	return <h4 className={css.tab} onClick={onClick}>
		{name}
		<motion.div
			className={css.underline}
			animate={active ? 'visible' : 'hidden'}
			initial="hidden"
			transition={{ duration: 0.5, ease:'easeOut' }}
			variants={{
				visible: { transform: "scale(1)" },
				hidden: { transform: "scale(0)" }
			}}
		/>
	</h4>;
};

export default TeamSliderTab;
