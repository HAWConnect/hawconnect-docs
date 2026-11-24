import { PhoneFrame } from '@/components/app-screenshots'
import { Card } from '@/components/ui/card'
import { useTranslation } from '@/lib/useTranslations'
import type { Feature } from './types'

export function FeatureImageCard({
	icon: Icon,
	title,
	description,
	screen
}: Feature) {
	const { lang } = useTranslation()
	return (
		<Card className="group relative overflow-hidden py-0 hover:border-primary/40 transition-all duration-300 h-full">
			<div className="relative flex h-full flex-col p-6">
				{screen ? (
					// The top of the phone, fading into the card.
					<div className="relative mb-5 h-56 overflow-hidden rounded-hc-card bg-hc-primary-0 dark:bg-hc-primary-9">
						<div className="mx-auto mt-5 w-[62%] transition-transform duration-500 group-hover:-translate-y-2">
							<PhoneFrame screen={screen} lang={lang} />
						</div>
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-hc-primary-0 to-transparent dark:from-hc-primary-9" />
					</div>
				) : (
					<div className="mb-5 flex h-56 w-full items-center justify-center rounded-hc-card bg-hc-primary-0 dark:bg-hc-primary-9">
						<Icon
							stroke={1.75}
							className="h-10 w-10 text-primary"
							aria-hidden="true"
						/>
					</div>
				)}
				<h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
				<p className="text-base text-hc-text-muted">{description}</p>
			</div>
		</Card>
	)
}
