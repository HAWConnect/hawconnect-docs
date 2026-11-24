import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { localeRedirectTarget, preferredLocale } from '@/lib/locale-negotiation'

export function proxy(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	// Skip locale redirection for static assets and images
	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.startsWith('/assets') ||
		pathname.includes('.') // This will catch files with extensions like .ico, .png, etc.
	) {
		return NextResponse.next()
	}

	// Paths without a locale go to the browser's language (German or English), English otherwise
	const target = localeRedirectTarget(
		pathname,
		preferredLocale(request.headers.get('accept-language'))
	)
	if (target) {
		const response = NextResponse.redirect(
			new URL(target + request.nextUrl.search, request.url)
		)
		response.headers.set('Vary', 'Accept-Language')
		return response
	}
}

export const config = {
	matcher: [
		// Skip all internal paths (_next), api, assets, and other static files
		'/((?!_next|api|assets|favicon.ico).*)'
	]
}
