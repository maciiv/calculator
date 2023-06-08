import { FormControl, FormSelect, InputGroup } from 'react-bootstrap'
import { FunctionComponent } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import Units from './Units'

interface InputGroupInputProps {
	registerValue: UseFormRegisterReturn
	registerUnit: UseFormRegisterReturn
	errorValue: FieldError | undefined
	errorUnit: FieldError | undefined
	name: string
}

const InputGroupInput: FunctionComponent<InputGroupInputProps> = function ({
	registerValue,
	registerUnit,
	errorValue,
	errorUnit,
	name,
}: InputGroupInputProps) {
	return (
		<>
			<InputGroup className='inputs'>
				<InputGroup.Text className='input-group-text'>Value: </InputGroup.Text>
				<FormControl type='number' placeholder={name} {...registerValue} />
				<FormSelect {...registerUnit}>
					<Units />
				</FormSelect>
			</InputGroup>
			{errorValue && <p className='text-danger mt-2'>{errorValue?.message}</p>}
			{errorUnit && <p className='text-danger mt-2'>{errorUnit?.message}</p>}
		</>
	)
}

export default InputGroupInput
