import React, { useState, useEffect } from 'react';
import { ProjectData, RewardData } from '../types';
import Service from '../services';
import { useParams, Link } from 'react-router-dom';
import SingleProject from './SingleProject'

const ViewSingleProjectController = () => {
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

    return (
      <div>
        <SingleProject id={project.id} creatorId={project.creatorId} title={project.title} currFunds={project.currFunds}
        goal={project.goal} endDate={project.endDate} type={project.type} rewards={rewards}/>
      </div>
    );
}

export default ViewSingleProjectController;