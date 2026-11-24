import type { Icon as TablerIcon } from '@tabler/icons-react'

export interface DownloadOption {
	title: string
	description: string
	href: string | null
	comingSoon?: boolean
	icon?: TablerIcon
	imageSrc?: string
	imageAlt?: string
	gradientColors: {
		from: string
		to: string
	}
}

export interface DownloadCardProps {
	option: DownloadOption
}
