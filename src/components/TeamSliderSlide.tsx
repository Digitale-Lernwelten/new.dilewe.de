import React from 'react';

interface PlaceholderProps {
	portraitLeftName?: string;
	portraitRightName?: string;
	portraitName?: string;
	portraitWide?: boolean;
	slideName: string;
	children?: React.ReactNode;
}

const TeamSliderSlide: React.FC<PlaceholderProps> = ({
	portraitLeftName,
	portraitRightName,
	portraitName,
	portraitWide = false,
	slideName,
	children,
}) => {
	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '5px',
		marginBottom: portraitWide ? '0px' : '0px', // Not necessary, only done so that portraitWide is used somewhere for now
	};

	return <div style={style}>
		<h4>{slideName}</h4>
		{children}
		{portraitLeftName || ''}
		{portraitRightName || ''}
		{portraitName || ''}
	</div>;
};

export default TeamSliderSlide;
