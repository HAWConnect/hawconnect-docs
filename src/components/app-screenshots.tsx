import Image from 'next/image'
import type { Locale } from '@/app/_dictionaries/i18n-config'

/** iOS screenshots of the app (600 × 1304), stored in public/screenshots. */
export type AppScreen =
	| 'home'
	| 'home-more'
	| 'calendar'
	| 'calendar-import'
	| 'timetable-settings'
	| 'semester-dates'
	| 'map'
	| 'food'
	| 'meal-detail'
	| 'cafes'
	| 'campus-life'
	| 'clubs'
	| 'haw-events'
	| 'haw-news'
	| 'quick-links'
	| 'marketplace'
	| 'marketplace-detail'
	| 'profile'

const CAPTIONS: Record<Locale, Record<AppScreen, string>> = {
	en: {
		home: 'Home with your next classes',
		calendar: 'Calendar from your myHAW timetable',
		map: 'Campus map',
		food: 'Mensa menus with prices',
		profile: 'Settings',
		'home-more': 'Semester dates, Quick Links and clubs on Home',
		'calendar-import': 'Import a calendar by link or .ics file',
		'timetable-settings': 'Calendar view modes',
		'semester-dates': 'Semester dates',
		'meal-detail': 'Dish details with prices',
		cafes: 'Cafés and mensas with opening hours',
		'campus-life': 'Campus Life events from student clubs',
		clubs: 'Student clubs and initiatives',
		'haw-events': 'Official HAW events',
		'haw-news': 'HAW news',
		'quick-links': 'Quick Links',
		marketplace: 'Marketplace for rooms and jobs',
		'marketplace-detail': 'Listing details'
	},
	de: {
		home: 'Startseite mit deinen nächsten Veranstaltungen',
		calendar: 'Kalender aus deinem myHAW-Stundenplan',
		map: 'Campuskarte',
		food: 'Speiseplan mit Preisen',
		profile: 'Einstellungen',
		'home-more': 'Semestertermine, Quick Links und Clubs auf der Startseite',
		'calendar-import': 'Kalender per Link oder .ics-Datei importieren',
		'timetable-settings': 'Ansichten des Kalenders',
		'semester-dates': 'Semestertermine',
		'meal-detail': 'Gericht mit Details und Preisen',
		cafes: 'Cafés und Mensen mit Öffnungszeiten',
		'campus-life': 'Campus-Life-Veranstaltungen von Studierendengruppen',
		clubs: 'Studentische Clubs und Initiativen',
		'haw-events': 'Offizielle HAW-Veranstaltungen',
		'haw-news': 'HAW-News',
		'quick-links': 'Quick Links',
		marketplace: 'Marktplatz für Zimmer und Jobs',
		'marketplace-detail': 'Details einer Anzeige'
	}
}

const ALL_SCREENS: AppScreen[] = ['home', 'calendar', 'food', 'map', 'profile']

/**
 * An iPhone-style frame around a screenshot. Corner radii are percentages
 * (horizontal / vertical) of the 600 × 1304 image, so the frame scales with it.
 */
export function PhoneFrame({
	screen,
	lang,
	priority = false
}: {
	screen: AppScreen
	lang: Locale
	/** Load eagerly, for a phone visible on first paint (the landing page hero). */
	priority?: boolean
}) {
	return (
		<div className="relative w-full">
			{/* Side buttons: action and volume on the left, power on the right. */}
			<span className="absolute top-[16%] -left-[1.2%] h-[4%] w-[1.6%] rounded-l-sm bg-neutral-700" />
			<span className="absolute top-[23%] -left-[1.2%] h-[7%] w-[1.6%] rounded-l-sm bg-neutral-700" />
			<span className="absolute top-[32%] -left-[1.2%] h-[7%] w-[1.6%] rounded-l-sm bg-neutral-700" />
			<span className="absolute top-[26%] -right-[1.2%] h-[11%] w-[1.6%] rounded-r-sm bg-neutral-700" />
			<div
				className="relative bg-neutral-900 p-[3.2%] shadow-xl ring-1 ring-neutral-600/60"
				style={{ borderRadius: '17% / 7.8%' }}
			>
				<Image
					src={`/screenshots/ios-${screen}.jpg`}
					alt={CAPTIONS[lang][screen]}
					width={600}
					height={1304}
					priority={priority}
					className="block h-auto w-full"
					style={{ borderRadius: '13.5% / 6.2%' }}
				/>
			</div>
		</div>
	)
}

export function AppScreenshots({
	lang = 'en',
	screens = ALL_SCREENS,
	note
}: {
	lang?: Locale
	screens?: AppScreen[]
	/** Extra line under the screenshots, e.g. a map data credit. */
	note?: string
}) {
	const single = screens.length === 1
	// Five phones fill one row on wide screens; shorter rows stay centred at a readable size.
	const itemWidth = single
		? 'w-full max-w-[260px]'
		: screens.length >= 5
			? 'w-[44%] sm:w-[30%] lg:w-[17.5%]'
			: 'w-[44%] sm:w-[30%] max-w-[240px]'
	return (
		<figure className="my-8">
			<div className="flex flex-wrap justify-center gap-x-[3%] gap-y-8">
				{screens.map((screen) => (
					<div
						key={screen}
						className={`flex flex-col items-center gap-3 ${itemWidth}`}
					>
						<PhoneFrame screen={screen} lang={lang} />
						<span className="text-center text-sm opacity-70">
							{CAPTIONS[lang][screen]}
						</span>
					</div>
				))}
			</div>
			{note && (
				<figcaption className="mt-4 text-center text-xs opacity-60">
					{note}
				</figcaption>
			)}
		</figure>
	)
}
