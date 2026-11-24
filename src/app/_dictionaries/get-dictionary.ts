import 'server-only'
import type { Dictionaries, Dictionary } from './i18n-config'
import { resolveLocale } from './i18n-config'

// server side version of useTranslation hook
const dictionaries: Dictionaries = {
	en: () => import('./en'),
	de: () => import('./de')
}

export async function getDictionary(locale: string): Promise<Dictionary> {
	const { default: dictionary } = await dictionaries[resolveLocale(locale)]()
	return dictionary
}
