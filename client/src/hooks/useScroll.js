import { useEffect, useState } from 'react';

export const useScrollPosition = (scrollableRef) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            if (scrollableRef?.current) {
                setScrollPosition(scrollableRef.current.scrollTop);
            } else {
                setScrollPosition(window.scrollY);
            }
        };

        const target = scrollableRef?.current || window;

        target.addEventListener('scroll', updatePosition);
        updatePosition(); // Call it once to set initial position

        return () => target.removeEventListener('scroll', updatePosition);
    }, [scrollableRef]);

    return scrollPosition;
};
