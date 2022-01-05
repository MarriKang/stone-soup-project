import React, { useState, ChangeEvent } from 'react';
import { ProjectData } from '../types';
import Service from '../services';

const ProjectForm = () => {
    const initialProjectState = {
        id: null,
        creatorId: 3,
        creatorName: "Jane Doe",
        title: "",
        currFunds: 0,
        goal: 0,
        description: "",
        status: "in-progress",
        imageURL: "yeah",
        type: "film",
    }

    const [project, setProject] = useState<ProjectData>(initialProjectState);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProject({...project, [name]: value})
    }

    const createProject = () => {
        const data = {
            id: project.id,
            creatorId: project.creatorId,
            creatorName: project.creatorName,
            title: project.title,
            currFunds: project.currFunds,
            goal: project.goal,
            description: project.description,
            status: project.status,
            imageURL: project.imageURL,
            type: project.type,
        }

        Service.createProject(data)
        .then((response: any) => {
            setProject({
                id: response.data.id,
                creatorId: response.data.creatorId,
                creatorName: response.data.creatorName,
                title: response.data.title,
                currFunds: response.data.currFunds,
                goal: response.data.goal,
                description: response.data.description,
                status: response.data.status,
                imageURL: response.data.imageURL,
                type: response.data.type,
            });
            console.log(response.data);
        })
        .catch((err: Error) => {
            console.log(err)
        })
    }

    return (
        <div className="ProjectForm">
            <form>
                <input 
                type="text" 
                className="form-control" 
                id="title" 
                required value={project.title} 
                onChange={handleInputChange} 
                name="title"/>
                <input type="submit" onClick={createProject}/>
            </form>
        </div>
    )
}

export default ProjectForm;