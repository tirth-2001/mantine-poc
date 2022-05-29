import { MantineThemeOverride } from '@mantine/core'

// export react functional component
export const MANTINE_THEME: MantineThemeOverride = {
	colorScheme: 'dark',
	primaryColor: 'grape',
	primaryShade: 9,
	colors: {
		// Add your color
		'deep-blue': [
			'#E9EDFC',
			'#C1CCF6',
			'#99ABF0',
			'#6D8EEB',
			'#4B6EDA',
			'#2B4CC3',
			'#1A2B9C',
			'#0E1A6D',
			'#0C0E3F',
			'#0A0A1A',
		],
	},

	shadows: {
		// other shadows (xs, sm, lg) will be merged from default theme
		md: '1px 1px 3px rgba(0,0,0,.25)',
		xl: '5px 5px 3px rgba(0,0,0,.25)',
	},

	headings: {
		fontFamily: 'Roboto, sans-serif',
		sizes: {
			h1: { fontSize: 30 },
		},
	},

	other: {
		cardHeight: '5rem',
		cardWidth: '7rem',
	},
}
