'use client'
import {
	IconCode as CodeIcon,
	IconCalendar,
	IconClock,
	IconDownload,
	IconLock,
	IconMapPin,
	IconNews,
	IconShoppingBag,
	IconToolsKitchen2,
	IconWorld
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/site'
import { useTranslation } from '@/lib/useTranslations'
import { GRADIENT } from '@/styles/tokens'
import { PhoneFrame } from '../app-screenshots'

export function HeroSection() {
	const { t, lang } = useTranslation()

	return (
		<section
			className="relative overflow-hidden py-20 sm:py-32 lg:min-h-screen flex items-center text-white"
			style={{ background: GRADIENT }}
		>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--hc-accent)_18%,transparent),transparent_70%)]" />

			<motion.div
				className="absolute top-20 left-[10%] w-32 h-32 bg-hc-primary-3/15 rounded-full blur-2xl"
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
				className="absolute top-40 right-[15%] w-48 h-48 bg-hc-accent/15 rounded-full blur-2xl"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.3, 0.6, 0.3]
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1
				}}
			/>
			<motion.div
				className="absolute bottom-20 left-1/4 w-40 h-40 bg-hc-primary-4/20 rounded-full blur-2xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3]
				}}
				transition={{
					duration: 4.5,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 0.5
				}}
			/>

			<div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16 w-full">
				<div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className="text-left max-w-2xl"
					>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-2 "
						>
							{t('hero.title')}
						</motion.h1>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-white/90 mb-4 font-medium"
						>
							{t('hero.subtitle')}
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="text-base sm:text-lg text-hc-primary-2 mb-8"
						>
							{t('hero.by')}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.6 }}
							className="flex flex-wrap gap-4 mb-12 text-sm relative "
						>
							{[
								{ icon: IconCalendar, text: t('hero.features.schedule') },
								{ icon: IconMapPin, text: t('hero.features.campusMap') },
								{ icon: IconToolsKitchen2, text: t('hero.features.food') },
								{ icon: IconClock, text: t('hero.features.events') }
							].map((item, index) => (
								<motion.div
									key={item.text}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
									className="flex items-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-xs rounded-full border border-white/10 hover:bg-white/10 transition-colors duration-200 relative "
								>
									<item.icon
										stroke={1.75}
										className="h-4 w-4 text-hc-primary-2"
									/>
									<span className="text-hc-primary-1">{item.text}</span>
								</motion.div>
							))}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
						>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									asChild
									size="lg"
									className="bg-white text-hc-primary-8 hover:bg-hc-primary-0 active:scale-95 focus-visible:ring-white ring-offset-hc-primary-8"
								>
									<a
										href={SITE.webApp}
										target="_blank"
										rel="noopener noreferrer"
									>
										<IconWorld stroke={1.75} className="mr-2 h-5 w-5" />
										{t('hero.buttons.openWebApp')}
									</a>
								</Button>
								<Button
									asChild
									size="lg"
									className="relative z-10 bg-white/10 hover:bg-white/20 text-white border border-white/30 active:scale-95 focus-visible:border-white/30 focus-visible:ring-white ring-offset-hc-primary-8"
								>
									<a href="#download">
										<IconDownload stroke={1.75} className="mr-2 h-5 w-5" />
										{t('hero.buttons.download')}
									</a>
								</Button>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						className="flex justify-center lg:justify-end relative hidden lg:flex"
					>
						<motion.div
							className="absolute inset-0 bg-linear-to-r from-hc-primary-4/20 to-hc-accent/20 rounded-full blur-3xl scale-150"
							animate={{
								scale: [1.5, 1.6, 1.5],
								opacity: [0.2, 0.3, 0.2]
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: 'easeInOut'
							}}
						/>

						<div className="relative w-[500px] h-[500px] flex items-center justify-center">
							<motion.div
								animate={{
									scale: [1, 1.01, 1],
									rotate: [0, 360]
								}}
								transition={{
									scale: {
										duration: 8,
										repeat: Infinity,
										ease: 'easeInOut'
									},
									rotate: {
										duration: 120,
										repeat: Infinity,
										ease: 'linear'
									}
								}}
								className="absolute w-[400px] h-[400px] rounded-full border border-white/[0.03] bg-linear-to-br from-hc-primary-3/[0.04] to-hc-accent/[0.04]"
							/>

							<motion.div
								animate={{
									scale: [1, 1.005, 1],
									rotate: [0, -360]
								}}
								transition={{
									scale: {
										duration: 7,
										repeat: Infinity,
										ease: 'easeInOut'
									},
									rotate: {
										duration: 100,
										repeat: Infinity,
										ease: 'linear'
									}
								}}
								className="absolute w-[320px] h-[320px] rounded-full border border-white/[0.02] bg-linear-to-br from-hc-primary-3/[0.03] to-hc-accent/[0.03]"
							/>

							<div className="absolute w-full h-full">
								<motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-up">
									<div className="flex flex-col items-center gap-3">
										<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-center">
											<IconCalendar
												stroke={1.75}
												className="w-6 h-6 text-white/85"
											/>
										</div>
										<span className="text-sm text-white/85 font-medium">
											{t('hero.features.schedule')}
										</span>
									</div>
								</motion.div>

								<motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-float-down">
									<div className="flex flex-col items-center gap-3">
										<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-center">
											<IconMapPin
												stroke={1.75}
												className="w-6 h-6 text-white/85"
											/>
										</div>
										<span className="text-sm text-white/85 font-medium">
											{t('hero.features.campusMap')}
										</span>
									</div>
								</motion.div>

								<motion.div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-left">
									<div className="flex flex-col items-center gap-3">
										<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-center">
											<IconToolsKitchen2
												stroke={1.75}
												className="w-6 h-6 text-white/85"
											/>
										</div>
										<span className="text-sm text-white/85 font-medium">
											{t('hero.features.food')}
										</span>
									</div>
								</motion.div>

								<motion.div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 animate-float-right">
									<div className="flex flex-col items-center gap-3">
										<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-center">
											<IconClock
												stroke={1.75}
												className="w-6 h-6 text-white/85"
											/>
										</div>
										<span className="text-sm text-white/85 font-medium">
											{t('hero.features.events')}
										</span>
									</div>
								</motion.div>

								<motion.div className="absolute top-[8%] right-[6%] animate-float-scale">
									<div className="flex flex-col items-center gap-3">
										<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-center">
											<IconLock
												stroke={1.75}
												className="w-6 h-6 text-white/85"
											/>
										</div>
										<span className="text-sm text-white/85 font-medium">
											{t('hero.features.guest')}
										</span>
									</div>
								</motion.div>

								<motion.div className="absolute top-[8%] left-[6%] animate-float-scale">
									<div className="flex flex-col items-center gap-3">
										<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-center">
											<CodeIcon
												stroke={1.75}
												className="w-6 h-6 text-white/85"
											/>
										</div>
										<span className="text-sm text-white/85 font-medium">
											{t('hero.features.openSource')}
										</span>
									</div>
								</motion.div>

								<motion.div className="absolute bottom-[8%] right-[8%] animate-float-scale">
									<div className="flex flex-col items-center gap-3">
										<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-center">
											<IconNews
												stroke={1.75}
												className="w-6 h-6 text-white/85"
											/>
										</div>
										<span className="text-sm text-white/85 font-medium">
											{t('hero.features.news')}
										</span>
									</div>
								</motion.div>

								<motion.div className="absolute bottom-[8%] left-[8%] animate-float-scale">
									<div className="flex flex-col items-center gap-3">
										<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-center">
											<IconShoppingBag
												stroke={1.75}
												className="w-6 h-6 text-white/85"
											/>
										</div>
										<span className="text-sm text-white/85 font-medium">
											{t('hero.features.marketplace')}
										</span>
									</div>
								</motion.div>
							</div>

							<motion.div
								animate={{
									scale: [1, 1.01, 1],
									rotate: [0, 0.5, 0, -0.5, 0]
								}}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: 'easeInOut'
								}}
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] z-[9999] drop-shadow-2xl"
							>
								<PhoneFrame screen="home" lang={lang} priority />
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
