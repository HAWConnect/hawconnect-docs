import { SITE } from '@/lib/site'

export interface StoreLinks {
	appStore: string | null
	googlePlay: string | null
	webApp: string
}

function httpsOrNull(value: string | undefined): string | null {
	if (!value) return null
	try {
		const url = new URL(value.trim())
		return url.protocol === 'https:' ? url.href : null
	} catch {
		return null
	}
}

export function storeLinks(
	env: Record<string, string | undefined> = {}
): StoreLinks {
	return {
		appStore: httpsOrNull(env.NEXT_PUBLIC_APP_STORE_URL),
		googlePlay: httpsOrNull(env.NEXT_PUBLIC_GOOGLE_PLAY_URL),
		webApp: SITE.webApp
	}
}

export function getTarget(userAgent: string, links: StoreLinks): string {
	if (/iPad|iPhone|iPod|Macintosh|MacIntel/.test(userAgent)) {
		return links.appStore ?? links.webApp
	}
	if (/android/i.test(userAgent)) {
		return links.googlePlay ?? links.webApp
	}
	return links.webApp
}
