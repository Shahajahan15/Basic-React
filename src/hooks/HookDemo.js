import React from 'react';
import {useState} from 'react';

const HookDemo = () => {

    //  destructured assignment array
    const [name, setName]=useState({
        country:"Bangladesh"
    })

    const change = ()=> {
        setName({country:"America"})
    }

    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={change}>Change</button>
        </div>
    );
};

export default HookDemo;