
import { useEffect, useState } from "react";

export function useIsMobile(query: string = '(max-width: 800px)') {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setIsMobile(media.matches);

        // Watch for changes
        const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return isMobile;
}
