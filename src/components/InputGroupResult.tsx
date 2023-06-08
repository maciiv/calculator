import { FormControl, FormSelect, InputGroup } from 'react-bootstrap'
import { FunctionComponent } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import Units from './Units'

interface InputGroupResultProps {
	registerUnit: UseFormRegisterReturn
	errorUnit: FieldError | undefined
	result: number
}

const InputGroupResult: FunctionComponent<InputGroupResultProps> = function ({
	registerUnit,
	errorUnit,
	result,
}: InputGroupResultProps) {
	return (
		<>
			<InputGroup className='mt-5 pt-3 border-top result'>
				<InputGroup.Text>Result: </InputGroup.Text>
				<FormControl value={result} disabled />
				<FormSelect {...registerUnit}>
					<Units />
				</FormSelect>
			</InputGroup>
			{errorUnit && <p className='text-danger mt-2'>{errorUnit?.message}</p>}
		</>
	)
}

export default InputGroupResult
