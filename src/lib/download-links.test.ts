import { describe, expect, test } from 'bun:test'
import { getTarget, storeLinks } from './download-links'

const iPhone =
	'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1'
const android =
	'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/120.0 Mobile Safari/537.36'
const desktop =
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36'
const mac =
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/605.1.15'
const WEB = 'https://app.hawconnect.de'
const both = {
	appStore: 'https://apps.apple.com/x',
	googlePlay: 'https://play.google.com/x',
	webApp: WEB
}

describe('storeLinks', () => {
	test('no env: stores null, web app set', () => {
		expect(storeLinks({})).toEqual({
			appStore: null,
			googlePlay: null,
			webApp: WEB
		})
		expect(storeLinks().webApp).toBe(WEB)
	})
	test('empty string is null', () => {
		expect(storeLinks({ NEXT_PUBLIC_APP_STORE_URL: '' }).appStore).toBeNull()
	})
	test('non-https is null', () => {
		expect(
			storeLinks({ NEXT_PUBLIC_APP_STORE_URL: 'http://x' }).appStore
		).toBeNull()
		expect(
			storeLinks({ NEXT_PUBLIC_GOOGLE_PLAY_URL: 'javascript:alert(1)' })
				.googlePlay
		).toBeNull()
	})
	test('value is trimmed and normalized', () => {
		expect(
			storeLinks({ NEXT_PUBLIC_APP_STORE_URL: ' https://apps.apple.com/x ' })
				.appStore
		).toBe('https://apps.apple.com/x')
	})
	test('https is kept', () => {
		expect(
			storeLinks({ NEXT_PUBLIC_GOOGLE_PLAY_URL: 'https://play.google.com/x' })
				.googlePlay
		).toBe('https://play.google.com/x')
	})
})

describe('getTarget', () => {
	test('iPhone without store goes to web app', () => {
		expect(getTarget(iPhone, storeLinks({}))).toBe(WEB)
	})
	test('iPhone and Mac with store go to App Store', () => {
		expect(getTarget(iPhone, both)).toBe(both.appStore)
		expect(getTarget(mac, both)).toBe(both.appStore)
	})
	test('Android with store goes to Play', () => {
		expect(getTarget(android, both)).toBe(both.googlePlay)
	})
	test('Android without store goes to web app', () => {
		expect(getTarget(android, { ...both, googlePlay: null })).toBe(WEB)
	})
	test('desktop goes to web app', () => {
		expect(getTarget(desktop, both)).toBe(WEB)
	})
})
