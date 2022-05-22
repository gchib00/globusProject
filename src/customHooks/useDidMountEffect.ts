import React, { useEffect, useRef } from 'react';

const useDidMountEffect = (func: any, dependencies: any) => {
    const didMount = useRef(false);
    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, dependencies);
}

export default useDidMountEffect;
