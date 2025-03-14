import css from "./MobileHeaderText.module.css"
interface IMobileHeaderText {

}
export const MobileHeaderText: React.FC<IMobileHeaderText> = () => {
	return (
		<div className={css.header}>
			<h1 className={css.title}>Manufaktur für digitale Bildung</h1>
			<p className={css.text}>
				Die Digitalen Lernwelten konzipieren und produzieren Lösungen für Kultur, Bildung und Wissenschaft.
				Wir verbinden Inhalt und Technik, Wissenschaft und Praxis, Medien und Didaktik, Datenschutz und Nutzbarkeit, um mit unseren Partnern gemeinsam nachhaltige Lösungen zu entwickeln.
			</p>
		</div>
	)
}