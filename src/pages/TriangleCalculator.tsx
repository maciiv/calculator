import { Alert, Card, Col, Form, Row } from 'react-bootstrap'
import { FunctionComponent, useState } from 'react'
import Explanation from '../components/Explanation'
import InputGroupInput from '../components/InputGroupInput'
import InputGroupResult from '../components/InputGroupResult'
import {
	convertToMm,
	convertFromMmSquared,
	calculateTriangleArea,
} from '../helpers/utils'
import History, {
	IHistoryData,
	HistoryData,
	Input,
} from '../components/History'
import CalculatorButtons from '../components/CalculatorButtons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const triangleFormValidation = z.object({
	base: z.string().min(1, { message: 'Must provide a number' }),
	baseUnit: z.string().min(1, { message: 'Select a unit' }),
	height: z.string().min(1, { message: 'Must provide a number' }),
	heightUnit: z.string().min(1, { message: 'Select a unit' }),
	resultUnit: z.string().min(1, { message: 'Select a unit' }),
})

type TriangleForm = z.infer<typeof triangleFormValidation>

const TriangleCalculator: FunctionComponent = function () {
	const [area, setArea] = useState(0)
	const [history, setHistory] = useState<IHistoryData>()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TriangleForm>({ resolver: zodResolver(triangleFormValidation) })

	const calculate = (triangleForm: TriangleForm) => {
		const base = parseInt(triangleForm.base)
		const height = parseInt(triangleForm.height)
		const baseMm = convertToMm(base, triangleForm.baseUnit)
		const heightMm = convertToMm(height, triangleForm.heightUnit)
		const areaMm = calculateTriangleArea(baseMm, heightMm)
		const areaResultUnit = convertFromMmSquared(areaMm, triangleForm.resultUnit)
		setArea(areaResultUnit)
		setHistory(
			new HistoryData(
				[
					new Input(base, triangleForm.baseUnit),
					new Input(height, triangleForm.heightUnit),
				],
				new Input(areaResultUnit, triangleForm.resultUnit)
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
						<h3>Triangle</h3>
					</Card.Header>
					<Card.Body>
						<Explanation>
							<p>A triangle is one of the most basic shapes in geometry</p>
							<Alert variant='info'>
								<span>
									<strong>Formula: </strong>
								</span>
								<span>A = b * h * 0.5</span>
								<ul>
									<li>b = base</li>
									<li>h = height</li>
								</ul>
							</Alert>
						</Explanation>
						<Form onSubmit={handleSubmit(calculate)}>
							<InputGroupInput
								name='Base'
								registerValue={register('base')}
								registerUnit={register('baseUnit')}
								errorValue={errors.base}
								errorUnit={errors.baseUnit}
							/>
							<InputGroupInput
								name='Height'
								registerValue={register('height')}
								registerUnit={register('heightUnit')}
								errorValue={errors.height}
								errorUnit={errors.heightUnit}
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

export default TriangleCalculator
