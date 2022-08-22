// https://stackoverflow.com/a/64892655/14564597

import { useState, useEffect } from 'react';

function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        observer.observe(ref.current)
        return () => {
            observer.disconnect()
        }
    })

    return isIntersecting
}

export default useOnScreen;