import type { Testimonial } from './types'

/**
 * No real testimonials exist yet, so none are shown. Add real, attributed
 * quotes here; the section appears automatically once the list is non-empty.
 */
const TESTIMONIALS: Testimonial[] = []

export function useTestimonials(): Testimonial[] {
	return TESTIMONIALS
}
