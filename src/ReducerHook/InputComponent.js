import React, { useCallback, useEffect, useReducer } from 'react';

function InputReducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    };
}

function InputComponent() {
    const [state, dispatch] = useReducer(InputReducer, {
        name: '',
        nickname: ''
    });

    useEffect(() => {
        console.log(state);
    }, [state]);

    const onChange = useCallback((e) => {
        dispatch(e.target);
    },[dispatch])
    
    return (
        <>
            <input type="text" name="name" value={state.name} onChange={onChange}/>
            <input type="text" name="nickname" value={state.nickname} onChange={onChange}/>
        </>
    );
}

export default InputComponent;