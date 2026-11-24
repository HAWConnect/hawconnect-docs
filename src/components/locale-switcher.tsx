'use client'

import { IconCheck, IconLanguage } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useTranslation } from '@/lib/useTranslations'
import { cn } from '@/lib/utils'

const locales = [
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'de', name: 'Deutsch', flag: '🇩🇪' }
]

export function LocaleSwitcher() {
	const { t } = useTranslation()
	const pathname = usePathname()
	const currentLocale = pathname.split('/')[1]

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="h-9 w-9 relative group">
					<IconLanguage
						stroke={1.75}
						className="h-4 w-4 transition-transform"
					/>
					<span className="sr-only">{t('common.language.switch')}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel className="font-normal">
					<p className="text-sm font-medium leading-none">
						{t('common.language.label')}
					</p>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{locales.map((locale) => (
					<DropdownMenuItem
						key={locale.code}
						onClick={() => {
							const newPath = pathname.replace(
								`/${currentLocale}`,
								`/${locale.code}`
							)
							window.location.href = newPath
						}}
						className={cn(
							'flex items-center justify-between',
							currentLocale === locale.code && 'bg-accent'
						)}
					>
						<div className="flex items-center gap-2">
							<span className="text-lg">{locale.flag}</span>
							<span>{locale.name}</span>
						</div>
						{currentLocale === locale.code && (
							<IconCheck stroke={1.75} className="h-4 w-4 text-primary" />
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
