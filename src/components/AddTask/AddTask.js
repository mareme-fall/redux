// src/components/AddTask/AddTask.js
import React, { useState } from 'react';

// Composant AddTask permettant à l'utilisateur d'ajouter de nouvelles tâches
const AddTask = ({ onAdd }) => {
    // Utilisation de useState pour gérer l'état du champ de saisie
    const [taskDescription, setTaskDescription] = useState('');

    // Fonction appelée lorsqu'un changement est détecté dans le champ de saisie
    const handleChange = (e) => {
        setTaskDescription(e.target.value);
    };

    // Fonction appelée lorsqu'un formulaire est soumis
    const handleSubmit = (e) => {
        e.preventDefault();
        // Vérification pour s'assurer que la tâche n'est pas vide
        if (!taskDescription.trim()) return;
        // Appel de la fonction onAdd pour ajouter la nouvelle tâche
        onAdd(taskDescription);
        // Réinitialisation du champ de saisie après l'ajout de la tâche
        setTaskDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Champ de saisie pour ajouter une nouvelle tâche */}
            <input
                type="text"
                value={taskDescription}
                onChange={handleChange}
                placeholder="Ajouter une tache"
            />
            {/* Bouton pour soumettre le formulaire */}
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddTask;
