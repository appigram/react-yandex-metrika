/* eslint-env browser */
'use strict';

import React, { useEffect, useState } from 'react';
import init from './init';
import { scriptPath } from './constants';

function YMInitializer({
    accounts = [],
    containerElement = 'div',
    options = {},
    attrs = {},
    version = '1',
    children
}) {
    const [insertPoint, setInsertPoint] = useState();

    useEffect(() => {
        init(accounts, options, version);
        let el = document.createElement('script');
        el.type = 'text/javascript';
        el.async = true;
        el.src = scriptPath(version);
        Object.keys(attrs).map(i => {
            if (el.__proto__.hasOwnProperty(i)) {
                el.setAttribute(i, attrs[i]);
            }
        });
        insertPoint?.insertBefore(el, null);
    }, [insertPoint]);

    const handleSetInsertPoint = (element) => {
        setInsertPoint(element);
    };

    return React.createElement(
        containerElement,
        { ref: handleSetInsertPoint },
        children
    );
}

export { YMInitializer };
