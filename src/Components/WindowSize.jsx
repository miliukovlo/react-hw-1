import React, { useEffect, useState } from 'react';
import styles from '../styles/WindowSize.module.css';


const WindowSize = () => {
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const resize = () => {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
            <div className={styles['window-size__block']}>
                <h2 className={styles['size-block__text']}>Высота окна: {height}</h2>
                <h2 className={styles['size-block__text']}>Ширина окна: {width}</h2>
            </div>
    );
}

export default WindowSize;
