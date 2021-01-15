import React, { useContext } from 'react';
import { Context } from './CountContainer';

function CountComponent() {
    const CountContext = useContext(Context);

    console.log(CountContext);
    return (
        <>
            <h1>{CountContext.state.value}</h1>
            <button type="button" onClick={CountContext.actions.onIncrease}>+</button>
            <button type="button" onClick={CountContext.actions.onDecrease}>-</button>
        </>
    );
}

export default CountComponent;