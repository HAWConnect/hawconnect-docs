'use client'

import { IconHelpCircle } from '@tabler/icons-react'
import { easeOut, motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from '@/lib/useTranslations'
import { SectionHeader } from '../section-header'
import { useFAQs } from './faq-data'
import { FAQItem } from './faq-item'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: easeOut
		}
	}
}

export function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start']
	})
	const { t } = useTranslation()
	const faqs = useFAQs()

	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

	return (
		<section
			ref={containerRef}
			className="py-20 sm:py-32 relative overflow-hidden bg-hc-page"
		>
			{/* Decorative background elements */}
			<div className="absolute inset-0 pointer-events-none">
				<motion.div
					className="absolute top-1/4 left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3]
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut'
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3]
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1
					}}
				/>
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
				<motion.div
					style={{ opacity }}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="relative"
				>
					<SectionHeader
						icon={IconHelpCircle}
						title={t('faq.title')}
						description={t('faq.description')}
					/>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="mx-auto mt-16 max-w-3xl"
					>
						{faqs.map((faq) => (
							<motion.div
								key={faq.question}
								variants={itemVariants}
								className="mb-4 last:mb-0"
							>
								<FAQItem
									faq={faq}
									isOpen={openIndex === faqs.indexOf(faq)}
									onToggle={() =>
										setOpenIndex(
											openIndex === faqs.indexOf(faq) ? null : faqs.indexOf(faq)
										)
									}
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
