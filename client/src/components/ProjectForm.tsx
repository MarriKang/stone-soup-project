import React, { useState, ChangeEvent } from 'react';
import { ProjectData } from '../types';

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
    }

    return (
        <div className="ProjectForm">
            <form>
                <input type="text" value={project.title}>Title</input>
                <input type="number" value={project.goal}>Goal</input>
            </form>
        </div>
    )
}

export default ProjectForm;