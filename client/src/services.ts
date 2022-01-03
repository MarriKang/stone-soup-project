import http from "./http-common";
import ProjectData from "./types";
import axios from 'axios';

const getAllProjects = () => {
    return http.get<Array<ProjectData>>("/projects");
}

const getProject = (id: number) => {
    return http.get<ProjectData>(`/projects/${id}`);
}

const getAllRewards = (id: number) => {
    return http.get<Array<ProjectData>>(`/projects/${id}/rewards`);
}

const Service = {
    getAllProjects,
    getProject,
    getAllRewards
}

export default Service;