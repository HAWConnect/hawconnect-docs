import { i18n, type Locale } from '@/app/_dictionaries/i18n-config'

const supported = i18n.locales as readonly string[]

/**
 * Picks the site language from the browser's Accept-Language header:
 * the highest-weighted supported language wins, English otherwise.
 */
export function preferredLocale(acceptLanguage: string | null): Locale {
	const ranked = (acceptLanguage ?? '')
		.split(',')
		.map((part, index) => {
			const [tag, ...params] = part.trim().split(';')
			const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='))
			const weight = q ? Number(q.slice(2)) : 1
			return {
				language: tag.trim().toLowerCase().split('-')[0],
				weight: Number.isFinite(weight) ? weight : 0,
				index
			}
		})
		.filter((entry) => entry.weight > 0 && supported.includes(entry.language))
		.sort((a, b) => b.weight - a.weight || a.index - b.index)

	return (ranked[0]?.language as Locale | undefined) ?? i18n.defaultLocale
}

/**
 * Where a path without a supported locale prefix should go, or null when it
 * already has one. An unsupported two-letter prefix (e.g. /fr) is replaced.
 */
export function localeRedirectTarget(
	pathname: string,
	locale: Locale
): string | null {
	const hasLocale = supported.some(
		(l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
	)
	if (hasLocale) return null
	const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '')
	return `/${locale}${rest === '/' ? '' : rest}`
}
