import React from 'react';

const AboutMeBlock = ({imageOfPerson, nameOfPerson}) => {
    return (
        <>
            <div className="about-block">
                <div className="about-block__image">
                    <img 
                    src={imageOfPerson} 
                    alt="Изображение человека или не очень человека" 
                    />
                </div>
                <div className="about-block__information">
                    <p className='information__name'>{nameOfPerson}</p>
                </div>
            </div>
        </>
    );
}

export default AboutMeBlock;
