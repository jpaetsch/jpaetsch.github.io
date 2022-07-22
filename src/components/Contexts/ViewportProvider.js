import ViewportContext from './ViewportContext';
import React, { useState, useEffect } from 'react';

const ViewportProvider = ({ children }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("windowResize", handleWindowResize);
        return () => { 
            window.removeEventListener("windowResize", handleWindowResize)
        };
    }, []);

    return (
        <ViewportContext.Provider value={{ width, height, setWidth, setHeight }}>
            { children }
        </ViewportContext.Provider>
    );

};

export default ViewportProvider;