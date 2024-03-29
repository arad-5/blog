import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Progressbar = () => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = () => setLoading(true)
        const handleRouteComplete = () => setLoading('completed')
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete)
        router.events.on('hashChangeStart', setLoading(false))
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('hashChangeComplete', handleRouteComplete)
            router.events.off('hashChangeStart', setLoading(false))
        }
    }, [router.events])

    return (
        <div
            className={`fixed bottom-0 z-40 w-1 bg-red-500  ${
                loading &&
                (loading === 'completed'
                    ? 'progress-completed'
                    : 'progress-loading')
            }`}
        ></div>
    )
}

export default Progressbar
