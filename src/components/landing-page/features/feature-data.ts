'use client'
import {
	IconCalendarEvent,
	IconClock,
	IconLink,
	IconMapPin,
	IconNews,
	IconShoppingBag,
	IconToolsKitchen2,
	IconUsers
} from '@tabler/icons-react'
import { useTranslation } from '@/lib/useTranslations'
import type { Feature } from './types'

// `screen` picks an iOS screenshot from public/screenshots; features without one show their icon.
const FEATURE_DEFS = [
	{ id: 'food', icon: IconToolsKitchen2, screen: 'food' },
	{ id: 'schedule', icon: IconClock, screen: 'home' },
	{ id: 'calendar', icon: IconCalendarEvent, screen: 'calendar' },
	{ id: 'map', icon: IconMapPin, screen: 'map' },
	{ id: 'events', icon: IconNews, screen: 'haw-events' },
	{ id: 'marketplace', icon: IconShoppingBag, screen: 'marketplace' },
	{ id: 'clubs', icon: IconUsers, screen: 'campus-life' },
	{ id: 'quicklinks', icon: IconLink, screen: 'quick-links' }
] satisfies { id: string; icon: Feature['icon']; screen?: Feature['screen'] }[]

export function useFeatures(): Feature[] {
	const { t } = useTranslation()

	return FEATURE_DEFS.map((def) => ({
		...def,
		title: t(`features.items.${def.id}.title`),
		description: t(`features.items.${def.id}.description`),
		screenshotAlt: t(`features.items.${def.id}.title`)
	}))
}
