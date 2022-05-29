import {
	Badge,
	Box,
	Button,
	useMantineColorScheme,
	useMantineTheme,
} from '@mantine/core'
import { Text, UserCard } from '../../components'
import { Control } from '../../components/Control'

export const Home = () => {
	const theme = useMantineTheme()
	const { toggleColorScheme } = useMantineColorScheme()

	return (
		<div>
			<h1>Home</h1>
			<Text style={{ color: theme.colors['deep-blue'][5] }}>Hello World</Text>
			<Button
				sx={(theme) => ({
					background: theme.fn.linearGradient(45, 'red', 'blue'),
					':hover': {
						background: theme.fn.radialGradient(
							'blue',
							'red',
							'orange',
							'cyan',
							'white'
						),
						transition: 'all 4s ease-in-out',
					},

					'@media (max-width: 755px)': {
						fontSize: 14,
					},
				})}
			>
				Default Style Button
			</Button>
			<Button
				onClick={() => toggleColorScheme()}
				color={theme.primaryColor}
				radius={theme.radius.xl}
				styles={(theme) => ({
					...theme.fn.focusStyles(),
				})}
			>
				Change Theme
			</Button>
			<Badge title='1'>1</Badge>
			<Box
				sx={(theme) => ({
					backgroundColor: 'red',
					boxShadow: theme.shadows.md,
					borderRadius: theme.radius.md,
					minHeight: theme.other.cardHeight,
					minWidth: theme.other.cardWidth,
					padding: theme.spacing.sm,
				})}
			>
				<div>This is a card</div>
				<div>This is a card</div>
				<div>This is a card</div>
				<div>This is a card</div>
				<div>This is a card</div>
				<div>This is a card</div>
				<div>This is a card</div>
			</Box>
			<UserCard />
			<Control />
		</div>
	)
}
