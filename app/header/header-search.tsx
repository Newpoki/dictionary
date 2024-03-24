'use client'

import { Search } from '@/components/icons/search'
import { Input } from '@/components/ui/input'
import { useFormState, useFormStatus } from 'react-dom'
import { searchWord } from './header-actions'
import { useParams } from 'next/navigation'

type SearchInputProps = {
    errors?: Array<string>
}

const SearchInput = ({ errors }: SearchInputProps) => {
    const { pending } = useFormStatus()
    const params = useParams()

    const firstError = errors?.[0]

    console.log({ params })
    return (
        <Input
            disabled={pending}
            error={firstError}
            defaultValue={params.query}
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
