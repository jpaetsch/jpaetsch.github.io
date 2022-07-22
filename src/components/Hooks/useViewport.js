import { useContext } from 'react';
import ViewportContext from '../Contexts/ViewportContext';

// useViewport hook to pull width and height values out of the context
function useViewport() {
    const { width, height } = useContext(ViewportContext);
    return { width, height };
};

export default useViewport;