// src/components/Task/Task.js
import React from 'react';

// Composant Task représentant une tâche individuelle
const Task = ({ task, onTaskToggle }) => {
    // Fonction appelée lorsque la case à cocher est changée
    const handleToggle = () => {
        onTaskToggle(task.id);
    };

    return (
        <div>
            {/* Case à cocher pour indiquer l'état de la tâche */}
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={handleToggle}
            />
            {/* Affichage de la description de la tâche */}
            <span>{task.description}</span>
        </div>
    );
};

export default Task;
