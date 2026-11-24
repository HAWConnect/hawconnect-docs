'use client'

import { IconLifebuoy } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/useTranslations'
import { SectionHeader } from '../section-header'
import { TroubleshootingCard } from './troubleshooting-card'
import { useTroubleshootingCards } from './troubleshooting-data'

export function TroubleshootingSection() {
	const { t } = useTranslation()
	const troubleshootingCards = useTroubleshootingCards()

	return (
		<section className="py-20 sm:py-32 relative overflow-hidden bg-hc-page">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
				<div className="relative">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className="relative order-2 lg:order-1"
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{troubleshootingCards.map((card, index) => (
									<motion.div
										key={card.title}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.2 * index, duration: 0.6 }}
									>
										<TroubleshootingCard card={card} />
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className="relative z-10 order-1 lg:order-2"
						>
							<SectionHeader
								icon={IconLifebuoy}
								title={t('troubleshooting.title')}
								description={t('troubleshooting.description')}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
