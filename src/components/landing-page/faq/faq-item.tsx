'use client'

import { IconMinus, IconPlus } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { FAQItemProps } from './types'

export function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<motion.button
			onClick={onToggle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="group w-full text-left p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-hc-card bg-hc-surface border border-hc-border relative overflow-hidden shadow-hc-card hover:border-primary/40 transition-colors duration-300"
			type="button"
		>
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10"
				initial={{ opacity: 0 }}
				animate={{ opacity: isHovered ? 1 : 0 }}
				transition={{ duration: 0.3 }}
			/>

			<div className="relative z-10">
				<div className="flex items-center justify-between gap-4">
					<h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
						{faq.question}
					</h3>
					<div className="flex-shrink-0">
						<motion.div
							animate={{
								rotate: isHovered ? 5 : 0
							}}
							transition={{ duration: 0.2 }}
						>
							{isOpen ? (
								<IconMinus stroke={1.75} className="h-5 w-5 text-primary" />
							) : (
								<motion.div
									animate={{
										color: isHovered
											? 'var(--primary)'
											: 'var(--muted-foreground)'
									}}
									transition={{ duration: 0.3 }}
								>
									<IconPlus stroke={1.75} className="h-5 w-5" />
								</motion.div>
							)}
						</motion.div>
					</div>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="overflow-hidden"
						>
							<p className="mt-4 text-hc-text-muted leading-relaxed">
								{faq.answer}
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.button>
	)
}
