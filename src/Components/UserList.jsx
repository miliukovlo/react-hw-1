import React, { useEffect, useState } from 'react';
import styles from '../styles/UserList.module.css';
import UserBlock from './UserBlock';

const UserList = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    response.ok ? resolve(response.json()) : reject('Не получилось получить данные с сервера')
                })
                .catch(error =>
                    reject(error)
                )
        })
    }

    useEffect(() => {
        fetchUsers()
            .then(data => setUsers(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <>
            <div className={styles["user-list"]}>
                {users.map(user => {
                    return (
                        <UserBlock
                        key={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default UserList;
