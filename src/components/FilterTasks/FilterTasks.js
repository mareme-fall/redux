// src/components/FilterTasks/FilterTasks.js
import React from 'react';

// Composant FilterTasks permettant à l'utilisateur de filtrer les tâches par "fait/pas fait"
const FilterTasks = ({ filter, onFilterChange }) => {
    // Fonction appelée lorsque la sélection du filtre est modifiée
    const handleChange = (e) => {
        onFilterChange(e.target.value);
    };

    return (
        <select value={filter} onChange={handleChange}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not Done</option>
        </select>
    );
};

export default FilterTasks;
