import React, { useCallback, useMemo, useState } from 'react';

function getAverage(numbers) {
    console.log("평균값 계산 중...");
    return numbers.length === 0 ? 
        0
        :
        numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

function AverageComponent() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    const onChange = useCallback((e) => {
        setInput(e.target.value);
    }, [setInput]);

    const onInsert = useCallback(() => {
        setList(list.concat(parseInt(input)));
        setInput('');
    }, [setList, setInput, input, list]);

    const avg = useMemo(() => getAverage(list),[list]);

    return (
        <>
            <>
                <input type="text" value={input} onChange={onChange} />
                <button type="button" onClick={onInsert}>등록</button>
            </>
            <hr/>
            <ul>
                {list.map((number, idx) => 
                    <li key={idx}>{number}</li>
                )}
            </ul>
            <hr/>
            <>
                    <h1>{`평균값: ${avg}`}</h1>
            </>
        </>
    );
}

export default AverageComponent;