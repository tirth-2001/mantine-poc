import { Text } from '@mantine/core'
import { useId as useMantineId } from '@mantine/hooks'
import { Fragment } from 'react'

export const Id = () => {
	const id2 = useMantineId()

	return (
		<Fragment>
			<h2>useId</h2>

			<Text>Mantine Id : {id2}</Text>
		</Fragment>
	)
}
