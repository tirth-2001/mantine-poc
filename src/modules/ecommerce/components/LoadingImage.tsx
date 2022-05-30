import { ImageProps, Loader } from '@mantine/core'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'

interface LoadingImageProps extends ImageProps {}

export const LoadingImage = ({ src, alt, ...props }: LoadingImageProps) => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const ref = useRef<HTMLImageElement>(null)

	const onLoadStart = useCallback(() => {
		setLoading(true)
		setError(false)
	}, [])

	const onLoad = useCallback(() => {
		setLoading(false)
		setError(true)
	}, [])

	const onError = useCallback(() => {
		setLoading(false)
		setError(true)
	}, [])

	useEffect(() => {
		setTimeout(() => {
			if (!ref.current?.complete) onLoadStart()
		})
	}, [ref, onLoadStart])

	return (
		<Fragment>
			{(!!loading || !error) && <Loader />}
			<img
				height={60}
				ref={ref}
				src={src}
				alt={alt}
				onLoad={onLoad}
				onLoadStart={onLoadStart}
				onError={onError}
			/>
		</Fragment>
	)
}
