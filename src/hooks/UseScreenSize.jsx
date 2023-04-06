

import { useState, useEffect } from "react";


export const UseScreenSize = () => {
    
    const [height, setWindowheight] = useState(0)
    useEffect(() => {

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);

    }, []);
    
    const updateDimensions = () => {

        const height = window.innerHeight;
        setWindowheight(height - 45);
    }

    return height;
}
