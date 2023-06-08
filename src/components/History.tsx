import { Button, FormCheck, Row } from 'react-bootstrap'
import { FunctionComponent, useEffect, useState } from 'react'
import HistoryTable from './HistoryTable'

interface IInput {
	value: number
	unit: string
}

export class Input implements IInput {
	value: number
	unit: string
	constructor(value: number, unit: string) {
		this.value = value
		this.unit = unit
	}
}

export interface IHistoryData {
	inputs: IInput[]
	result: IInput
	userId?: string
}

export class HistoryData implements IHistoryData {
	inputs: IInput[]
	result: IInput
	userId?: string
	constructor(inputs: IInput[], result: IInput, userId?: string) {
		this.inputs = inputs
		this.result = result
		this.userId = userId
	}
}

interface HistoryProps {
	historyRecord?: IHistoryData
}

const History: FunctionComponent<HistoryProps> = function ({
	historyRecord,
}: HistoryProps) {
	const [history, setHistory] = useState<IHistoryData[]>([])
	const [recordHistory, setRecordHistory] = useState(false)
	const [showHistory, setShowHistory] = useState(false)

	useEffect(() => {
		if (historyRecord !== undefined && recordHistory) {
			setHistory((h) => [...h, historyRecord])
		}
	}, [historyRecord])

	const clearHistory = async () => {
		setHistory([])
		setShowHistory(false)
		setRecordHistory(false)
	}

	return (
		<Row className='mt-3'>
			<FormCheck
				type='switch'
				id='history-switch'
				onChange={(e) => setRecordHistory(e.target.checked)}
				label='Record history'
				className='mt-3 me-auto ms-3'
				checked={recordHistory}
			/>
			<div className='d-flex'>
				<Button
					variant='warning'
					className='w-75 mx-auto mt-5 mb-3 show-history'
					onClick={() => setShowHistory(!showHistory)}
				>
					{showHistory ? 'Hide history' : 'Show history'}
				</Button>
			</div>
			{showHistory ? <HistoryTable history={history} /> : null}
			<div className='d-flex'>
				<Button
					variant='danger'
					className='w-75 mx-auto my-3 clear-history'
					onClick={clearHistory}
				>
					Clear history
				</Button>
			</div>
		</Row>
	)
}

export default History
