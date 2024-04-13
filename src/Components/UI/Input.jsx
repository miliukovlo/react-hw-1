import React from 'react';

const Input = ({
    InputPlaceholder,
    onChangeFunc,
    InputValue,
    InputClass,
    InputType
}) => {
    return (
        <>
            <input 
                onChange={onChangeFunc}
                placeholder={InputPlaceholder}
                value={InputValue}
                className={InputClass}
                type={InputType}
            />
        </>
    );
}

export default Input;
