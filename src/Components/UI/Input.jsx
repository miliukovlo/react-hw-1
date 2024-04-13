import React from 'react';

const Input = ({
    InputPlaceholder,
    onChangeFunc,
    InputValue,
    InputClass
}) => {
    return (
        <>
            <input 
                type="text"
                onChange={onChangeFunc}
                placeholder={InputPlaceholder}
                value={InputValue}
                className={InputClass}
            />
        </>
    );
}

export default Input;
