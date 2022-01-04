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
  const formattedFunds = currFunds.toLocaleString();
  const formattedGoal = goal.toLocaleString();

    return (
      <div className="ProjectContainer">
        <Link to={`/explore/${id}`}>
          <h1>{title}</h1>
          <h2>{formattedFunds} out of {formattedGoal} raised</h2>
        </Link>
      </div>
    );
}

export default ProjectContainer;