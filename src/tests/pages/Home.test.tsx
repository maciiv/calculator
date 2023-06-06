import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home'
import { MemoryRouter } from 'react-router-dom'

describe('Home', () => {
	render(
		<MemoryRouter>
			<Home />
		</MemoryRouter>
	)
	it('renders headline', () => {
		const headline = screen.getByText(
			/Please select the figure you want to calculate the area/i
		)
		expect(headline).toBeInTheDocument()
	})
})
