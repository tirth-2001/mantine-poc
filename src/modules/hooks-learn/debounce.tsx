import { useState } from 'react'
import { TextInput, Text } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'

export const Debounce = () => {
	const [value, setValue] = useState('')
	const [debounced] = useDebouncedValue(value, 200, { leading: true })

	return (
		<>
			<h3>useDebounceValue</h3>
			<TextInput
				label='Enter value to see debounce'
				value={value}
				onChange={(event) => setValue(event.currentTarget.value)}
			/>

			<Text>Value: {value}</Text>
			<Text>Debounced value: {debounced}</Text>
		</>
	)
}
