import { Button, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Fragment } from 'react'

export const Disclosure = () => {
	const [opened, handlers] = useDisclosure(false, {
		onOpen: () => console.log('Opened'),
		onClose: () => console.log('Closed'),
	})

	// // Calls onOpen callback and sets opened to true
	// handlers.open()

	// // Does nothing, opened is already true
	// handlers.open()

	// // Calls onClose callback and sets opened to false
	// handlers.close()

	// // Does nothing, opened is already false
	// handlers.close()

	// // Calls onOpen or onClose depending on next state
	// handlers.toggle()

	console.log('opened', opened)

	return (
		<Fragment>
			<h2>useDisclosure</h2>

			<Text color={opened ? 'green' : 'red'}>
				Open: {opened ? 'true' : 'false'}
			</Text>

			<Button onClick={handlers.toggle}>Toggle</Button>
		</Fragment>
	)
}
