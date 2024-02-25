// src/components/TaskList/TaskList.js
import React from 'react';
import Task from '../Task/Task';

// Composant TaskList représentant une liste de tâches
const TaskList = ({ tasks, onTaskToggle }) => {
    return (
        <ul>
            {/* Mapping à travers la liste des tâches pour afficher chaque tâche */}
            {tasks.map((task) => (
                <li key={task.id}>
                    {/* Rendu du composant Task pour chaque tâche */}
                    <Task task={task} onTaskToggle={onTaskToggle} />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
