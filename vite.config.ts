/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
	if (command === 'build') {
		return {
			plugins: [react()],
			base: '/calculator/',
		}
	} else {
		return {
			plugins: [react({ fastRefresh: false })],
			test: {
				globals: true,
				environment: 'happy-dom',
				setupFiles: './src/tests/setup.ts',
				include: [
					'./src/tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
				],
				transformMode: {
					web: [/\.[jt]sx?$/],
				},
				css: false,
			},
		}
	}
})
