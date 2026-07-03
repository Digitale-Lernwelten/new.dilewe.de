import css from "./HeaderText.module.css"
interface IHeaderText {
	title?: string;
	text?: string;
}
export const HeaderText: React.FC<IHeaderText> = ({
	title = "Manufaktur für digitale Bildung",
	text = "Die Digitalen Lernwelten konzipieren und produzieren Lösungen für Kultur, Bildung und Wissenschaft. Wir verbinden Inhalt und Technik, Wissenschaft und Praxis, Medien und Didaktik, Datenschutz und Nutzbarkeit, um mit unseren Partnern gemeinsam nachhaltige Lösungen zu entwickeln.",
}) => {
	return (
		<div className={css.header}>
			<h1 className={css.title}>{title}</h1>
			{text && <p className={css.text}>{text}</p>}
		</div>
	)
}
