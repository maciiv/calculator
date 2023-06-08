import { Alert, Card, Col, Form, Row } from 'react-bootstrap'
import { FunctionComponent, useState } from 'react'
import Explanation from '../components/Explanation'
import InputGroupInput from '../components/InputGroupInput'
import InputGroupResult from '../components/InputGroupResult'
import {
	calculateSquareArea,
	convertFromMmSquared,
	convertToMm,
} from '../helpers/utils'
import History, {
	HistoryData,
	IHistoryData,
	Input,
} from '../components/History'
import CalculatorButtons from '../components/CalculatorButtons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const squareFormValidation = z.object({
	side: z.string().min(1, { message: 'Must provide a number' }),
	sideUnit: z.string().min(1, { message: 'Select a unit' }),
	resultUnit: z.string().min(1, { message: 'Select a unit' }),
})

type SquareForm = z.infer<typeof squareFormValidation>

const SquareCalculator: FunctionComponent = function () {
	const [area, setArea] = useState(0)
	const [history, setHistory] = useState<IHistoryData>()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SquareForm>({ resolver: zodResolver(squareFormValidation) })

	const calculate = (squareForm: SquareForm) => {
		const side = parseInt(squareForm.side)
		const inputMm = convertToMm(side, squareForm.sideUnit)
		const areaMm = calculateSquareArea(inputMm)
		const areaResultUnit = convertFromMmSquared(areaMm, squareForm.resultUnit)
		setArea(areaResultUnit)
		setHistory(
			new HistoryData(
				[new Input(side, squareForm.sideUnit)],
				new Input(areaResultUnit, squareForm.resultUnit)
			)
		)
	}

	const resetCalculator = () => {
		reset()
		setArea(0)
	}

	return (
		<Row className='mt-5'>
			<Col lg='6' md='6' sm='12'>
				<Card className='h-100'>
					<Card.Header>
						<h3>Square</h3>
					</Card.Header>
					<Card.Body>
						<Explanation>
							<p>
								The area of a square is the product of the length of its sides
							</p>
							<Alert variant='info'>
								<span>
									<strong>Formula: </strong>
								</span>
								<span>A = a * a</span>
								<ul>
									<li>a = side</li>
								</ul>
							</Alert>
						</Explanation>
						<Form onSubmit={handleSubmit(calculate)}>
							<InputGroupInput
								name='Side'
								registerValue={register('side')}
								registerUnit={register('sideUnit')}
								errorValue={errors.side}
								errorUnit={errors.sideUnit}
							/>
							<InputGroupResult
								result={area}
								registerUnit={register('resultUnit')}
								errorUnit={errors.resultUnit}
							/>
							<CalculatorButtons reset={resetCalculator} />
						</Form>
					</Card.Body>
				</Card>
			</Col>
			<Col lg='6' md='6' sm='12'>
				<Card className='h-100'>
					<Card.Header>
						<h3>History</h3>
					</Card.Header>
					<Card.Body>
						<History historyRecord={history} />
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default SquareCalculator
