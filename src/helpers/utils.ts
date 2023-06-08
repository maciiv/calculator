export function convertToMm(x: number, unit: string) {
	switch (unit) {
		case 'cm':
			return x * 10
		case 'm':
			return x * 1000
		default:
			return x
	}
}

export function convertFromMmSquared(x: number, unit: string) {
	switch (unit) {
		case 'cm':
			return x / 100
		case 'm':
			return x / 1000000
		default:
			return x
	}
}

export function calculateSquareArea(a: number) {
	const area = a * a
	return parseInt(area.toFixed(2))
}

export function calculateTriangleArea(b: number, h: number) {
	const area = b * h * 0.5
	return parseInt(area.toFixed(2))
}

export function calculateTrapezoidArea(a: number, b: number, h: number) {
	const area = (a + b) * h * 0.5
	return parseInt(area.toFixed(2))
}
