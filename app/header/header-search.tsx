'use client'

import { Search } from '@/components/icons/search'
import { Input } from '@/components/ui/input'
import { useFormState, useFormStatus } from 'react-dom'
import { searchWord } from './header-actions'
import { useParams } from 'next/navigation'
import { z } from 'zod'
import { useCallback, useEffect, useState } from 'react'

type SearchInputProps = {
    errors?: Array<string>
}

const getDecodedQuery = (query: unknown) => {
    const parsedValue = z.string().safeParse(query)

    return parsedValue.success ? decodeURIComponent(parsedValue.data) : ''
}

const SearchInput = ({ errors }: SearchInputProps) => {
    const { pending } = useFormStatus()
    const params = useParams()
    const [query, setQuery] = useState(() => {
        return getDecodedQuery(params.query)
    })

    const firstError = errors?.[0]

    const handleChangeQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }, [])

    // As value can also change elsewhere, we need to update local state accordingly
    useEffect(() => {
        setQuery(getDecodedQuery(params.query))
    }, [params.query])

    return (
        <Input
            className="lowercase"
            disabled={pending}
            error={firstError}
            value={query}
            onChange={handleChangeQuery}
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
