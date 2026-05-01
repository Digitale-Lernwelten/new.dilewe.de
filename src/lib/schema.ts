const SITE_URL = 'https://dilewe.de';
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export type JsonLd = Record<string, unknown>;

type PageSchemaInput = {
	title: string;
	pathname: string;
	description?: string;
	type?: string;
	mainEntity?: JsonLd | undefined;
};

export type PodcastEpisodeSchemaInput = {
	title: string;
	description?: string;
	url: string;
	datePublished?: string;
	duration?: string;
	image?: string;
	audio?: string;
	episodeNumber?: string;
};

export type PersonSchemaInput = {
	name: string;
	pathname: string;
	description: string;
	honorificPrefix?: string;
	jobTitle?: string;
	image?: string;
	knowsAbout?: string[];
};

type Project = {
	slug: string;
	name: string;
	description: string;
	client?: string;
	url?: string;
	genre: string[];
	type?: string;
};

export const organizationSchema: JsonLd = {
	'@type': 'Organization',
	'@id': ORGANIZATION_ID,
	name: 'Digitale Lernwelten GmbH',
	alternateName: ['DLW', 'Digitale Lernwelten'],
	url: SITE_URL,
	logo: {
		'@type': 'ImageObject',
		url: `${SITE_URL}/logo-dilewe.svg`,
		contentUrl: `${SITE_URL}/logo-dilewe.svg`,
		encodingFormat: 'image/svg+xml',
	},
	description:
		'Die Digitale Lernwelten GmbH konzipiert und produziert digital-multimediale Lösungen für Bildung, Wissenschaft und Kultur.',
	foundingDate: '2018-01-16',
	legalName: 'Digitale Lernwelten GmbH',
	vatID: 'DE316654672',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Dominikanergasse 2',
		addressLocality: 'Eichstätt',
		postalCode: '85072',
		addressRegion: 'Bayern',
		addressCountry: 'DE',
	},
	telephone: '+49-8421-9862153',
	email: 'info@dilewe.de',
	contactPoint: [
		{
			'@type': 'ContactPoint',
			contactType: 'general inquiries',
			telephone: '+49-8421-9862153',
			email: 'info@dilewe.de',
			availableLanguage: ['de'],
			areaServed: ['DE', 'BE', 'AT', 'CH'],
		},
	],
	sameAs: [
		'https://www.facebook.com/digitalelernwelten',
		'https://www.linkedin.com/company/digitale-lernwelten-gmbh',
		'https://bsky.app/profile/digitalelernwelten.bsky.social',
		'https://www.instagram.com/digitalelernwelten/',
	],
	founder: [
		{
			'@type': 'Person',
			name: 'Marcus Ventzke',
			honorificPrefix: 'Prof. Dr.',
			jobTitle: 'Geschäftsführer',
		},
		{
			'@type': 'Person',
			name: 'Florian Sochatzy',
			honorificPrefix: 'Dr.',
			jobTitle: 'Geschäftsführer',
		},
	],
	knowsAbout: [
		'Digitale Bildungsmedien',
		'E-Learning',
		'Digitale Schulbücher',
		'Multimediale Museumsführungen',
		'Wissenschaftskommunikation',
		'Erinnerungskultur',
		'Politische Bildung',
		'VR-Anwendungen',
		'Kartenbasierte Informationssysteme',
		'Podcast-Produktion',
		'KI-gestützte Lernwerkzeuge',
	],
	areaServed: ['DE', 'BE', 'AT', 'CH'],
	numberOfEmployees: {
		'@type': 'QuantitativeValue',
		minValue: 20,
		maxValue: 50,
	},
	award: [
		'Digital Publishing Award 2015',
		'Schulbuch des Jahres 2016 (Georg-Eckert-Institut)',
		'Digital Publishing Award 2017',
		'Schulbuch des Jahres 2018 (Georg-Eckert-Institut)',
		'Comenius EduMedia Award 2019',
		'Nominierung Grimme Online Award 2023',
	],
	brand: [
		{
			'@type': 'Brand',
			name: 'Institut für digitales Lernen',
			alternateName: 'IdL',
			description:
				'Gegründet 2011 an der Katholischen Universität Eichstätt-Ingolstadt, seit 2026 Marke der Digitalen Lernwelten',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Leistungen',
		itemListElement: [
			'Strategieberatung',
			'Didaktische Konzeption',
			'Projektorganisation',
			'Inhaltsproduktion',
			'UX/UI-Design',
			'Softwareentwicklung',
			'Implementierung',
			'Langfristiger Betrieb',
		],
	},
};

