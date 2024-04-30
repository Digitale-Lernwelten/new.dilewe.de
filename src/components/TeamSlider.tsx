import React from 'react';

interface PlaceholderProps {
	headline: string;
	children?: React.ReactNode;
}

const TeamSlider: React.FC<PlaceholderProps> = ({
	headline,
	children,
}) => {
	const style = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '5px',
	};

	return <div style={style}>
		<h3>{headline}</h3>
		{children}
	</div>;
};

export default TeamSlider;
