import { failFilms, successFilms, pendingFilms } from "../filmActions";

export const fetchFilms = () => {
    return async dispatch => {
        try {
            dispatch(pendingFilms());
            const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=100', {
                headers: {
                    'X-API-KEY': 'GNHTQ0G-Q8V4A53-MJERB3R-EYYSKQP'
                }
            });

            if (!response.ok) {
                dispatch(failFilms('Не удалось получить данные с сервера'))
                throw new Error('Не удалось получить данные с сервера');
            }

            const data = await response.json();
            localStorage.setItem('films', JSON.stringify(data))
            dispatch(successFilms(data));
            return data;
        } catch (error) {
            dispatch(failFilms(error.message));
            throw error;
        }
    };
};
