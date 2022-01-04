import http from "./http-common";
import { ProjectData, RewardData, UserData } from "./types";
import axios from 'axios';

const getAllProjects = () => {
    return http.get<Array<ProjectData>>("/projects");
}

const getProject = (id: number) => {
    return http.get<ProjectData>(`/projects/${id}`);
}

const getAllRewards = (id: number) => {
    return http.get<Array<RewardData>>(`/projects/${id}/rewards`);
}

const updateProject = (id: number, data: number) => {
    return http.put<any>(`/projects/${id}/${data}`)
}

const getCreator = (userId: number) => {
    return http.get<UserData>(`/users/${userId}`)
}

const Service = {
    getAllProjects,
    getProject,
    getAllRewards,
    updateProject,
    getCreator
}

export default Service;