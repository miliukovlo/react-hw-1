import React from 'react';

const Button = ({
    buttonText,
    buttonFunction,
    buttonClass
}) => {
    return (
            <button 
            onClick={buttonFunction}
            className={buttonClass}
            >
                {buttonText}
            </button>
    );
}

export default Button;
