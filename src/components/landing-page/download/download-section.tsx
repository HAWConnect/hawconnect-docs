'use client'

import { IconDownload } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/useTranslations'
import { SectionHeader } from '../section-header'
import { DownloadCard } from './download-card'
import { useDownloadOptions } from './download-data'

export function DownloadSection() {
	const { t } = useTranslation()
	const downloadOptions = useDownloadOptions()

	return (
		<section className="py-20 sm:py-32 relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--hc-primary)_5%,transparent),transparent_70%)]" />

			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `
					linear-gradient(to right, rgb(0 0 0 / 0.02) 1px, transparent 1px),
					linear-gradient(to bottom, rgb(0 0 0 / 0.02) 1px, transparent 1px)
				`,
					backgroundSize: '4rem 4rem'
				}}
			/>

			<div
				className="absolute inset-0 dark:block hidden"
				style={{
					backgroundImage: `
					linear-gradient(to right, rgb(255 255 255 / 0.02) 1px, transparent 1px),
					linear-gradient(to bottom, rgb(255 255 255 / 0.02) 1px, transparent 1px)
				`,
					backgroundSize: '4rem 4rem'
				}}
			/>

			<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
				<div className="relative">
					<SectionHeader
						icon={IconDownload}
						title={t('download.title')}
						description={t('download.description')}
					/>

					<div className="mt-16 max-w-4xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{downloadOptions.map((option) => (
								<motion.div
									key={option.title}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: 0.1 * downloadOptions.indexOf(option),
										duration: 0.4
									}}
								>
									<DownloadCard option={option} />
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
