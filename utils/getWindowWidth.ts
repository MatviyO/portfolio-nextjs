import {TWindowWidth} from "../core/types/TWindowWidth";

const getWindowWidth = (): TWindowWidth => {
    const { innerWidth: windowWidth } = typeof window !== 'undefined'
        ? window
        : { innerWidth: 0 }

    return { windowWidth }
}

export default getWindowWidth;
