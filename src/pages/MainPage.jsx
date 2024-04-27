import React, { useEffect } from 'react';

const MainPage = () => {

    useEffect(() => {
        fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50', {
            headers: {
                'X-API-KEY': '2CNPDYY-EB2MANC-QHGWFNW-WVCT91P'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Не получилось получить данные!');
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
        
    }, [])

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default MainPage;
