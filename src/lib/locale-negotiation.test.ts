import { describe, expect, test } from 'bun:test'
import { resolveLocale } from '@/app/_dictionaries/i18n-config'
import { localeRedirectTarget, preferredLocale } from './locale-negotiation'

describe('preferredLocale', () => {
	test('follows the browser language', () => {
		expect(preferredLocale('de-DE,de;q=0.9,en;q=0.8')).toBe('de')
		expect(preferredLocale('en-US,en;q=0.9')).toBe('en')
	})

	test('respects quality values, not list order', () => {
		expect(preferredLocale('en;q=0.5,de;q=0.9')).toBe('de')
	})

	test('skips unsupported languages before picking a supported one', () => {
		expect(preferredLocale('fr-FR,fr;q=0.9,de;q=0.8')).toBe('de')
	})

	test('falls back to English', () => {
		expect(preferredLocale(null)).toBe('en')
		expect(preferredLocale('')).toBe('en')
		expect(preferredLocale('fr,es;q=0.9')).toBe('en')
		expect(preferredLocale('*')).toBe('en')
		expect(preferredLocale('de;q=0')).toBe('en')
	})
})

describe('localeRedirectTarget', () => {
	test('adds the preferred locale to paths without one', () => {
		expect(localeRedirectTarget('/', 'de')).toBe('/de')
		expect(localeRedirectTarget('/docs', 'en')).toBe('/en/docs')
	})

	test('replaces an unsupported two-letter prefix', () => {
		expect(localeRedirectTarget('/fr', 'de')).toBe('/de')
		expect(localeRedirectTarget('/fr/docs', 'en')).toBe('/en/docs')
	})

	test('leaves localized paths alone', () => {
		expect(localeRedirectTarget('/de', 'en')).toBeNull()
		expect(localeRedirectTarget('/en/docs/app', 'de')).toBeNull()
	})
})

test('unknown locales resolve to English', () => {
	expect(resolveLocale('fr')).toBe('en')
	expect(resolveLocale('')).toBe('en')
	expect(resolveLocale('de')).toBe('de')
})
