import React from 'react';
import css from './HeaderTextParagraph.module.css';
import { motion } from 'framer-motion';

interface HeaderTextParagraph {
	header: string;
	subheader: string;
	text: string;
}

export const HeaderTextParagraph: React.FC<HeaderTextParagraph> = ({header, subheader, text}) => {
	return (
		<div className={css.wrap}>
			<div className={css.headers}>
				<motion.h3
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.2, ease:'easeOut' }}
					variants={{
						visible: { opacity: 1, transform: "translate(0,0) scale(1.0)" },
						hidden: { opacity: 0, transform: "translate(-180%, -50%) scale(1.5)" }
					}}
				>{header}</motion.h3>
				<motion.h4
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.3, ease:'easeOut', delay: 0.2 }}
					variants={{
						visible: { opacity: 1, transform: "translate(0,0) scale(1.0)" },
						hidden: { opacity: 0, transform: "translate(-180%, -50%) scale(1.5)" }
					}}
				>{subheader}</motion.h4>
			</div>
			<div className={css.text}>
			<motion.p
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.4, ease:'easeOut', delay: 0.4 }}
				variants={{
					visible: { opacity: 1, transform: "translate(0,0)" },
					hidden: { opacity: 0, transform: "translate(180%, 0)" }
				}}
			>{text}</motion.p>
			</div>
		</div>
	);
};