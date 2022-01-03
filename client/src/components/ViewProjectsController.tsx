import React, { useState, useEffect } from 'react';
import ProjectData from '../types';
import Service from '../services';

const ViewProjectsController: React.FC = () => {
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
      <div className="Home">
          <p> look: {projects.map(project => {
            return project.title
          })}</p>
        <p>hey uh</p>
      </div>
    );
}

export default ViewProjectsController;