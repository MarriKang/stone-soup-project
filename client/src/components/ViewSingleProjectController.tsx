import React, { useState, useEffect, useCallback } from 'react';
import { ProjectData, RewardData, UserData } from '../types';
import Service from '../services';
import { useParams, Link } from 'react-router-dom';
import SingleProject from './SingleProject'

const ViewSingleProjectController = () => {
    const initialProjectState = {
        id: 0,
        creatorId: 3,
        creatorName: "",
        title: "",
        currFunds: 0,
        goal: 0,
        description: "",
        status: "",
        imageURL: "",
        type: ""
    }

  const [project, setProject] = useState<ProjectData>(initialProjectState);
  const [rewards, setRewards] = useState<Array<RewardData>>([]);

  const { id } = useParams<{id: string}>();
  const projectId = Number(id);
  const creatorId = project.creatorId;

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
    })
    .catch((err: Error) => {
      console.log(err);
    })
  }

  const retrieveRewards = () => {
    Service.getAllRewards(projectId)
    .then((response: any) => {
      setRewards(response.data);
    })
    .catch((err: Error) => {
      console.log(err);
    })
  }

    return (
      <div>
        <SingleProject id={project.id} creatorId={project.creatorId} creatorName={project.creatorName} title={project.title} currFunds={project.currFunds}
        goal={project.goal} type={project.type} rewards={rewards}/>
      </div>
    );
}

export default ViewSingleProjectController;