export const websiteSchema: JsonLd = {
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	url: SITE_URL,
	name: 'Digitale Lernwelten',
	inLanguage: 'de',
	publisher: { '@id': ORGANIZATION_ID },
};

export const projects: Project[] = [
	{
		slug: 'e-learning-module-sachsen',
		name: 'E-Learning-Module für den Freistaat Sachsen',
		url: 'https://module-sachsen.dilewe.de/',
		description:
			'Lehrplankonforme digitale Lernmodule für alle Schularten und viele Fächer in Sachsen.',
		client: 'Landesamt für Schule und Bildung Sachsen und Sächsisches Staatsministerium für Kultus',
		genre: ['Schulische Bildung', 'E-Learning'],
		type: 'CreativeWork',
	},
	{
		slug: 'ki-module-niedersachsen',
		name: 'KI-Module für Niedersachsen',
		description:
			'Modulare Moodle-OER-Sammlung zum Thema Lernen mit KI mit KI-Grundlagen, Prompt-Beispielen und gesellschaftlichen Fragestellungen.',
		client: 'Niedersächsisches Landesinstitut für schulische Qualitätsentwicklung',
		genre: ['Schulische Bildung', 'Künstliche Intelligenz'],
		type: 'CreativeWork',
	},
	{
		slug: 'georegio',
		name: 'GeoRegio',
		description:
			'Dreisprachiges digitales Geografie-Lehrwerk für die Euregio Maas-Rhein mit Live-Datendiensten.',
		client: 'Euregio Maas-Rhein',
		genre: ['Schulische Bildung', 'Geografie'],
		type: 'CreativeWork',
	},
	{
		slug: 'demokratie-medien-persoenlichkeit',
		name: 'Demokratie - Medien - Persönlichkeit',
		description:
			'Digital-multimediales Lehr- und Lernmittel für politische und medienkritische Bildung.',
		client: 'Hessisches Ministerium des Innern und für Sport',
		genre: ['Politische Bildung', 'Medienkompetenz'],
		type: 'CreativeWork',
	},
	{
		slug: 'einblicke-hamburg',
		name: 'Einblicke - Hamburgs politisches System',
		url: 'https://einblicke-hamburg.de/',
		description:
			'Multimediale Bildungsplattform zum politischen System Hamburgs mit Unterrichtsmaterialien.',
		client: 'Landeszentrale für politische Bildung Hamburg',
		genre: ['Politische Bildung'],
		type: 'CreativeWork',
	},
	{
		slug: 'ns-gesundheitspolitik',
		name: 'Verachtet - verfolgt - vergessen: Die Opfer der NS-Gesundheitspolitik',
		url: 'https://gegen-das-vergessen.dilewe.de',
		description:
			'Interaktiv-digitale Lernplattform zu den Opfern der nationalsozialistischen Gesundheitspolitik.',
		client: 'Diakonie Herzogsägmühle gGmbH',
		genre: ['Erinnerungskultur', 'Gedenkstättenpädagogik'],
		type: 'CreativeWork',
	},
	{
		slug: 'flucht-und-vertreibung',
		name: 'Flucht und Vertreibung im europäischen Kontext',
		url: 'https://fluchtundvertreibung.dilewe.de/',
		description:
			'Multimediale Darstellung der deutschen Flucht-, Vertreibungs- und Integrationsgeschichte.',
		client: 'Hessisches Ministerium des Innern und für Sport und Bund der Vertriebenen Hessen',
		genre: ['Erinnerungskultur', 'Politische Bildung'],
		type: 'CreativeWork',
	},
	{
		slug: 'mguide-ronneburg',
		name: 'mGuide Ronneburg',
		url: 'https://ronneburg.dilewe.de/',
		description:
			'AudioWALK und digitales Informationssystem zur Bergbaufolgelandschaft um Ronneburg.',
		client: 'Universität Regensburg',
		genre: ['Museumsführung', 'Public History'],
		type: 'WebApplication',
	},
	{
		slug: 'infoportal-russlanddeutsche',
		name: 'Infoportal Russlanddeutsche in Hessen',
		description:
			'Interaktives Portal zur Geschichte und Gegenwart der Russlanddeutschen in Hessen.',
		client: 'Hessisches Ministerium des Innern und für Sport',
		genre: ['Politische Bildung', 'Wissenschaftskommunikation'],
		type: 'CreativeWork',
	},
	{
		slug: 'inklusion',
		name: 'Digitales Unterrichtsmaterial zur Inklusion',
		url: 'https://mpublish.cbm.de/',
		description:
			'Digitales Unterrichtsmaterial zum Thema Inklusion aus verschiedenen Blickwinkeln.',
		client: 'Christoffel Blindenmission',
		genre: ['Schulische Bildung', 'Inklusion'],
		type: 'CreativeWork',
	},
	{
		slug: 'archiv-buergerbewegung-leipzig',
		name: 'mPublish Archiv Bürgerbewegung Leipzig',
		url: 'https://dieanderejugend.de/',
		description:
			'Lehr- und Lernplattform zu Jugendkulturen in der DDR und Transformationszeit.',
		client: 'Archiv Bürgerbewegung Leipzig e.V.',
		genre: ['Erinnerungskultur', 'Politische Bildung'],
		type: 'CreativeWork',
	},
	{
		slug: 'perspektiven-behinderung',
		name: 'Wir und die anderen - globale Perspektiven auf Behinderung',
		description:
			'Unterrichtsmaterial zu globalen Perspektiven auf Behinderung und Inklusion.',
		client: 'Missio',
		genre: ['Schulische Bildung', 'Inklusion'],
		type: 'CreativeWork',
	},
	{
		slug: 'soul-chat',
		name: 'Soul Chat',
		url: 'https://soul-chat.de/',
		description:
			'Krisenchat für Jugendliche mit sicherer digitaler Kommunikation mit geschultem Personal.',
		client: 'Pädagogisch-Theologisches Zentrum der Evangelischen Landeskirche in Württemberg',
		genre: ['Beratung', 'Jugendhilfe'],
		type: 'WebApplication',
	},
	{
		slug: 'mvet',
		name: 'mVet',
		url: 'https://m-vet.de/',
		description:
			'Informations- und Weiterbildungsplattform für Fachliteratur, Schulungsmaterial und Weiterbildungsmanagement.',
		client: 'Hermann Kempf - Tierärztliche Praxis für Exoten',
		genre: ['Weiterbildung', 'Fachinformation'],
		type: 'WebApplication',
	},
	{
		slug: 'mguide-altenburg',
		name: 'mGuide Altenburg',
		url: 'https://mguidealtenburg.dilewe.app/',
		description:
			'Interaktive Stadt- und Kulturführung für Altenburg mit multimedialen Inhalten.',
		client: 'Stadt Altenburg und Sparkassenstiftung Altenburger Land',
		genre: ['Kulturführung', 'Tourismus'],
		type: 'WebApplication',
	},
	{
		slug: 'mguide-jura-museum',
		name: 'mGuide Jura Museum',
		url: 'https://mguide-jura-museum.de/',
		description:
			'Digitaler Ausstellungsführer für das Jura Museum auf der Willibaldsburg.',
		client: 'Staatliche Naturwissenschaftliche Sammlungen Bayerns und Bayerische Schlösserverwaltung',
		genre: ['Museumsführung', 'Naturwissenschaft'],
		type: 'WebApplication',
	},
	{
		slug: 'keeping-memories',
		name: 'Keeping Memories',
		description:
			'Digitale Lernplattform zur biografischen Arbeit mit Lebensgeschichten ehemaliger Gefangener des KZ Flossenbürg.',
		client: 'KZ-Gedenkstätte Flossenbürg / Stiftung Bayerische Gedenkstätten',
		genre: ['Erinnerungskultur', 'Gedenkstättenpädagogik'],
		type: 'CreativeWork',
	},
	{
		slug: 'mmmmo',
		name: "Mechthild's Medieval Mystical Manuscripts Online",
		url: 'https://www.helftamysticism.org/',
		description:
			'Wissenschaftliches Datenvisualisierungs- und Auswertungsinstrument für mittelalterliche Handschriften.',
		client: 'Universität Oxford, Faculty of Medieval and Modern Languages',
		genre: ['Wissenschaftskommunikation', 'Datenvisualisierung'],
		type: 'WebApplication',
	},
	{
		slug: 'spiegelarche',
		name: 'Kosmos SpiegelArche',
		url: 'https://www.spiegelarche.de/',
		description:
			'VR-Ausstellung mit Szenarien zu utopischen und dystopischen Versionen von Vergangenheit und Zukunft.',
		client: 'Der Grüne Salon e.V.',
		genre: ['VR-Ausstellung', 'Wissenschaftskommunikation'],
		type: 'CreativeWork',
	},
	{
		slug: 'vielfalt-der-religionen',
		name: 'Ausstellung Vielfalt der Religionen',
		url: 'https://religionen-in-sachsen.slpb.de/',
		description:
			'Hybride Wanderausstellung zur Vielfalt religiöser Gemeinschaften in Sachsen mit digitalen Begleitmedien.',
		client: 'Sächsische Landeszentrale für politische Bildung',
		genre: ['Politische Bildung', 'Ausstellung'],
		type: 'CreativeWork',
	},
	{
		slug: 'netbook-deutsch',
		name: 'netBook Deutsch',
		url: 'https://netbook-deutsch.de/',
		description:
			'Multimediales und adaptives digitales Lehrwerk für das Fach Deutsch der 5. und 6. Klasse.',
		client: 'Digitale Lernwelten',
		genre: ['Schulische Bildung', 'Deutschunterricht'],
		type: 'SoftwareApplication',
	},
	{
		slug: 'mbook-gl-nrw',
		name: 'Plattform Digitale Schule NRW & mBook GL',
		description:
			'Zugelassenes digitales Schulbuch für Geschichte mit Erweiterungen für inklusives Lernen.',
		client: 'Ministerium für Schule und Bildung des Landes Nordrhein-Westfalen',
		genre: ['Schulische Bildung', 'Inklusion', 'Geschichtsunterricht'],
		type: 'CreativeWork',
	},
];

