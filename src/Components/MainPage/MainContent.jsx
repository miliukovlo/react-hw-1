import React, { useEffect, useState } from 'react';
import AboutMeBlock from './AboutUser';
import FormCompetence from './FormCompetence';
import CompetenceList from './CompetenceList';
import FilterCompetents from './FilterCompetents';

const MainContent = () => {
    const [competences, setCompetences] = useState([
        {    
            levelOfCompetence: 79,
            nameOfCompetence: 'HTML/CSS',
            informationAboutCompetence: 'Умение верстать макеты, делать их адаптивными',
            idOfCompetence: 1
        },
        {    
            levelOfCompetence: 49,
            nameOfCompetence: 'JS',
            informationAboutCompetence: 'Умение верстать макеты, делать их адаптивными',
            idOfCompetence: 2
        },
    ])
    const [filterCompetents, setFilterCompetents] = useState(competences)
    const [filterOption, setFilterOption] = useState(1)
    const [filterChangeList, setFilterChangeList] = useState([
        {
            id: 1,
            nameOfOption: 'Показать все компетенции'
        },
        {
            id: 2,
            nameOfOption: 'Показать компетенции с уровнем >50'
        },
        {
            id: 3,
            nameOfOption: 'Показать компетенции с уровнем <=50'
        }
    ]) 


    const addNewCompetence = (e, newCompetence) => {
        e.preventDefault();
        setCompetences(prevCompetences => [...prevCompetences, newCompetence]);
    };

    const deleteCompetence = (e, idOfCompetence) => {
        e.preventDefault();
        setCompetences(competences.filter(el => el.idOfCompetence !== idOfCompetence))
    }

    const changeSelect = (e) => {
        setFilterOption(Number(e.target.value))
    }

    useEffect(() => {
        if (filterOption === 1) {
            setFilterCompetents(competences)
        } else if (filterOption === 2) {
            setFilterCompetents(competences.filter(el => el.levelOfCompetence < 50))
        } else if (filterOption === 3) {
            setFilterCompetents(competences.filter(el => el.levelOfCompetence >= 50))
        }
    }, [filterOption, competences])
    
    return (
        <>
            <main className='main-content'>
                <AboutMeBlock/>
                <FormCompetence
                    addNewCompetence={addNewCompetence}
                />
                <FilterCompetents
                    filterChangeList={filterChangeList}
                    changeSelect={changeSelect}
                />
                <CompetenceList
                    competenceList={filterCompetents}
                    deleteCompetence={deleteCompetence}
                />
            </main>
        </>
    );
}

export default MainContent;
