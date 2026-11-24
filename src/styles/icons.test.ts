import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { Glob } from 'bun'

const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as {
	dependencies?: Record<string, string>
	devDependencies?: Record<string, string>
}
const deps = { ...pkg.dependencies, ...pkg.devDependencies }

describe('icons', () => {
	test('no file under src imports lucide-react', async () => {
		const offenders: string[] = []
		for await (const file of new Glob('**/*.{ts,tsx}').scan('src')) {
			if (file === 'styles/icons.test.ts') continue
			if (readFileSync(`src/${file}`, 'utf8').includes('lucide-react')) {
				offenders.push(file)
			}
		}
		expect(offenders).toEqual([])
	})

	test('package.json depends on @tabler/icons-react, not lucide-react', () => {
		expect(deps['lucide-react']).toBeUndefined()
		expect(deps['@tabler/icons-react']).toMatch(/^\d+\.\d+\.\d+$/)
	})
})
