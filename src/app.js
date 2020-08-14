import React, {useState, useEffect} from 'react';
import api from './services/api'

import Header from './components/Header';

import './App.css';


function App() {
    const [projects, setprojects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setprojects(response.data);
        })
    }, []);

    function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);

        setprojects([...projects, `Novo Projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title='Projects'/>

            <ul>
                {projects.map(project => <li key={project.id}> {project.tittle} </li> )}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;