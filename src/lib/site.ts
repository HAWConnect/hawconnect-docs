import type { Locale } from '@/app/_dictionaries/i18n-config'

const githubOrg = 'https://github.com/hawconnect'

export const SITE = {
	name: 'HAWConnect',
	origin: 'https://hawconnect.de',
	webApp: 'https://app.hawconnect.de',
	githubOrg,
	instagram: 'https://www.instagram.com/hawconnect',
	repos: {
		app: `${githubOrg}/hawconnect-app`,
		backend: `${githubOrg}/hawconnect-backend`,
		console: `${githubOrg}/hawconnect-console`,
		website: `${githubOrg}/hawconnect-docs`
	}
} as const

export const LEGAL_DOCS = ['privacy', 'imprint', 'terms'] as const
export type LegalDoc = (typeof LEGAL_DOCS)[number]

export function legalPath(lang: Locale, doc: LegalDoc): string {
	return `/${lang}/legal/${doc}`
}
