import { filmsData } from "../data/filmsData"

export const useGetFilms = (number) => {
    const allFilmsData = filmsData

    if (typeof number === 'number') {
        return allFilmsData.slice(0, number)
    } else {
        return console.error('number не число!')
    }
}