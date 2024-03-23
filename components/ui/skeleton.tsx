import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-grey-300 dark:bg-grey-300/25', className)}
            {...props}
        />
    )
}

export { Skeleton }
