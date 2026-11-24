export interface Testimonial {
	content: string
	author: string
	role: string
	rating: number
	delay?: number
	translated?: boolean
}

export interface TestimonialCardProps {
	testimonial: Testimonial
}
