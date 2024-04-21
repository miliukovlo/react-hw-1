import React from 'react';
import CountdownTimer from './CountdownTimer';
import UserList from './UserList';
import WindowSize from './WindowSize';

const Main = () => {
    return (
            <main className='content'>
                <CountdownTimer/>
                <UserList/>
                <WindowSize/>
            </main>
    );
}

export default Main;