export function canonicalUrl(pathname: string): string {
	return new URL(pathname, SITE_URL).toString();
}

function schemaIdFromUrl(url: string, fragment: string): string {
	return `${url.replace(/\/?$/, '/')}#${fragment}`;
}

function projectAudience(project: Project): JsonLd {
	const isEducational = project.genre.some((genre) =>
		['Schulische Bildung', 'E-Learning', 'Politische Bildung', 'Weiterbildung'].includes(genre)
	);

	return {
		'@type': isEducational ? 'EducationalAudience' : 'Audience',
		audienceType: isEducational
			? 'Lernende, Lehrkräfte und Bildungsinstitutionen'
			: 'Institutionen aus Bildung, Wissenschaft und Kultur',
	};
}

function applicationMetadata(project: Project): JsonLd {
	if (!['SoftwareApplication', 'WebApplication'].includes(project.type ?? '')) return {};

	return {
		applicationCategory: 'EducationalApplication',
		operatingSystem: 'Web browser',
	};
}

function breadcrumbNameForSegment(segment: string): string {
	const labels: Record<string, string> = {
		datenschutz: 'Datenschutz',
		'florian-sochatzy-vita': 'Dr. Florian Sochatzy',
		geschichte: 'Geschichte',
		impressum: 'Impressum',
		kommunikation: 'Kommunikation',
		educouch: 'Podcast EduCouch',
		gdm: 'GdM',
		'marcus-ventzke-vita': 'Prof. Dr. Marcus Ventzke',
		referenzen: 'Referenzen',
	};

	return labels[segment] ?? segment.replace(/-/g, ' ');
}

