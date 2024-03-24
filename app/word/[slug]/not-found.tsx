import { ErrorLayout } from '@/components/error-layout'

export default function NotFound() {
    return (
        <ErrorLayout
            title="No definitions found"
            description="Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead."
        />
    )
}
