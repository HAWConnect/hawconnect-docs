'use client'
import { useParams } from 'next/navigation'
import { i18n, resolveLocale } from '@/app/_dictionaries/i18n-config'
import de from '@/localization/de.json'
import en from '@/localization/en.json'

const translations = {
	en,
	de
} as const

export function useTranslation() {
	const { lang } = useParams()
	const currentLang = resolveLocale(String(lang))

	const t = (key: string): string => {
		const keys = key.split('.')
		let value: unknown = translations[currentLang]

		for (const k of keys) {
			if (value && typeof value === 'object') {
				value = (value as Record<string, unknown>)[k]
			} else {
				value = undefined
				break
			}
		}

		if (!value && currentLang !== i18n.defaultLocale) {
			let fallbackValue: unknown = translations[i18n.defaultLocale]
			for (const k of keys) {
				if (fallbackValue && typeof fallbackValue === 'object') {
					fallbackValue = (fallbackValue as Record<string, unknown>)[k]
				} else {
					fallbackValue = undefined
					break
				}
			}
			return (fallbackValue as string) || key
		}

		return (value as string) || key
	}

	return { t, lang: currentLang }
}
