import type EnglishLocale from './en'

export const i18n = {
	defaultLocale: 'en',
	locales: ['en', 'de']
} as const

export type Locale = (typeof i18n)['locales'][number]

export type Dictionary = typeof EnglishLocale

export type Dictionaries = Record<
	Locale,
	() => Promise<{ default: Dictionary }>
>

/** Maps any string to a supported locale; unknown values fall back to English. */
export function resolveLocale(locale: string): Locale {
	return (i18n.locales as readonly string[]).includes(locale)
		? (locale as Locale)
		: i18n.defaultLocale
}
