const defaultValue = {
    films: []
}

export const favoriteFilmsReducer = (state = defaultValue, action) => {
    switch (action.type) {

        case "ADD_FAVORITE_FILM":
            return {...state, films: [...state.films, newFilm]}



        default: 
            return state
    }
}