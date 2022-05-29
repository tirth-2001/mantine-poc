import { createStyles } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme, _params, getRef) => ({
	wrapper: {
		// subscribe to color scheme changes right in your styles
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[1],
		maxWidth: 400,
		padding: theme.spacing.sm,
		width: '100%',
		height: 180,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: theme.radius.md,
		boxShadow: theme.shadows.md,

		// Dynamic media queries, define breakpoints in theme, use anywhere
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			// Type safe child reference in nested selectors via ref
			[`& .${getRef('child')}`]: {
				fontSize: theme.fontSizes.xs,
			},
		},
	},
	child: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		padding: theme.spacing.md,
		borderRadius: theme.radius.sm,
		boxShadow: theme.shadows.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},
}))

export const UserCard = () => {
	const { classes } = useStyles()
	return (
		<div className={classes.wrapper}>
			<h3>Mr. John Doe</h3>
			<div className={classes.child}>
				<span>Education : Bachelor in Technology</span>
				<span>Experience : 3 years</span>
				<span>Address : Sydney</span>
			</div>
		</div>
	)
}
