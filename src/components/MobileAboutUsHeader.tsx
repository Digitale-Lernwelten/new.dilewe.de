import css from "./MobileAboutUsHeader.module.css"
interface IMobileAboutUsHeader {

}
export const MobileAboutUsHeader: React.FC<IMobileAboutUsHeader> = () => {
	return (
		<div className={css.header}>
			<h2 className={css.title}>Unsere Kernkompetenz</h2>
			<h3 className={css.subTitle}>Ganzheitliche digitale Bildungsprojekte</h3>
			<p className={css.text}>
				Wir kennen die Bedürfnisse öffentlicher und privater Auftraggeber – seit Jahren arbeiten wir erfolgreich mit Kultusministerien, Landesämtern, Bundesbehörden,
				Stiftungen und Vereinen zusammen. Unsere Projekte werden in diesen Kooperationen grundsätzlich termingerecht und im vereinbarten Kostenrahmen fertiggestellt.
				Die dafür notwendigen Kompetenzen sind ein effizient strukturiertes Projektmanagement, zielgenaue Kommunikation und transdisziplinäre Fachkenntnis.
			</p>
			<h2 className={css.title}>Unsere Leistungen</h2>
			<h3 className={css.subTitle}>alles aus einer Hand</h3>
			<p className={css.text}>
				Die möglichen Leistungen bei der erfolgreichen Entwicklung eines Projekts umfassen die Bereiche Strategie, Konzeption, Projektorganisation, Inhalts- und Medienproduktion,
				Technologieentwicklung, Implementierung, langfristige Betreuung und öffentliche Kommunikation.
				Wir finden praktikable Lösungen für die aktuellen und langfristigen Herausforderungen im Bildungs- und Kulturbereich – sei es Lehrkräftemangel,
				Inklusion, Medienbildung, Diversität, Bildung für nachhaltige Entwicklung, Kompetenzorientierung oder der Umgang mit künstlicher Intelligenz und virtuellen Realitäten.
			</p>
			<h2 className={css.title}>Unsere Digitalen Lösungen</h2>
			<h3 className={css.subTitle}>als Antwort auf akute Krisen</h3>
			<p className={css.text}>
				Corona, Ukraine, Lehrermangel – drei Krisen aus der letzten Zeit, auf die wir schnell und kreativ mit spezifischen digitalen Lösungen antworten konnten.
				So entstanden z. B. Lerneinheiten für den Distanzunterricht, digitale Alphabetisierungs-Materialien (DaZ) und Selbstlern-Module mit integrierten Videolehrkräften.
			</p>
			<h2 className={css.title}>Unsere Geschichte</h2>
			<h3 className={css.subTitle}>über 10 Jahre Engagement für digitale Bildung</h3>
			<p className={css.text}>
				Das Team der Digitalen Lernwelten prägt seit über zehn Jahren eine von Didaktik und Inhalt motivierte Digitalisierung der Bildung aktiv mit.
				Unter anderem stehen die Auszeichnungen ‘Schulbuch des Jahres’ und ‘Digital Publishing Award’ für diesen Weg und den damit verbundenen Erfolg.
				Wir beteiligen uns aktiv und kritisch am aktuellen Bildungsdiskurs. Dafür nutzen wir Formate wie den Podcast ‘EduCouch’ oder die gestaltende Teilnahme an Tagungen und Konferenzen.
			</p>
		</div>
	)
}