import { describe, expect, test } from 'bun:test'
import type { Testimonial } from './types'
import { shouldShowTestimonials } from './visibility'

const one: Testimonial = {
	content: 'Works well.',
	author: 'A. Student',
	role: 'Student',
	rating: 5
}

describe('shouldShowTestimonials', () => {
	test('hides the section when there are no testimonials', () => {
		expect(shouldShowTestimonials([])).toBe(false)
	})

	test('shows the section when there is at least one testimonial', () => {
		expect(shouldShowTestimonials([one])).toBe(true)
	})
})
