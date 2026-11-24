import type { MetadataRoute } from 'next'
import { i18n } from '@/app/_dictionaries/i18n-config'
import { legalPath, SITE } from '@/lib/site'

export const dynamic = 'force-static'

// Content pages (relative to /<lang>). Keep in sync with src/content.
const CONTENT_PATHS = [
	'',
	'/docs',
	'/docs/app',
	'/docs/app/getting-started',
	'/docs/app/download',
	'/docs/app/features',
	'/docs/app/food',
	'/docs/app/calendar',
	'/docs/app/maps',
	'/docs/app/accounts',
	'/docs/app/faq',
	'/docs/app/feedback',
	'/docs/app/troubleshoot',
	'/docs/contribute',
	'/docs/contribute/architecture',
	'/docs/contribute/contribute',
	'/docs/contribute/setup-app',
	'/docs/contribute/setup-backend',
	'/docs/contribute/setup-console',
	'/about',
	'/about/contributors'
]

export default function sitemap(): MetadataRoute.Sitemap {
	return i18n.locales.flatMap((lang) => [
		...CONTENT_PATHS.map((path) => ({
			url: `${SITE.origin}/${lang}${path}`
		})),
		...(['imprint', 'privacy', 'terms'] as const).map((doc) => ({
			url: `${SITE.origin}${legalPath(lang, doc)}`
		}))
	])
}
