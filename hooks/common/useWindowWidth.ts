import {useEffect, useState} from "react";
import getWindowWidth from "../../utils/getWindowWidth";
import {TWindowWidth} from "../../core/types/TWindowWidth";

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<TWindowWidth>(getWindowWidth());

    const handleResize = (): void => setWindowWidth(getWindowWidth());

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { windowWidth, handleResize };
}

export default useWindowWidth;
