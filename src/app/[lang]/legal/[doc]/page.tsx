import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { type Locale, resolveLocale } from '@/app/_dictionaries/i18n-config'
import { LEGAL_DOCS, type LegalDoc } from '@/lib/site'

// Legal texts are maintained by hand as MDX files in src/legal/ and are the
// single source for every HAWConnect surface (website, web app, iOS, Android,
// sign-in site, console), which all link here.
export const dynamicParams = false

const LANGS: Locale[] = ['de', 'en']

const TITLES: Record<Locale, Record<LegalDoc, string>> = {
	de: {
		imprint: 'Impressum',
		privacy: 'Datenschutz',
		terms: 'Nutzungsbedingungen'
	},
	en: {
		imprint: 'Imprint',
		privacy: 'Privacy Policy',
		terms: 'Terms of Service'
	}
}

const CONTENT = {
	de: {
		imprint: () => import('@/legal/imprint.de.mdx'),
		privacy: () => import('@/legal/privacy.de.mdx'),
		terms: () => import('@/legal/terms.de.mdx')
	},
	en: {
		imprint: () => import('@/legal/imprint.en.mdx'),
		privacy: () => import('@/legal/privacy.en.mdx'),
		terms: () => import('@/legal/terms.en.mdx')
	}
} as const

type Params = Promise<{ lang: string; doc: string }>

export function generateStaticParams() {
	return LANGS.flatMap((lang) => LEGAL_DOCS.map((doc) => ({ lang, doc })))
}

function parse(lang: string, doc: string) {
	if (!(LEGAL_DOCS as readonly string[]).includes(doc)) notFound()
	return { locale: resolveLocale(lang), doc: doc as LegalDoc }
}

export async function generateMetadata({
	params
}: {
	params: Params
}): Promise<Metadata> {
	const { lang, doc } = await params
	const { locale, doc: key } = parse(lang, doc)
	return { title: TITLES[locale][key] }
}

export default async function LegalPage({ params }: { params: Params }) {
	const { lang, doc } = await params
	const { locale, doc: key } = parse(lang, doc)
	const { default: Content } = await CONTENT[locale][key]()

	return (
		<main lang={locale} className="mx-auto max-w-3xl px-6 py-12">
			<h1 className="font-bold text-4xl text-hc-text tracking-tight">
				{TITLES[locale][key]}
			</h1>
			<div className="legal-card mt-6 p-6 text-hc-text sm:p-10 [&_a]:text-hc-primary [&_a]:underline [&_a:hover]:text-hc-primary-hover [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:font-bold [&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-xl [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_p]:leading-7 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&>*:first-child]:mt-0">
				<Content />
			</div>
		</main>
	)
}
