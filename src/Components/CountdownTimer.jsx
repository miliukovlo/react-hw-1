import React, { useEffect, useState } from 'react';
import styles from '../styles/CountdownTimer.module.css';


const CountdownTimer = () => {
    const [seconds, setSeconds] = useState(10)

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(second => second - 1)
            }
        }
        , 1000);

        return () => {clearInterval(timer)}
    }, [seconds])

    return (
        <div className={styles["countdown-timer__block"]}>
            <h2>{seconds}</h2>
        </div>
    );
    
}

export default CountdownTimer;
