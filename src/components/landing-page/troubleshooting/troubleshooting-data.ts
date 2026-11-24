'use client'

import {
	IconBug,
	IconCalendarX,
	IconLogin,
	IconToolsKitchen2
} from '@tabler/icons-react'
import { SITE } from '@/lib/site'
import { useTranslation } from '@/lib/useTranslations'
import type { TroubleshootingCard } from './types'

const GRADIENT = 'from-primary/10 to-hc-accent/10'

export function useTroubleshootingCards() {
	const { t } = useTranslation()

	const cards: TroubleshootingCard[] = [
		{
			icon: IconCalendarX,
			title: t('troubleshooting.cards.calendar.title'),
			description: t('troubleshooting.cards.calendar.description'),
			gradient: GRADIENT
		},
		{
			icon: IconLogin,
			title: t('troubleshooting.cards.signin.title'),
			description: t('troubleshooting.cards.signin.description'),
			gradient: GRADIENT
		},
		{
			icon: IconToolsKitchen2,
			title: t('troubleshooting.cards.menu.title'),
			description: t('troubleshooting.cards.menu.description'),
			gradient: GRADIENT
		},
		{
			icon: IconBug,
			title: t('troubleshooting.cards.bug.title'),
			description: t('troubleshooting.cards.bug.description'),
			gradient: GRADIENT,
			link: `${SITE.repos.app}/issues`
		}
	]

	return cards
}
