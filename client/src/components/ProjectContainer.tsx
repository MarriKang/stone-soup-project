import React from 'react';
import { ProjectContainerProps } from '../types';
import { Link } from 'react-router-dom';

const ProjectContainer = ({
  id,
  title,
  currFunds,
  goal,
  imageUrl,
  type
}: ProjectContainerProps) => {

    return (
      <div className="ProjectContainer">
        <Link to={`/explore/${id}`}>
          <h1>{title}</h1>
          <h2>{currFunds} out of {goal}</h2>
        </Link>
      </div>
    );
}

export default ProjectContainer;