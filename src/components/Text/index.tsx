import React from 'react'

export interface TextProps {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

export const Text = (props: TextProps) => {
	return (
		<span className={props.className} style={{ ...props.style }}>
			{props.children}
		</span>
	)
}
