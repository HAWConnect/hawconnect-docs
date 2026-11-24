'use client'

import type { ContributingCard as ContributingCardType } from './types'

interface ContributingCardProps {
	card: ContributingCardType
}

export function ContributingCard({ card }: ContributingCardProps) {
	const { icon: Icon, title, description, gradient } = card

	return (
		<div className="h-full animate-card-hover">
			<div className="group relative p-6 rounded-hc-card border border-hc-border bg-hc-surface shadow-hc-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 h-full">
				<div
					className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-hc-card opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out`}
				/>
				<div className="relative flex flex-col items-center text-center space-y-4">
					<div className="relative animate-icon-hover">
						<Icon
							stroke={1.75}
							className="h-8 w-8 text-primary relative z-10"
						/>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-semibold text-primary">{title}</h3>
						<p className="text-sm text-hc-text-muted">{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
