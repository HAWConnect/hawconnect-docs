'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/lib/useTranslations'

export default function NotFound() {
	const { t, lang } = useTranslation()
	return (
		<div className="min-h-screen bg-hc-page flex items-center justify-center">
			<div className="text-center px-4">
				<h1 className="text-6xl font-bold text-primary mb-4">404</h1>
				<h2 className="text-2xl font-semibold mb-6">
					{t('common.notFound.title')}
				</h2>
				<p className="text-muted-foreground mb-8">
					{t('common.notFound.description')}
				</p>
				<Button asChild size="lg">
					<Link href={`/${lang}`}>{t('common.notFound.home')}</Link>
				</Button>
			</div>
		</div>
	)
}
