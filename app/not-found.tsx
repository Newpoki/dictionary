import { ErrorLayout } from '@/components/error-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "404: Not found",
    description: "It seems that this page doesn't exist.",
}


export default function NotFound() {
    return <ErrorLayout title="404" description="It seems that this page doesn't exist." />
}
