'use client'

import { IconQuote } from '@tabler/icons-react'
import { useTranslation } from '@/lib/useTranslations'
import { SectionHeader } from '../section-header'
import { TestimonialCard } from './testimonial-card'
import { useTestimonials } from './testimonials-data'
import { shouldShowTestimonials } from './visibility'

export function TestimonialsSection() {
	const { t } = useTranslation()
	const testimonials = useTestimonials()

	if (!shouldShowTestimonials(testimonials)) return null

	return (
		<section
			id="testimonials"
			className="py-20 sm:py-32 relative overflow-hidden bg-hc-page"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
				<SectionHeader
					icon={IconQuote}
					title={t('testimonials.title')}
					description={t('testimonials.description')}
				/>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={testimonial.author}
							testimonial={{ ...testimonial, delay: 0.2 + index * 0.1 }}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
