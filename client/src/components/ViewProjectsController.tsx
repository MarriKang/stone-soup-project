import React, { useState, useEffect } from 'react';
import ProjectData from '../types';
import Service from '../services';
import ProjectContainer from './ProjectContainer';

const ViewProjectsController = () => {
  const [projects, setProjects] = useState<Array<ProjectData>>([]);

  useEffect(() => {
    retrieveProjects();
  }, []);

  const retrieveProjects = () => {
    Service.getAll()
    .then((response: any) => {
      setProjects(response.data);
      console.log(response.data);
    })
    .catch((err: Error) => {
      console.log(err);
    })
  }

  console.log(projects);

    return (
      <div className="ViewProjectsController">
          <h4> look: {projects.map(project => {
            return <ProjectContainer key={project.id} id={project.id} title={project.title} goal={project.goal} imageUrl={project.imageURL} type={project.type}/>
          })}</h4>
        <p>hey uh</p>
      </div>
    );
}

export default ViewProjectsController;