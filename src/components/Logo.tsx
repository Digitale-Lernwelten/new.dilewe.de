import React from 'react';
import css from './Logo.module.css';
import { motion } from 'framer-motion';

import logo from "../assets/logo-dilewe-logo.svg";
import text from "../assets/logo-dilewe-text.svg";

interface LogoProps {
	
}

export const Logo: React.FC<LogoProps> = () => {
	const variantLogo = {
		visible: { opacity: 1, transform: "translate(0,0) scale(1.0)" },
		hidden: { opacity: 0, transform: "translate(-180%, -50%) scale(1.5)" }
	};
	const variantText = {
		visible: { opacity: 1, transform: "translate(0,0)" },
		hidden: { opacity: 0, transform: "translate(20%, 180%)" }
	};

	return (
		<div className={css.wrap}>
			<motion.img
				key="logo"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.3, ease:'easeOut' }}
				className={css.logo}
				variants={variantLogo}
				src={logo.src}
				width={logo.width}
				height={logo.height}
			/>
			<motion.img
				key="text"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.3, ease:'easeOut', delay: 0.2 }}
				className={css.text}
				variants={variantText}
				src={text.src}
				width={text.width}
				height={text.height}
			/>
		</div>
	);
};