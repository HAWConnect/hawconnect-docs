import type { Icon as TablerIcon } from '@tabler/icons-react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
	icon: TablerIcon
	title: string
	description?: string
	iconColor?: string
}

export function SectionHeader({
	icon: Icon,
	title,
	description,
	iconColor = 'text-primary'
}: SectionHeaderProps) {
	return (
		<div className="relative pt-12 pb-8">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2, type: 'spring' }}
				className="absolute top-0 left-1/2 -translate-x-1/2"
			>
				<Icon stroke={1.75} className={`h-10 w-10 ${iconColor}`} />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="mx-auto max-w-2xl text-center"
			>
				<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-hc-text mb-6 leading-tight">
					{title}
				</h2>
				{description && (
					<p className="text-lg text-hc-text-muted">{description}</p>
				)}
			</motion.div>
		</div>
	)
}
