// src/components/TaskManager/TaskManager.js
import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import FilterTasks from '../FilterTasks/FilterTasks';

// Composant TaskManager contenant tous les éléments pour la gestion des tâches
const TaskManager = () => {
    // Utilisation de useState pour gérer les tâches et le filtre
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    // Fonction appelée lors de l'ajout d'une nouvelle tâche
    const handleAddTask = (taskDescription) => {
        const newTask = {
            id: Math.random(), // Temporairement utilisé un ID aléatoire, à remplacer par une méthode plus robuste
            description: taskDescription,
            isDone: false
        };
        setTasks([...tasks, newTask]);
    };

    // Fonction appelée lorsqu'une tâche est modifiée (cochée/décochée)
    const handleTaskToggle = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    // Filtrage des tâches en fonction du filtre sélectionné
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'done') {
            return task.isDone;
        } else if (filter === 'notDone') {
            return !task.isDone;
        }
        return true;
    });

    return (
        <div>
            {/* Composant permettant d'ajouter une nouvelle tâche */}
            <AddTask onAdd={handleAddTask} />
            {/* Composant permettant de filtrer les tâches */}
            <FilterTasks filter={filter} onFilterChange={setFilter} />
            {/* Composant représentant la liste des tâches */}
            <TaskList tasks={filteredTasks} onTaskToggle={handleTaskToggle} />
        </div>
    );
};

export default TaskManager;
