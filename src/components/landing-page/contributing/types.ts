import type { Icon as TablerIcon } from '@tabler/icons-react'

export interface ContributingCard {
	icon: TablerIcon
	title: string
	description: string
	gradient: string
	delay: number
}

export interface ContributingButton {
	href: string
	icon: TablerIcon
	label: string
	variant?: 'default' | 'outline'
	external: boolean
}
