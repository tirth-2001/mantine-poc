import {
	Group,
	Paper,
	useMantineTheme,
	Image,
	Stack,
	Text,
	SimpleGrid,
	Button,
	ColorSwatch,
	ActionIcon,
} from '@mantine/core'
import Shoe from './assets/shoe.png'

export const Product = () => {
	const theme = useMantineTheme()
	const swatches = Object.keys(theme.colors)
		.map((color) => (
			<ActionIcon key={color}>
				<ColorSwatch color={theme.colors[color][6]} />
			</ActionIcon>
		))
		.splice(0, 14)
	return (
		<Paper
			sx={{
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[7]
						: theme.colors.gray[0],
				padding: '2rem 4rem',
			}}
		>
			<SimpleGrid spacing={40} cols={2}>
				<Image height={'50%'} src={Shoe} />
				<Stack>
					<Text size='xl' color={theme.primaryColor} weight='bold'>
						Nike Air Max
					</Text>
					<Text size='md'>Boy's Shoe</Text>
					<Text size='sm'>
						The Air Jordan 1 Retro High OG restyles MJ's first signature model
						with a fresh mix of colours. Premium materials, soft cushioning and
						a padded ankle collar for total support reflect on the shoe that
						started it all.
					</Text>
					<Text size={'xl'} weight='bolder'>
						$499
					</Text>
					<Text size={'md'} color={theme.colors.gray[6]} mt={-20}>
						inclusive of all taxes and shipping
					</Text>
					<Text size={'md'} weight='bold'>
						Sizes
					</Text>
					<SimpleGrid cols={4}>
						<Button>UK 4</Button>
						<Button>UK 4.5</Button>
						<Button>UK 5</Button>
						<Button>UK 5.5</Button>
						<Button>UK 6</Button>
						<Button>UK 6.5</Button>
						<Button>UK 7</Button>
						<Button>UK 7.5</Button>
					</SimpleGrid>
					<Text mt='sm' size={'md'} weight='bold'>
						Colors
					</Text>
					<SimpleGrid cols={7}>{swatches}</SimpleGrid>
					<Group spacing={'xl'} mt='md'>
						<Button
							variant='filled'
							color={theme.colorScheme === 'dark' ? 'white' : 'dark'}
							radius='xl'
						>
							<Text color={theme.colorScheme === 'dark' ? 'dark' : 'white'}>
								Add to Cart
							</Text>
						</Button>
						<Button variant='outline' color='light' radius='xl'>
							<Text>Wishlist</Text>
						</Button>
					</Group>
				</Stack>
			</SimpleGrid>
		</Paper>
	)
}
