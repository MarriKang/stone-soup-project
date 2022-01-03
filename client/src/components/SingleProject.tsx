import React, { useState, useEffect } from 'react';
import ProjectData, { RewardData } from '../types';
import Service from '../services';
import { useParams } from 'react-router-dom';


const SingleProject = () => {
    const initialProjectState = {
        id: 0,
        creatorId: 0,
        title: "",
        currFunds: 0,
        goal: 0,
        endDate: new Date(),
        description: "",
        status: "",
        imageURL: "",
        type: ""
    }

  const [project, setProject] = useState<ProjectData>(initialProjectState);
  const [rewards, setRewards] = useState<Array<ProjectData>>([]);

  const { id } = useParams<{id: string}>();
  const projectId = Number(id);

  useEffect(() => {
    retrieveProject();
  }, []);

  useEffect(() => {
    retrieveRewards();
  }, []);

  const retrieveProject = () => {
    Service.getProject(projectId)
    .then((response: any) => {
      setProject(response.data);
      console.log(response.data);
    })
    .catch((err: Error) => {
      console.log(err);
    })
  }

  const retrieveRewards = () => {
    Service.getAllRewards(projectId)
    .then((response: any) => {
      setRewards(response.data);
      console.log(response.data);
    })
    .catch((err: Error) => {
      console.log(err);
    })
  }

  console.log("rewards are" + rewards[0])

    return (
      <div className="SingleProject">
          <h1>{project.title}</h1>
          <h4>{rewards.map(reward => {
              return <h5>{reward.description}</h5>
          })}</h4>
      </div>
    );
}

export default SingleProject;