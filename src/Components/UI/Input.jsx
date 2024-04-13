import React from 'react';

const Input = ({
    placeholderOfThisInput,
    onChangeFunc,
    valueOfThisInput
}) => {
    return (
        <>
            <input 
                type="text"
                onChange={onChangeFunc}
                placeholder={placeholderOfThisInput}
                value={valueOfThisInput}
                className='input-main'
            />
        </>
    );
}

export default Input;
