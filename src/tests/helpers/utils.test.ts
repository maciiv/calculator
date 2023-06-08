import {
	convertToMm,
	convertFromMmSquared,
	calculateSquareArea,
	calculateTriangleArea,
	calculateTrapezoidArea,
} from '../../helpers/utils'

describe('Utils', () => {
	it('convert to mm from cm', () => {
		const mm = convertToMm(2, 'cm')
		expect(mm).toBe(20)
	})
	it('convert from mm squared to cm squared', () => {
		const mm2 = convertFromMmSquared(200, 'cm')
		expect(mm2).toBe(2)
	})
	it('calculate square area', () => {
		const area = calculateSquareArea(2)
		expect(area).toBe(4)
	})
	it('calculate triangle area', () => {
		const area = calculateTriangleArea(2, 3)
		expect(area).toBe(3)
	})
	it('calculate trapezoid area', () => {
		const area = calculateTrapezoidArea(2, 3, 2)
		expect(area).toBe(5)
	})
})
