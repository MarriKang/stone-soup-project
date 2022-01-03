import http from "./http-common";
import ProjectData from "./types";
import axios from 'axios';

const getAll = () => {
    return http.get<Array<ProjectData>>("/projects");
}

const Service = {
    getAll
}

export default Service;