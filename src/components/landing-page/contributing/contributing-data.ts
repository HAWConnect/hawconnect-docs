'use client'

import {
	IconBug,
	IconBulb,
	IconCode,
	IconExternalLink,
	IconLanguage
} from '@tabler/icons-react'
import { SITE } from '@/lib/site'
import { useTranslation } from '@/lib/useTranslations'
import type { ContributingButton, ContributingCard } from './types'

const GRADIENT = 'from-primary/10 to-hc-accent/10'

export function useContributingCards() {
	const { t } = useTranslation()

	const cards: ContributingCard[] = [
		{
			icon: IconCode,
			title: t('contributing.cards.source.title'),
			description: t('contributing.cards.source.description'),
			gradient: GRADIENT,
			delay: 0.2
		},
		{
			icon: IconBug,
			title: t('contributing.cards.bugs.title'),
			description: t('contributing.cards.bugs.description'),
			gradient: GRADIENT,
			delay: 0.3
		},
		{
			icon: IconLanguage,
			title: t('contributing.cards.translate.title'),
			description: t('contributing.cards.translate.description'),
			gradient: GRADIENT,
			delay: 0.4
		},
		{
			icon: IconBulb,
			title: t('contributing.cards.ideas.title'),
			description: t('contributing.cards.ideas.description'),
			gradient: GRADIENT,
			delay: 0.5
		}
	]

	return cards
}

export function useContributingButtons() {
	const { t } = useTranslation()

	const buttons: ContributingButton[] = [
		{
			href: SITE.githubOrg,
			icon: IconCode,
			label: t('contributing.buttons.source'),
			variant: 'default',
			external: true
		},
		{
			href: `${SITE.repos.app}/issues`,
			icon: IconExternalLink,
			label: t('contributing.buttons.bugs'),
			variant: 'outline',
			external: true
		}
	]

	return buttons
}
