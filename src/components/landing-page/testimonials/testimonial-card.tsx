'use client'

import { IconQuote, IconStar } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import type { TestimonialCardProps } from './types'

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	const { content, author, role, rating, delay = 0, translated } = testimonial

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay }}
			className="group relative"
		>
			<div className="relative p-8 rounded-hc-card border border-hc-border bg-hc-surface shadow-hc-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5">
				{/* Gradient background */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-hc-accent/10 rounded-hc-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

				{/* Quote icon */}
				<div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-hc-accent-soft flex items-center justify-center">
					<IconQuote stroke={1.75} className="w-4 h-4 text-hc-accent" />
				</div>

				{/* Content */}
				<div className="relative space-y-6">
					{/* Rating */}
					<div className="flex items-center gap-1">
						{Array.from({ length: rating }).map((_, i) => (
							<motion.div
								// biome-ignore lint/suspicious/noArrayIndexKey: not a problem
								key={`${author}-star-${i}`}
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 + i * 0.1 }}
								whileHover={{ scale: 1.2 }}
							>
								<IconStar
									stroke={1.75}
									className="h-4 w-4 fill-hc-accent text-hc-accent"
								/>
							</motion.div>
						))}
					</div>

					{/* Testimonial text */}
					<blockquote className="text-lg text-hc-text-muted">
						"{content}"
					</blockquote>

					{/* Author info */}
					<div className="flex items-center gap-3 pt-4 border-t border-hc-border">
						<Avatar className="ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
							<AvatarFallback>
								{author
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1">
							<div className="flex items-center gap-2">
								<div className="font-semibold text-foreground group-hover:text-primary transition-colors">
									{author}
								</div>
								{translated && (
									<Badge variant="secondary" className="text-xs">
										translated
									</Badge>
								)}
							</div>
							<div className="text-sm text-hc-text-muted">{role}</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
