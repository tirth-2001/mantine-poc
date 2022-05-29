import { ImageProps, Loader } from '@mantine/core'
import { useEffect, useRef, useState } from 'react'

interface LoadingImageProps extends ImageProps {}

export const LoadingImage = ({ src, alt, ...props }: LoadingImageProps) => {
	const [loading, setLoading] = useState(true)

	const ref = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const img = ref.current

		console.log('imge', img)

		if (img?.complete) {
			setLoading(false)
		}
	}, [ref])

	console.log('LoadingImage', loading)

	return loading ? <Loader /> : <img ref={ref} src={src} alt={alt} />
}
