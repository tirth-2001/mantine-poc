import { Box, Text } from '@mantine/core'

export const MenuItem = ({ name }: { name: string }) => {
	return (
		<Box
			component='a'
			href='#'
			sx={(theme) => ({
				textDecoration: 'none',
				color:
					theme.colorScheme !== 'dark'
						? theme.colors.gray[6]
						: theme.colors.dark[1],
			})}
		>
			<Text>{name}</Text>
		</Box>
	)
}
