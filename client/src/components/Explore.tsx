import React from 'react';
import ViewProjectsController from './ViewProjectsController';

const Explore = () => {

    return (
      <div className="Explore">
          <h1>Explore</h1>
          <h4>See what projects are being worked on right now</h4>
          <ViewProjectsController/>
      </div>
    );
}

export default Explore;