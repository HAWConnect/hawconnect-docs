'use client'
import { IconSparkles } from '@tabler/icons-react'
import { AnimatePresence, easeIn, easeOut, motion } from 'framer-motion'
import { useTranslation } from '@/lib/useTranslations'
import { SectionHeader } from '../section-header'
import { useFeatures } from './feature-data'
import { FeatureImageCard } from './feature-image-card'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.1
		}
	}
}

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: easeOut
		}
	},
	exit: {
		opacity: 0,
		y: -10,
		transition: {
			duration: 0.2,
			ease: easeIn
		}
	}
}

export function FeaturesSection() {
	const { t } = useTranslation()
	const features = useFeatures()

	return (
		<section className="py-12 sm:py-20 relative overflow-hidden bg-hc-page">
			{/* Decorative background elements */}
			<div className="absolute inset-0 pointer-events-none">
				<motion.div
					className="absolute top-20 left-[10%] w-48 h-48 bg-primary/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.3, 0.4, 0.3]
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut'
					}}
				/>
				<motion.div
					className="absolute bottom-20 right-[10%] w-48 h-48 bg-primary/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.3, 0.4, 0.3]
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					<SectionHeader
						icon={IconSparkles}
						title={t('features.title')}
						description={t('features.description')}
					/>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 sm:max-w-none sm:grid-cols-2 lg:mx-0 lg:grid-cols-4"
				>
					<AnimatePresence mode="popLayout">
						{features.map((feature) => (
							<motion.div
								key={feature.id}
								variants={itemVariants}
								layout
								whileHover={{ scale: 1.01 }}
								transition={{ type: 'spring', stiffness: 300, damping: 20 }}
							>
								<FeatureImageCard {...feature} />
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	)
}
