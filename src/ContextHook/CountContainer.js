import React, { createContext, useCallback, useState } from 'react';

const Context = createContext();

const { Provider } = Context;

function CountContainer({children}) {
    const [state, setState] = useState({
        value: 0,
    });

    const actions = {
        onIncrease: useCallback(() => {
            setState({
                value: state.value + 1
            });
        }, [setState,state]),
        onDecrease: useCallback(() => {
            setState({
                value: state.value - 1
            });
        }, [setState,state]),
    };

    return (
        <Provider value={{
            state, actions
        }}>
            {children}
        </Provider>
    );
}

export {
    Context
};
export default CountContainer;