export function createBreadcrumbSchema(pathname: string, currentTitle: string): JsonLd | undefined {
	const segments = pathname.split('/').filter(Boolean);
	if (!segments.length) return undefined;

	const itemListElement = [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Digitale Lernwelten',
			item: `${SITE_URL}/`,
		},
		...segments.map((segment, index) => {
			const path = `/${segments.slice(0, index + 1).join('/')}/`;
			const isCurrentPage = index === segments.length - 1;
			const project = isCurrentPage ? getProjectByPathname(path) : undefined;

			return {
				'@type': 'ListItem',
				position: index + 2,
				name: project?.name ?? (isCurrentPage ? currentTitle : breadcrumbNameForSegment(segment)),
				item: canonicalUrl(path),
			};
		}),
	];

	return {
		'@type': 'BreadcrumbList',
		'@id': `${canonicalUrl(pathname)}#breadcrumb`,
		itemListElement,
	};
}

export function createWebPageSchema({
	title,
	pathname,
	description,
	type = 'WebPage',
	mainEntity,
}: PageSchemaInput): JsonLd {
	const url = canonicalUrl(pathname);

	return {
		'@type': type,
		'@id': `${url}#webpage`,
		url,
		name: title,
		description,
		inLanguage: 'de',
		isPartOf: { '@id': WEBSITE_ID },
		about: { '@id': ORGANIZATION_ID },
		mainEntity,
	};
}

