import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { LastUpdated, Layout, Navbar } from 'nextra-theme-docs'

import type { FC, ReactNode } from 'react'
import { Footer } from '@/components/footer'
import HawConnectLogo from '@/components/icons/logo'
import { LocaleSwitcher } from '@/components/locale-switcher'
import { MotionProvider } from '@/components/motion-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { SITE } from '@/lib/site'
import { getDictionary } from '../_dictionaries/get-dictionary'
import { resolveLocale } from '../_dictionaries/i18n-config'
import './global.css'

const outfit = Outfit({
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-outfit'
})

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#40296C' },
		{ media: '(prefers-color-scheme: dark)', color: '#141019' }
	]
}

export async function generateMetadata({
	params
}: {
	params: Promise<{ lang: string }>
}): Promise<Metadata> {
	const resolvedParams = await params
	const dictionary = await getDictionary(resolvedParams.lang)

	return {
		title: {
			default: dictionary.metadata.title,
			template: `%s | ${dictionary.metadata.title}`
		},
		description: dictionary.metadata.description,
		keywords: [
			'HAWConnect',
			'HAW Hamburg',
			'campus',
			'Campus-App',
			'Studierende',
			'app'
		],
		authors: [{ name: SITE.name }],
		creator: SITE.name,
		publisher: SITE.name,
		metadataBase: new URL(SITE.origin),
		openGraph: {
			type: 'website',
			locale: resolveLocale(resolvedParams.lang),
			alternateLocale:
				resolveLocale(resolvedParams.lang) === 'en' ? 'de' : 'en',
			title: dictionary.metadata.title,
			description: dictionary.metadata.description,
			siteName: dictionary.metadata.title,
			images: {
				url: '/hawconnect-icon-512.png'
			}
		},
		twitter: {
			title: dictionary.metadata.title,
			description: dictionary.metadata.description
		}
	}
}

type LayoutProps = Readonly<{
	children: ReactNode
	params: Promise<{
		lang: string
	}>
}>

const RootLayout: FC<LayoutProps> = async ({ children, params }) => {
	const resolvedParams = await params
	const { lang } = resolvedParams
	const dictionary = await getDictionary(lang)
	const pageMap = await getPageMap(`/${lang}`)

	return (
		<html lang={resolveLocale(lang)} dir="ltr" suppressHydrationWarning>
			<Head
				color={{ hue: 261, saturation: 45, lightness: { light: 30, dark: 72 } }}
				backgroundColor={{ light: '#F7F6F8', dark: '#141019' }}
			/>
			<body className={outfit.variable}>
				<MotionProvider>
					<Layout
						sidebar={{
							autoCollapse: false,
							defaultMenuCollapseLevel: 1,
							toggleButton: true
						}}
						navbar={
							<Navbar
								// Link straight to the current language: "/" is redirected by the locale proxy,
								// which breaks client navigation and leaks Next's _rsc parameter into the URL.
								logoLink={`/${lang}`}
								logo={
									<div className="flex items-center gap-2 group cursor-pointer">
										<HawConnectLogo className="h-6 w-6 rounded-md object-contain transition-transform duration-300 group-hover:scale-110" />
										<span className="text-lg font-bold text-foreground">
											{dictionary.logo.title}
										</span>
									</div>
								}
							>
								<div className="flex items-center gap-2">
									<ThemeToggle />
									<LocaleSwitcher />
								</div>
							</Navbar>
						}
						search={
							<Search
								placeholder={dictionary.search.placeholder}
								emptyResult={dictionary.search.emptyResult}
								errorText={dictionary.search.errorText}
								loading={dictionary.search.loading}
							/>
						}
						pageMap={pageMap}
						docsRepositoryBase={`${SITE.repos.website}/tree/main`}
						feedback={{
							content: 'Feedback'
						}}
						toc={{
							backToTop: dictionary.toc.backToTop,
							title: dictionary.toc.onThisPage
						}}
						lastUpdated={<LastUpdated> {dictionary.lastUpdated}</LastUpdated>}
						editLink={dictionary.editPage}
						footer={<Footer />}
					>
						{children}
					</Layout>
				</MotionProvider>
			</body>
		</html>
	)
}

export default RootLayout
