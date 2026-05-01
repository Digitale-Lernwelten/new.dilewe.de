import css from "./MobileAboutUsHeader.module.css"

export interface AboutUsHeaderSection {
	title: string;
	subTitle: string;
	text: string;
}

interface IMobileAboutUsHeader {
	sections: AboutUsHeaderSection[];
}

export const MobileAboutUsHeader: React.FC<IMobileAboutUsHeader> = ({ sections }) => {
	return (
		<div className={css.header}>
			{sections.map((section) => (
				<div key={section.title}>
					<h2 className={css.title}>{section.title}</h2>
					<h3 className={css.subTitle}>{section.subTitle}</h3>
					<p className={css.text}>{section.text}</p>
				</div>
			))}
		</div>
	)
}