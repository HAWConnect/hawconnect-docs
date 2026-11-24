import type { Icon as TablerIcon } from '@tabler/icons-react'

export interface TroubleshootingCard {
	icon: TablerIcon
	title: string
	description: string
	gradient: string
	/** Optional external link; cards without one are plain text. */
	link?: string
}
