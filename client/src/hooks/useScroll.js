import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);
        updatePosition(); // Call it once to set initial position

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
};