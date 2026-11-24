'use client'
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconFileText,
	IconNotes,
	IconShieldCheck
} from '@tabler/icons-react'
import { resolveLocale } from '@/app/_dictionaries/i18n-config'
import { legalPath, SITE } from '@/lib/site'
import { useTranslation } from '@/lib/useTranslations'
import HawConnectLogo from './icons/logo'

export function Footer() {
	const { t, lang } = useTranslation()
	const locale = resolveLocale(String(lang))
	const fullCommitHash = process.env.NEXT_PUBLIC_COMMIT_HASH || 'development'
	const commitHash =
		typeof fullCommitHash === 'string' && fullCommitHash !== 'development'
			? fullCommitHash.substring(0, 7)
			: fullCommitHash
	return (
		<footer className="bg-hc-surface border-t border-hc-border">
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
					<div className="lg:col-span-2">
						<div className="flex items-center gap-2 mb-4">
							<HawConnectLogo className="h-6 w-6 rounded-md" />
							<span className="text-xl font-bold text-foreground">
								HAWConnect
							</span>
						</div>
						<p className="text-muted-foreground max-w-md text-sm">
							{t('footer.description')}
						</p>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground mb-4">
							{t('footer.sections.links.title')}
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href={SITE.githubOrg}
									target="_blank"
									rel="noopener noreferrer"
									className="group text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
								>
									<IconBrandGithub
										stroke={1.75}
										className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110"
									/>
									{t('footer.sections.links.source')}
								</a>
							</li>
							<li>
								<a
									href={SITE.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="group text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
								>
									<IconBrandInstagram
										stroke={1.75}
										className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110"
									/>
									{t('footer.sections.links.instagram')}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground mb-4">
							{t('footer.sections.contact.title')}
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href={legalPath(locale, 'imprint')}
									className="group text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
								>
									<IconNotes
										stroke={1.75}
										className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110"
									/>
									{t('footer.sections.contact.imprint')}
								</a>
							</li>
							<li>
								<a
									href={legalPath(locale, 'privacy')}
									className="group text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
								>
									<IconShieldCheck
										stroke={1.75}
										className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110"
									/>
									{t('footer.sections.contact.privacy')}
								</a>
							</li>
							<li>
								<a
									href={legalPath(locale, 'terms')}
									className="group text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
								>
									<IconFileText
										stroke={1.75}
										className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110"
									/>
									{t('footer.sections.contact.terms')}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t border-hc-border pt-8">
					<div className="text-center text-sm text-muted-foreground">
						<p>
							© {new Date().getFullYear()} {t('footer.copyright.text')}
						</p>
						<p className="text-xs text-hc-text-muted mt-2 font-mono">
							Build:{' '}
							{commitHash !== 'development' ? (
								<a
									href={`${SITE.repos.website}/commit/${fullCommitHash}`}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-primary transition-colors duration-200 underline decoration-dotted underline-offset-2"
									title="View commit on GitHub"
								>
									{commitHash}
								</a>
							) : (
								<span title="Development build">{commitHash}</span>
							)}
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
