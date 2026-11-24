'use client'
import { IconCode, IconCoffee, IconHeart, IconUsers } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from '@/lib/useTranslations'
import HawConnectLogo from '../icons/logo'

export function AboutSection() {
	const { t } = useTranslation()

	return (
		<section className="py-20 sm:py-32 bg-hc-surface border-y border-hc-border relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<motion.div
					className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
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
					className="absolute bottom-1/4 left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
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
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
					<div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
						>
							<div className="relative pt-12 pb-8">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2, duration: 0.6 }}
									className="absolute top-0 left-0"
								>
									<Badge className="group">
										<IconHeart
											stroke={1.75}
											className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform"
										/>
										{t('about.badge')}
									</Badge>
								</motion.div>
							</div>

							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.4, duration: 0.6 }}
								className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
							>
								{t('about.title')}
							</motion.h2>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.6, duration: 0.6 }}
								className="mt-6 text-lg text-muted-foreground"
							>
								{t('about.description.part1')}
							</motion.p>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.8, duration: 0.6 }}
								className="mt-4 text-lg text-muted-foreground"
							>
								{t('about.description.part2')}
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 1, duration: 0.6 }}
								className="mt-8 flex flex-wrap items-center gap-4"
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-2 px-5 py-2 rounded-full bg-hc-page border border-hc-border shadow-hc-card transition-all duration-200 hover:border-primary/40 cursor-pointer group"
								>
									<IconCode
										stroke={1.75}
										className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform"
									/>
									<span className="text-sm font-semibold text-foreground">
										{t('about.tags.openSource')}
									</span>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-2 px-5 py-2 rounded-full bg-hc-page border border-hc-border shadow-hc-card transition-all duration-200 hover:border-primary/40 cursor-pointer group"
								>
									<IconCoffee
										stroke={1.75}
										className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform"
									/>
									<span className="text-sm font-semibold text-foreground">
										{t('about.tags.community')}
									</span>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-2 px-5 py-2 rounded-full bg-hc-page border border-hc-border shadow-hc-card transition-all duration-200 hover:border-primary/40 cursor-pointer group"
								>
									<IconUsers
										stroke={1.75}
										className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform"
									/>
									<span className="text-sm font-semibold text-foreground">
										{t('about.tags.guest')}
									</span>
								</motion.div>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className="relative"
						>
							<div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl bg-primary/10 flex items-center justify-center">
								<HawConnectLogo
									className="h-40 w-40 rounded-3xl shadow-xl"
									role="img"
									aria-label={t('about.logoAlt')}
								/>
							</div>

							<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-16 -translate-y-16" />
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
