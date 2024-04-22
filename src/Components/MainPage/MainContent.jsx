import React, { useEffect, useState } from 'react';
import AboutMeBlock from './AboutUser';
import FormCompetence from './FormCompetence';
import CompetenceList from './CompetenceList';
import FilterCompetences from './FilterCompetents';

const filterChangeList = [
    {
        id: 1,
        nameOfOption: 'Показать все компетенции'
    },
    {
        id: 2,
        nameOfOption: 'Показать компетенции с уровнем > 50'
    },
    {
        id: 3,
        nameOfOption: 'Показать компетенции с уровнем <= 50'
    }
]

const MainContent = () => {
    const [competences, setCompetences] = useState([
        {    
            level: 79,
            name: 'HTML/CSS',
            description: 'Умение верстать макеты, делать их адаптивными',
            id: 1
        },
        {    
            level: 49,
            name: 'JS',
            description: 'Умение верстать макеты, делать их адаптивными',
            id: 2
        },
    ])
    const [filteredCompetences, setFilterCompetences] = useState(competences)
    const [filterOption, setFilterOption] = useState(1)


    const addNewCompetence = (e, newCompetence) => {
        e.preventDefault();
        setCompetences(prevCompetences => [...prevCompetences, newCompetence]);
    };

    const deleteCompetence = (e, id) => {
        e.preventDefault();
        setCompetences(competences.filter(el => el.id !== id))
    }

    const changeSelect = (e) => {
        setFilterOption(Number(e.target.value))
    }

    useEffect(() => {
        if (filterOption === 1) {
            setFilterCompetences(competences)
        } else if (filterOption === 2) {
            setFilterCompetences(competences.filter(el => el.level < 50))
        } else if (filterOption === 3) {
            setFilterCompetences(competences.filter(el => el.level >= 50))
        }
    }, [filterOption, competences])
    
    return (
        <>
            <main className='main-content'>
                <AboutMeBlock/>
                <FormCompetence
                    addNewCompetence={addNewCompetence}
                />
                <FilterCompetences
                    filterChangeList={filterChangeList}
                    changeSelect={changeSelect}
                />
                <CompetenceList
                    competenceList={filteredCompetences}
                    deleteCompetence={deleteCompetence}
                />
            </main>
        </>
    );
}

export default MainContent;
