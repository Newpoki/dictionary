'use client'

import { PlayArrow } from '@/components/icons/play-arrow'
import { Pause } from '@/components/icons/pause'
import { useCallback, useEffect, useRef, useState } from 'react'

type WordPhoneticButtonProps = {
    audioUrl: string
}

export const WordPhoneticButton = ({ audioUrl }: WordPhoneticButtonProps) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const inputRef = useRef<HTMLAudioElement>(null)

    const handleToggleIsPlaying = useCallback(() => {
        if (inputRef.current == null) {
            return
        }

        isPlaying ? inputRef.current.pause() : inputRef.current.play()
    }, [isPlaying])

    useEffect(() => {
        if (inputRef.current == null) {
            return
        }

        inputRef.current.addEventListener('play', () => setIsPlaying(true))
        inputRef.current.addEventListener('pause', () => setIsPlaying(false))
        inputRef.current.addEventListener('end', () => setIsPlaying(false))
    }, [])

    return (
        <>
            <audio ref={inputRef} src={audioUrl} />

            <button
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/25 transition-colors hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 md:h-[75px] md:w-[75px]"
                type="button"
                onClick={handleToggleIsPlaying}
                aria-label="Click to listen how the word is pronounced"
            >
                {isPlaying ? (
                    <Pause className="h-7 w-7 text-purple-500 transition-colors group-hover:text-white md:h-9 md:w-9" />
                ) : (
                    <PlayArrow className="h-7 w-7 text-purple-500 transition-colors group-hover:text-white md:h-9 md:w-9" />
                )}
            </button>
        </>
    )
}
