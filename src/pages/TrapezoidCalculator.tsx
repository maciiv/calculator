import { Alert, Card, Col, Form, Row } from 'react-bootstrap'
import { FunctionComponent, useState } from 'react'
import Explanation from '../components/Explanation'
import InputGroupInput from '../components/InputGroupInput'
import InputGroupResult from '../components/InputGroupResult'
import {
	convertToMm,
	convertFromMmSquared,
	calculateTrapezoidArea,
} from '../helpers/utils'
import CalculatorButtons from '../components/CalculatorButtons'
import History, {
	IHistoryData,
	HistoryData,
	Input,
} from '../components/History'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const trapezoidFormValidation = z.object({
	sBase: z.string().min(1, { message: 'Must provide a number' }),
	sBaseUnit: z.string().min(1, { message: 'Select a unit' }),
	lBase: z.string().min(1, { message: 'Must provide a number' }),
	lBaseUnit: z.string().min(1, { message: 'Select a unit' }),
	height: z.string().min(1, { message: 'Must provide a number' }),
	heightUnit: z.string().min(1, { message: 'Select a unit' }),
	resultUnit: z.string().min(1, { message: 'Select a unit' }),
})

type TrapezoidForm = z.infer<typeof trapezoidFormValidation>

const TrapezoidCalculator: FunctionComponent = function () {
	const [area, setArea] = useState(0)
	const [history, setHistory] = useState<IHistoryData>()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TrapezoidForm>({ resolver: zodResolver(trapezoidFormValidation) })

	const calculate = (trapezoidForm: TrapezoidForm) => {
		const sBase = parseInt(trapezoidForm.sBase)
		const lBase = parseInt(trapezoidForm.lBase)
		const height = parseInt(trapezoidForm.height)
		const sBaseMm = convertToMm(sBase, trapezoidForm.sBaseUnit)
		const lBaseMm = convertToMm(lBase, trapezoidForm.lBaseUnit)
		const heightMm = convertToMm(height, trapezoidForm.heightUnit)
		const areaMm = calculateTrapezoidArea(sBaseMm, lBaseMm, heightMm)
		const areaResultUnit = convertFromMmSquared(
			areaMm,
			trapezoidForm.resultUnit
		)
		setArea(areaResultUnit)
		setHistory(
			new HistoryData(
				[
					new Input(sBase, trapezoidForm.sBaseUnit),
					new Input(lBase, trapezoidForm.lBaseUnit),
					new Input(height, trapezoidForm.heightUnit),
				],
				new Input(areaResultUnit, trapezoidForm.resultUnit)
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
						<h3>Trapezoid</h3>
					</Card.Header>
					<Card.Body>
						<Explanation>
							<p>
								A trapezoid is a 4-sided geometrical shape with two sides
								parallel to each other
							</p>
							<Alert variant='info'>
								<span>
									<strong>Formula: </strong>
								</span>
								<span>A = (a + b) * h * 0.5</span>
								<ul>
									<li>a = short base</li>
									<li>b = long base</li>
									<li>h = height</li>
								</ul>
							</Alert>
						</Explanation>
						<Form onSubmit={handleSubmit(calculate)}>
							<InputGroupInput
								name='Short base'
								registerValue={register('sBase')}
								registerUnit={register('sBaseUnit')}
								errorValue={errors.sBase}
								errorUnit={errors.sBaseUnit}
							/>
							<InputGroupInput
								name='Long base'
								registerValue={register('lBase')}
								registerUnit={register('lBaseUnit')}
								errorValue={errors.lBase}
								errorUnit={errors.lBaseUnit}
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

export default TrapezoidCalculator
