import React from 'react';

const initialViewportState = {
    width: window.innerWidth,
    height: window.innerHeight,
    setWidth: () => null,
    setHeight: () => null
  };

const ViewportContext = React.createContext(initialViewportState);
export default ViewportContext;
