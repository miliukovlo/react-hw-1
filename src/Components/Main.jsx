import React from 'react';
import CountdownTimer from './CountdownTimer';
import UserList from './UserList';
import WindowSize from './WindowSize';

const Main = () => {
    return (
            <main>
                <CountdownTimer/>
                <UserList/>
                <WindowSize/>
            </main>
    );
}

export default Main;
