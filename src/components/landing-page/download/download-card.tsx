'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from '@/lib/useTranslations'
import type { DownloadCardProps } from './types'

export function DownloadCard({ option }: DownloadCardProps) {
	const {
		title,
		description,
		href,
		comingSoon,
		icon: Icon,
		imageSrc,
		imageAlt,
		gradientColors
	} = option
	const { t } = useTranslation()
	const content = (
		<div className="relative h-full p-8 rounded-hc-card border border-hc-border bg-hc-surface shadow-hc-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5">
			<div className="flex flex-col items-center text-center space-y-6">
				<div
					className={`relative animate-icon-hover ${comingSoon ? 'opacity-50' : ''}`}
				>
					<div
						className={`absolute inset-0 bg-gradient-to-r ${gradientColors.from} ${gradientColors.to} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
					/>
					{imageSrc && imageAlt ? (
						<Image
							src={imageSrc}
							alt={comingSoon ? '' : imageAlt}
							width={56}
							height={56}
							className="h-14 w-auto relative z-10"
						/>
					) : (
						Icon && (
							<Icon
								stroke={1.75}
								className="h-14 w-14 text-primary relative z-10"
							/>
						)
					)}
				</div>
				<div className="space-y-2">
					<div className="text-sm font-medium text-hc-text-muted">
						{description}
					</div>
					<div
						className={`text-xl font-semibold text-primary ${comingSoon ? 'opacity-60' : ''}`}
					>
						{title}
					</div>
					{comingSoon && (
						<Badge>
							{t('download.comingSoon')}
							<span className="sr-only"> ({t('download.unavailable')})</span>
						</Badge>
					)}
				</div>
			</div>
		</div>
	)

	return (
		<div className="relative">
			{href && !comingSoon ? (
				<a
					href={href}
					className="group relative block rounded-hc-card animate-card-hover animate-card-tap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
				>
					{content}
				</a>
			) : (
				<div
					aria-disabled="true"
					className="group relative block cursor-not-allowed"
				>
					{content}
				</div>
			)}
		</div>
	)
}
