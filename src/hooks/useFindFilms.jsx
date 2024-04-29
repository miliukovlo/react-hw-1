import { filmsData } from "../data/filmsData";

export const useFindFilms = (findValue) => {
    const allFilmsData = filmsData;

    const foundFilms = findValue === '' ?  [] : allFilmsData.filter(film => film.name.includes(findValue))
    return foundFilms;
}
