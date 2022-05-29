import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core'
import { useState } from 'react'
import { MANTINE_THEME } from './mantine-theme'
import Ecommerce from './modules/ecommerce'

function App() {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
	const toggleColorScheme = (value?: ColorScheme) => {
		setColorScheme(value || colorScheme === 'dark' ? 'light' : 'dark')
	}

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ ...MANTINE_THEME, colorScheme }}
				withGlobalStyles
				withNormalizeCSS
				defaultProps={{
					Button: { color: 'gray', variant: 'outline' },
					Badge: { size: 'xl', radius: 'lg' },
					// ... default props for other components
				}}
			>
				<div className='App'>
					{/* <Home /> */}
					{/* <LearnHooks /> */}
					<Ecommerce />
				</div>
			</MantineProvider>
		</ColorSchemeProvider>
	)
}

export default App
