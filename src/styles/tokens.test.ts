import { describe, expect, test } from 'bun:test'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { PRIMARY_SCALE, RADIUS, TOKENS, type TokenName } from './tokens'

const css = readFileSync('src/app/[lang]/global.css', 'utf8')

function block(selector: string): string {
	const start = css.indexOf(`\n${selector} {`)
	expect(start).toBeGreaterThan(-1)
	return css.slice(start, css.indexOf('\n}', start))
}

// Biome lowercases hex literals in CSS, so compare case-insensitively.
const light = block(':root').toLowerCase()
const dark = block('.dark').toLowerCase()
const names = Object.keys(TOKENS.light) as TokenName[]

function walk(dir: string): string[] {
	return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
		const p = join(dir, e.name)
		return e.isDirectory() ? walk(p) : [p]
	})
}
const srcFiles = walk('src').filter((f) =>
	/\.(tsx?|css|svg|json|mdx?)$/.test(f)
)

describe('tokens', () => {
	test('spec values', () => {
		expect(PRIMARY_SCALE).toEqual([
			'#F4F1F9',
			'#E5DFF1',
			'#CBBFE4',
			'#AC97D3',
			'#8C70C2',
			'#6F4CB3',
			'#593D8F',
			'#473173',
			'#40296C',
			'#211438'
		])
		expect(TOKENS.light.primary).toBe('#40296C')
		expect(TOKENS.dark.primary).toBe('#AC97D3')
		expect(TOKENS.light.page).toBe('#F7F6F8')
	})

	test('every token is defined in the light and dark CSS blocks', () => {
		for (const n of names) {
			expect(light).toContain(`--hc-${n}: ${TOKENS.light[n]};`.toLowerCase())
			expect(dark).toContain(`--hc-${n}: ${TOKENS.dark[n]};`.toLowerCase())
		}
	})

	test('primary scale and radii are in the CSS', () => {
		PRIMARY_SCALE.forEach((v, i) => {
			expect(light).toContain(`--hc-primary-${i}: ${v};`.toLowerCase())
		})
		for (const [k, v] of Object.entries(RADIUS)) {
			expect(light).toContain(`--hc-radius-${k}: ${v};`)
		}
	})

	test('no old blue in token sources', () => {
		const files = [
			'src/app/[lang]/global.css',
			'src/styles/tokens.ts',
			'src/app/manifest.json'
		]
		for (const f of files) {
			expect(readFileSync(f, 'utf8')).not.toMatch(/#087cfa|#0669d1/i)
		}
	})

	test('manifest theme colour', () => {
		const m = JSON.parse(readFileSync('src/app/manifest.json', 'utf8'))
		expect(m.theme_color).toBe('#40296C')
	})

	test('no blue palette classes under src', () => {
		const re =
			/\b(?:bg|text|from|to|via|border|ring|shadow|fill|stroke|decoration|outline|accent|divide|caret|placeholder)-(?:blue|sky|indigo|cyan)-\d{2,3}/
		const hits = srcFiles
			.filter((f) => /\.tsx?$/.test(f))
			.filter((f) => re.test(readFileSync(f, 'utf8')))
		expect(hits).toEqual([])
	})

	test('no old blue hex anywhere under src', () => {
		const hits = srcFiles
			.filter((f) => !f.endsWith('tokens.test.ts'))
			.filter((f) => /#087cfa|#0669d1/i.test(readFileSync(f, 'utf8')))
		expect(hits).toEqual([])
	})

	test('no old blue rgba literals under src', () => {
		const hits = srcFiles
			.filter((f) => !f.endsWith('tokens.test.ts'))
			.filter((f) =>
				/rgba?\(\s*59[\s,]+130[\s,]+246/.test(readFileSync(f, 'utf8'))
			)
		expect(hits).toEqual([])
	})

	test('dark block keeps AA primary-foreground ruling', () => {
		expect(dark).toContain('--primary-foreground: var(--hc-primary-9);')
		expect(dark).toContain('--sidebar-primary-foreground: var(--hc-primary-9);')
	})
})
