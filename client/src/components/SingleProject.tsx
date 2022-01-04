import React, { useState, useEffect } from 'react';
import { ProjectData, RewardData } from '../types';
import Service from '../services';
import { useParams, Link } from 'react-router-dom';
import RewardContainer from './RewardContainer'

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
  const [rewards, setRewards] = useState<Array<RewardData>>([]);

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

  console.log("rewards are" + rewards)

    return (
      <div className="SingleProject">
          <h1>{project.title}</h1>
          <h4>{rewards.map(reward => {
            return <RewardContainer key={reward.id} id={reward.id} price={reward.price} description={reward.description}/>
          })}</h4>
          <Link to={`/projects/${id}/checkout`}>
              <button>Checkout</button>
            </Link>
      </div>
    );
}

export default SingleProject;