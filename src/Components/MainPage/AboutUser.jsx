import React, { useContext } from 'react';
import { userContext } from '../../Context/Context';

const AboutUser = () => {
    const contextOfUser = useContext(userContext)

    return (
        <>
            <div className="about-block">
                <div className="about-block__information">
                    <p>{contextOfUser.nameOfUser}</p>
                </div>
            </div>
        </>
    );
}

export default AboutUser;
