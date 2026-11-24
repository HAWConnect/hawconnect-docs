'use client'
import { IconWorld } from '@tabler/icons-react'
import { storeLinks } from '@/lib/download-links'
import { useTranslation } from '@/lib/useTranslations'
import type { DownloadOption } from './types'

export function useDownloadOptions() {
	const { t, lang } = useTranslation()
	const badgeSuffix = lang === 'de' ? 'DE' : 'EN'
	// Each variable is read by its full name so Next.js inlines it at build time.
	const links = storeLinks({
		NEXT_PUBLIC_APP_STORE_URL: process.env.NEXT_PUBLIC_APP_STORE_URL,
		NEXT_PUBLIC_GOOGLE_PLAY_URL: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL
	})

	const downloadOptions: DownloadOption[] = [
		{
			title: t('download.options.webVersion.title'),
			description: t('download.options.webVersion.description'),
			href: links.webApp,
			icon: IconWorld,
			gradientColors: {
				from: 'from-primary/30',
				to: 'to-hc-accent/30'
			}
		},
		{
			title: t('download.options.appStore.title'),
			description: t('download.options.appStore.description'),
			href: links.appStore,
			comingSoon: links.appStore === null,
			imageSrc: `/assets/Apple_Badge_${badgeSuffix}.svg`,
			imageAlt: t('download.options.appStore.imageAlt'),
			gradientColors: {
				from: 'from-primary/30',
				to: 'to-hc-accent/30'
			}
		},
		{
			title: t('download.options.googlePlay.title'),
			description: t('download.options.googlePlay.description'),
			href: links.googlePlay,
			comingSoon: links.googlePlay === null,
			imageSrc: `/assets/Google_Badge_${badgeSuffix}.svg`,
			imageAlt: t('download.options.googlePlay.imageAlt'),
			gradientColors: {
				from: 'from-primary/30',
				to: 'to-hc-accent/30'
			}
		}
	]

	return downloadOptions
}
