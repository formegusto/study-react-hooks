import React, { useCallback, useEffect, useState } from 'react';

function InfoComponent() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('첫 렌더링 시에만 호출 됩니다.')
    }, []);

    useEffect(() => {
        console.log(`name:${name} 설정 후에 호출 됩니다`);
        return () => {
            console.log(`name:${name} 설정 전에 호출 됩니다.`);
        }
    }, [name]);

    useEffect(() => {
        return () => {
            console.log('언 마운트 시에만 호출 됩니다.')
        }
    }, []);

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, [setName]);

    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, [setNickname]);

    return (
        <div>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={(e) => onChangeName(e)} />
            <input
                type="text"
                name="nickname"
                value={nickname}
                onChange={(e) => onChangeNickname(e)} />
        </div>
    )
}

export default InfoComponent;