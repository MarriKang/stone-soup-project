import React from 'react';

type ExploreProps = {
  id: number,
  title: string,
  goal: number,
  imageUrl: string,
  type: string,
  key: number
}

const Explore = ({
  id,
  title,
  goal,
  imageUrl,
  type
}: ExploreProps) => {

    return (
      <div className="Explore">
          <h1>{id}</h1>
      </div>
    );
}

export default Explore;