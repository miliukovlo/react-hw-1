import React from 'react';
import styles from '../styles/UserBlock.module.css';

const UserBlock = ({
    name,
    username,
    email
}) => {
    return (
        <>
            <div className={styles['user-block']}>
                <p>Имя: {name}</p>
                <p>Ник: {username}</p>
                <p>Email: {email}</p>
            </div>
        </>
    );
}

export default UserBlock;
