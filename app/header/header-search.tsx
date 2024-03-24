'use client'

import { Search } from '@/components/icons/search'
import { Input } from '@/components/ui/input'
import { useFormState, useFormStatus } from 'react-dom'
import { searchWord } from './header-actions'

type SearchInputProps = {
    errors?: Array<string>
}

const SearchInput = ({ errors }: SearchInputProps) => {
    const { pending } = useFormStatus()

    const firstError = errors?.[0]

    return (
        <Input
            disabled={pending}
            error={firstError}
            name="query"
            placeholder="Search for any word"
            endAdornment={<Search width={16} height={16} className="text-purple-500" />}
        />
    )
}

export const HeaderSearch = () => {
    const [state, formAction] = useFormState(searchWord, null)

    return (
        <form action={formAction}>
            <SearchInput errors={state?.error?.query?._errors} />
        </form>
    )
}
