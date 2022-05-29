import { useState } from 'react'
import { useInputState } from '@mantine/hooks'
import { TextInput, NumberInput } from '@mantine/core'

const WithUseInputState = () => {
	const [stringValue, setStringValue] = useInputState('')
	const [numberValue, setNumberValue] = useInputState(0)

	return (
		<>
			<input type='text' value={stringValue} onChange={setStringValue} />
			<TextInput value={stringValue} onChange={setStringValue} />
			<NumberInput value={numberValue} onChange={setNumberValue} />
		</>
	)
}

const WithUseState = () => {
	const [stringValue, setStringValue] = useState('')
	const [numberValue, setNumberValue] = useState<number | undefined>(0)

	return (
		<>
			<input
				type='text'
				value={stringValue}
				onChange={(event) => setStringValue(event.currentTarget.value)}
			/>
			<TextInput
				value={stringValue}
				onChange={(event) => setStringValue(event.currentTarget.value)}
			/>
			<NumberInput value={numberValue} onChange={setNumberValue} />
		</>
	)
}

export const InputState = () => {
	return (
		<>
			<h2>useInputState</h2>
			<WithUseInputState />
			<h2>useState</h2>
			<WithUseState />
		</>
	)
}
