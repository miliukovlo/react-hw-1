import React from 'react';

const FilterCompetences = ({
    changeSelect,
    filterChangeList
}) => {

    return (
        <>
            <div className="filter-block">
                <select name="" id="" className='filter-block__select' onChange={changeSelect}>
                    {filterChangeList.map(el => {
                        return (
                            <option value={el.id}>{el.nameOfOption}</option>
                        )
                    })}
                </select>
            </div>
        </>
    );
}

export default FilterCompetences;
