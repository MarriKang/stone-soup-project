import React, { useState, useEffect } from 'react';
import { ProjectData } from '../types';
import Service from '../services';
import ProjectContainer from './ProjectContainer';

const ViewProjectsController = () => {
  const [projects, setProjects] = useState<Array<ProjectData>>([]);

  useEffect(() => {
    retrieveProjects();
  }, []);

  const retrieveProjects = () => {
    Service.getAllProjects()
    .then((response: any) => {
      setProjects(response.data);
    })
    .catch((err: Error) => {
      console.log(err);
    })
  }

  console.log(projects);

    return (
      <div className="ViewProjectsController">
        <h5>Look</h5>
          <div className="all-projects-container">{projects.map(project => {
            return <ProjectContainer key={project.id} id={project.id} title={project.title} currFunds={project.currFunds} goal={project.goal} imageUrl={project.imageURL} type={project.type}/>
          })}</div>
      </div>
    );
}

export default ViewProjectsController;