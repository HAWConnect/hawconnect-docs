import { describe, expect, test } from 'bun:test'
import de from '@/app/_dictionaries/de'
import { legalPath, SITE } from './site'

describe('site identity', () => {
	test('legalPath builds locale-prefixed legal URLs', () => {
		expect(legalPath('de', 'privacy')).toBe('/de/legal/privacy')
		expect(legalPath('en', 'terms')).toBe('/en/legal/terms')
	})

	test('German dictionary carries the HAWConnect identity', () => {
		expect(de.logo.title).toBe('HAWConnect')
		expect(de.metadata.title).toContain('HAW Hamburg')
	})

	test('repo links', () => {
		expect(SITE.repos.website).toBe(
			'https://github.com/hawconnect/hawconnect-docs'
		)
		expect(SITE.origin).toBe('https://hawconnect.de')
	})
})
