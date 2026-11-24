import type { Icon as TablerIcon } from '@tabler/icons-react'
import type { AppScreen } from '@/components/app-screenshots'

export interface Feature {
	id: string
	icon: TablerIcon
	title: string
	description: string
	/** App screen shown in a phone frame (public/screenshots). Without it the card shows an icon tile. */
	screen?: AppScreen
	screenshotAlt: string
}
