import React, { useEffect, useRef } from 'react';

import { mount } from 'marketing/MarkettingApp';


console.log(mount)

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    });

    return <div ref={ref} />
}