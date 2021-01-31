import axios from 'axios';
import { PersonalDetails, Project } from './types';

export const BASE_URL = 'http://localhost:3000/api';

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${BASE_URL}/me`
    });
    return data;
  } catch (err) {
    return false;
  }
}

export async function getProjectDetails(): Promise<Project[] | boolean> {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${BASE_URL}/projects`
    });
    return data;
  } catch (err) {
    return false;
  }
}
