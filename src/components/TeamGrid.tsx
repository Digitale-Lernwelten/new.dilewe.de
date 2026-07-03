import React, { useState } from 'react';
import type { ImageMetadata } from 'astro';
import styles from './TeamGrid.module.css';

export interface TeamMember {
	name: string;
	role: string;
	description: string;
	image: ImageMetadata;
	alt: string;
	vitaUrl?: string;
	imageScale?: number;
}

interface TeamGridProps {
	members: TeamMember[];
}

function TeamCard({ name, role, description, image, alt, vitaUrl, imageScale }: TeamMember) {
	const [open, setOpen] = useState(false);

	const handleClick = (e: React.MouseEvent) => {
		if ((e.target as HTMLElement).closest('a')) return;
		setOpen((o) => !o);
	};

	const portraitStyle = imageScale
		? { transform: `scale(${imageScale})`, transformOrigin: 'center bottom' as const }
		: undefined;

	return (
		<div
			className={`${styles.card} ${open ? styles.isOpen : ''}`}
			onClick={handleClick}
			onMouseLeave={() => setOpen(false)}
		>
			<img src={image.src} alt={alt} className={styles.portrait} style={portraitStyle} />
			<div className={styles.info}>
				<p className={styles.role}>{role}</p>
				<h3 className={styles.name}>{name}</h3>
			</div>
			<div className={styles.overlay}>
				<p className={styles.overlayRole}>{role}</p>
				<h3 className={styles.overlayName}>
					{vitaUrl ? <a href={vitaUrl}>{name}</a> : name}
				</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
}

export function TeamGrid({ members }: TeamGridProps) {
	return (
		<div className={styles.grid}>
			{members.map((m, i) => (
				<TeamCard key={i} {...m} />
			))}
		</div>
	);
}
