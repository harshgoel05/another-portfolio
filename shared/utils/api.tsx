/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/api';

export async function getPersonalDetails(): Promise<any> {
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

export async function getProjectDetails(): Promise<any> {
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
