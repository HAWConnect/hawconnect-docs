import type { Testimonial } from './types'

/** The testimonials section only renders when there is something to show. */
export function shouldShowTestimonials(list: Testimonial[]): boolean {
	return list.length > 0
}