export function createPersonSchema({
	name,
	pathname,
	description,
	honorificPrefix,
	jobTitle,
	image,
	knowsAbout,
}: PersonSchemaInput): JsonLd {
	const url = canonicalUrl(pathname);

	return {
		'@type': 'Person',
		'@id': `${url}#person`,
		name,
		honorificPrefix,
		jobTitle,
		description,
		url,
		image,
		worksFor: { '@id': ORGANIZATION_ID },
		affiliation: { '@id': ORGANIZATION_ID },
		knowsAbout,
	};
}

export function createReferencesCollectionSchema(): JsonLd {
	return {
		'@type': 'CollectionPage',
		'@id': `${SITE_URL}/referenzen/#webpage`,
		url: `${SITE_URL}/referenzen/`,
		name: 'Referenzen',
		description:
			'Auswahl aktueller Projekte der Digitalen Lernwelten in Kultur, Bildung und Wissenschaft.',
		inLanguage: 'de',
		isPartOf: { '@id': WEBSITE_ID },
		about: { '@id': ORGANIZATION_ID },
		mainEntity: {
			'@type': 'ItemList',
			name: 'Referenzen der Digitalen Lernwelten',
			itemListElement: projects.map((project, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				item: createProjectSchema(project),
			})),
		},
	};
}

export function createProjectSchema(project: Project): JsonLd {
	const localUrl = `${SITE_URL}/referenzen/${project.slug}/`;

	return {
		'@type': project.type ?? 'CreativeWork',
		'@id': `${localUrl}#project`,
		name: project.name,
		url: project.url ?? localUrl,
		description: project.description,
		keywords: project.genre,
		audience: projectAudience(project),
		creator: { '@id': ORGANIZATION_ID },
		provider: { '@id': ORGANIZATION_ID },
		funder: project.client
			? {
					'@type': 'Organization',
					name: project.client,
				}
			: undefined,
		genre: project.genre,
		inLanguage: 'de',
		...applicationMetadata(project),
	};
}

export function createProjectPageSchema(project: Project): JsonLd[] {
	const projectSchema = createProjectSchema(project);

	return [
		createWebPageSchema({
			title: project.name,
			pathname: `/referenzen/${project.slug}/`,
			description: project.description,
			mainEntity: { '@id': projectSchema['@id'] },
		}),
		projectSchema,
	];
}

export function getProjectByPathname(pathname: string): Project | undefined {
	const match = pathname.match(/^\/referenzen\/([^/]+)\/?$/);
	if (!match) return undefined;

	return projects.find((project) => project.slug === match[1]);
}

export function createPodcastSeriesSchema(): JsonLd {
	return {
		'@type': 'PodcastSeries',
		'@id': `${SITE_URL}/kommunikation/educouch/#podcast`,
		name: 'EduCouch',
		url: `${SITE_URL}/kommunikation/educouch/`,
		description:
			'Bildungs-Podcast an der Schnittstelle von Bildung, Digitalisierung und Gesellschaft.',
		inLanguage: 'de',
		creator: { '@id': ORGANIZATION_ID },
		publisher: { '@id': ORGANIZATION_ID },
		genre: ['Bildung', 'Digitalisierung'],
	};
}

export function createPodcastEpisodeSchemas(episodes: PodcastEpisodeSchemaInput[]): JsonLd[] {
	return episodes.map((episode) => ({
		'@type': 'PodcastEpisode',
		'@id': schemaIdFromUrl(episode.url, 'episode'),
		name: episode.title,
		url: episode.url,
		description: episode.description,
		datePublished: episode.datePublished,
		duration: episode.duration,
		episodeNumber: episode.episodeNumber,
		image: episode.image,
		inLanguage: 'de',
		partOfSeries: { '@id': `${SITE_URL}/kommunikation/educouch/#podcast` },
		associatedMedia: episode.audio
			? {
					'@type': 'MediaObject',
					contentUrl: episode.audio,
					encodingFormat: 'audio/mpeg',
				}
			: undefined,
	}));
}

export function createJsonLdGraph(schemas: JsonLd[]): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@graph': schemas,
	};
}

export function serializeJsonLd(schemas: JsonLd[]): string {
	return JSON.stringify(createJsonLdGraph(schemas.filter(Boolean))).replace(/</g, '\\u003c');
}
