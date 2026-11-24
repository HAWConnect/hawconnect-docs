import type { TroubleshootingCard as TroubleshootingCardType } from './types'

interface TroubleshootingCardProps {
	card: TroubleshootingCardType
}

export function TroubleshootingCard({ card }: TroubleshootingCardProps) {
	const { icon: Icon, title, description, gradient, link } = card

	const content = (
		<>
			<div
				className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-hc-card opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
			/>
			<div className="relative flex flex-col items-center text-center space-y-4">
				<Icon
					stroke={1.75}
					className="h-8 w-8 text-primary"
					aria-hidden="true"
				/>
				<div className="space-y-2">
					<h3 className="text-lg font-semibold text-primary">{title}</h3>
					<p className="text-sm text-hc-text-muted">{description}</p>
				</div>
			</div>
		</>
	)

	const className =
		'group relative p-6 rounded-hc-card border border-hc-border bg-hc-surface shadow-hc-card hover:border-primary/40 transition-all duration-300 h-full block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

	return (
		<div className="h-full">
			{link ? (
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className={`${className} hover:-translate-y-0.5`}
				>
					{content}
				</a>
			) : (
				<div className={className}>{content}</div>
			)}
		</div>
	)
}
