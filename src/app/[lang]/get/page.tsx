'use client'

import { IconChevronRight, IconDownload } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { DownloadCard } from '@/components/landing-page/download/download-card'
import { useDownloadOptions } from '@/components/landing-page/download/download-data'
import { SectionHeader } from '@/components/landing-page/section-header'
import { Button } from '@/components/ui/button'
import { getTarget, storeLinks } from '@/lib/download-links'
import { SITE } from '@/lib/site'
import { useTranslation } from '@/lib/useTranslations'

export default function DownloadPage() {
	const { t, lang } = useTranslation()
	const downloadOptions = useDownloadOptions()

	useEffect(() => {
		// Each variable is read by its full name so Next.js inlines it at build time.
		const links = storeLinks({
			NEXT_PUBLIC_APP_STORE_URL: process.env.NEXT_PUBLIC_APP_STORE_URL,
			NEXT_PUBLIC_GOOGLE_PLAY_URL: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL
		})
		window.location.replace(getTarget(navigator.userAgent || '', links))
	}, [])

	return (
		<div className="min-h-screen">
			<div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
				<p className="text-center text-base">
					<a
						href={SITE.webApp}
						className="font-semibold text-primary hover:underline"
					>
						{t('get.openWebApp')}
					</a>
				</p>

				<SectionHeader
					icon={IconDownload}
					title={t('download.title')}
					description={t('download.description')}
				/>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mt-16 max-w-4xl mx-auto"
					id="links"
				>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{downloadOptions.map((option, index) => (
							<motion.div
								key={option.title}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 * index, duration: 0.4 }}
							>
								<DownloadCard option={option} />
							</motion.div>
						))}
					</div>
				</motion.div>

				<div className="mt-16 text-center text-sm text-muted-foreground">
					<p>{t('get.redirecting')}</p>
				</div>

				<div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button variant="secondary" size="lg" className="group" asChild>
						<Link href={`/${lang}`}>
							{t('get.home')}
							<IconChevronRight
								stroke={1.75}
								className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
							/>
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
