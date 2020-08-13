import React, {useState} from 'react';

import Header from './components/Header';

import './App.css';

import backgroundImage from "./assets/unsplash.jpg"

function App() {
    const [projects, setprojects] = useState([ 'Desenvolvimento Web', 'Desenvolvimento de games' ]);

    function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);

        setprojects([...projects, `Novo Projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title='Projects'/>

            <img src={backgroundImage}/>

            <ul>
                {projects.map(project => <li key={project}> {project} </li> )}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;