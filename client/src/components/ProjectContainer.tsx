import React from 'react';

type ProjectContainerProps  = {
  id: number,
  title: string,
  goal: number,
  imageUrl: string,
  type: string,
  key: number
}

const ProjectContainer = ({
  id,
  title,
  goal,
  imageUrl,
  type
}: ProjectContainerProps) => {

    return (
      <div className="Explore">
          <h1>{id}</h1>
      </div>
    );
}

export default ProjectContainer;