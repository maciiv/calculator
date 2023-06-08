import { FunctionComponent } from 'react'

const Units: FunctionComponent = function () {
	return (
		<>
			<option value=''>Select a unit</option>
			<option value='mm'>mm</option>
			<option value='cm'>cm</option>
			<option value='m'>m</option>
		</>
	)
}

export default Units
