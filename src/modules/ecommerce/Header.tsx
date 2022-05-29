import {
	ActionIcon,
	Group,
	Image,
	TextInput,
	useMantineColorScheme,
	useMantineTheme,
} from '@mantine/core'
import { MenuItem } from './components/MenuItem'
import { Search, Sun, MoonStars } from 'tabler-icons-react'

export const Header = () => {
	const theme = useMantineTheme()
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	const dark = colorScheme === 'dark'
	return (
		<Group
			position={'apart'}
			sx={{
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[7]
						: theme.colors.gray[0],
				paddingInline: theme.spacing.md,
				boxShadow: theme.shadows.md,
				zIndex: 10,
				position: 'sticky',
				top: 0,
			}}
		>
			<Image
				sx={{ filter: dark ? 'invert(1)' : 'invert(0)' }}
				height={60}
				src='https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg'
			/>
			<Group>
				<MenuItem name='Men' />
				<MenuItem name='Women' />
				<MenuItem name='Kids' />
			</Group>
			<Group>
				<TextInput
					icon={<Search size={16} />}
					placeholder='Search products'
					radius={theme.radius.lg}
				/>
				<ActionIcon
					variant='outline'
					color={dark ? 'yellow' : 'blue'}
					onClick={() => toggleColorScheme()}
					title='Toggle color scheme'
				>
					{dark ? <Sun size={18} /> : <MoonStars size={18} />}
				</ActionIcon>
			</Group>
		</Group>
	)
}
