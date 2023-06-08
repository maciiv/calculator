import { Row, Col, Button } from 'react-bootstrap'
import { UseFormReset, FieldValues } from 'react-hook-form'

interface CalculatorButtonsProps<T extends FieldValues> {
	reset: UseFormReset<T>
}

const CalculatorButtons = function <T extends FieldValues>({
	reset,
}: CalculatorButtonsProps<T>) {
	return (
		<Row className='mt-3'>
			<Col lg='6' md='6' sm='12' className='d-flex'>
				<Button
					variant='primary'
					className='w-100 mx-auto calculate'
					type='submit'
				>
					Calculate
				</Button>
			</Col>
			<Col lg='6' md='6' sm='12' className='d-flex'>
				<Button
					variant='secondary'
					className='w-100 mx-auto calculate'
					onClick={() => reset()}
				>
					Reset
				</Button>
			</Col>
		</Row>
	)
}

export default CalculatorButtons
