import { FunctionComponent } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home: FunctionComponent = function () {
	return (
		<Row className='mt-5'>
			<Col lg='12' md='12' className='d-flex mb-5'>
				<h4 className='mx-auto'>
					Please select the figure you want to calculate the area
				</h4>
			</Col>
			<Col lg='12' md='12' className='d-flex justify-content-evenly'>
				<Link to='/square' className='btn btn-primary btn-lg w-25'>
					Square
				</Link>
				<Link to='/triangle' className='btn btn-primary btn-lg w-25'>
					Triangle
				</Link>
				<Link to='/trapezoid' className='btn btn-primary btn-lg w-25'>
					Trapezoid
				</Link>
			</Col>
		</Row>
	)
}

export default Home
