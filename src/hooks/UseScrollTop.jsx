

import { useEffect } from "react";


export const UseScrollTop = ({SetShowButton}) => {
    

    useEffect(() => {
    
        const ScrollButtonVisible = () => {
            window.pageYOffset > 300 ? SetShowButton(true) : SetShowButton(false);
        };

        window.addEventListener('scroll', ScrollButtonVisible);

        return ()=>{window.removeEventListener('scroll', ScrollButtonVisible);}

    }, []);
}