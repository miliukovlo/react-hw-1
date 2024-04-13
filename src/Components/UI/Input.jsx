import React from 'react';

const Input = ({
    InputPlaceholder,
    onChangeFunc,
    InputValue,
    InputClass,
    InputType,
    InputMin,
    InputMax
}) => {
    return (
        <>
            <input 
                onChange={onChangeFunc}
                placeholder={InputPlaceholder}
                value={InputValue}
                className={InputClass}
                type={InputType}
                min={InputMin}
                max={InputMax}
            />
        </>
    );
}

export default Input;
