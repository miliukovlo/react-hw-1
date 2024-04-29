export const pendingFilms = (payload) => ({type: 'FETCH_DATA_REQUEST', payload})

export const successFilms = (payload) => ({type: 'FETCH_DATA_SUCCESS', payload})

export const failFilms = (payload) => ({type: 'FETCH_DATA_FAILED', payload})