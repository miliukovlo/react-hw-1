import React, { useEffect, useState } from 'react';
import styles from '../styles/UserList.module.css';

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
            {users.map(user => {
                return (
                    <li key={user.id}>1</li>
                )
            })}
        </>
    );
}

export default UserList;
