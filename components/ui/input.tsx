import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    endAdornment?: React.ReactNode
    error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, endAdornment, error, type, ...props }, ref) => {
        const hasError = error != null

        return (
            <div className="flex flex-col gap-2 text-[16px] font-bold leading-[17px] md:text-h-s">
                <label
                    className={cn(
                        'flex w-full items-center gap-4 rounded-2xl bg-grey-100 px-6 pb-[15px] pt-4 focus-within:ring-1 focus-within:ring-purple-500 focus-visible:outline-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 dark:bg-grey-800 dark:focus-within:ring-purple-500 md:py-5',
                        {
                            'ring-1 ring-red-500 focus-within:ring-red-500 dark:ring-red-500 dark:focus-within:ring-red-500':
                                hasError,
                        }
                    )}
                >
                    <input
                        type={type}
                        className={cn(
                            'w-full bg-transparent placeholder:text-grey-700/25 focus-visible:outline-none disabled:cursor-not-allowed dark:placeholder:text-white/25',
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    {endAdornment != null && <div>{endAdornment}</div>}
                </label>

                {error != null && <span className="text-red-500">{error}</span>}
            </div>
        )
    }
)
Input.displayName = 'Input'

export { Input }
