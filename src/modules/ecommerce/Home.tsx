import { Stack } from '@mantine/core'
import { Header } from './Header'
import { Product } from './Product'

export const Home: React.FC = () => {
	return (
		<Stack spacing={0}>
			<Header />
			<Product />
		</Stack>
	)
}
