import axios from 'axios';
import { Company, PersonalDetails, Project } from './types';

// FIXME change baseURL to production
export const BASE_URL = process.env.DEV_ENV ? 'https://localhost:3000' : 'https://harshgoel.me/api';

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
export async function getCompanyDetails(): Promise<Company[] | boolean> {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${BASE_URL}/companies`
    });
    return data;
  } catch (err) {
    return false;
  }
}
