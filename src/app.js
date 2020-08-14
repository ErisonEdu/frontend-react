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

    async function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);
        //setprojects([...projects, `Novo Projeto ${Date.now()}`]);
         const response = await api.post('projects', {
            tittle: `Novo Projeto ${Date.now()}`,
            owner: "Erison Eduard"
        })
        const project = response.data;

        setprojects([...projects, project]);
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