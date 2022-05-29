import { Badge } from '@mantine/core'
import { useIdle } from '@mantine/hooks'

export const Idle = () => {
	const idle = useIdle(2000, { initialState: false })
	return (
		<Badge color={idle ? 'blue' : 'teal'}>
			Current state: {idle ? 'idle' : 'not idle'}
		</Badge>
	)
}
