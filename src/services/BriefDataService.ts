import axios, { AxiosError, AxiosResponse } from 'axios';
import { IBrief } from '../interfaces/Brief';

const briefsUrl = `${process.env.REACT_APP_API_URL}/briefs`;
const token = '';
const config = { headers: { 'x-token': token } };

export const getBriefList = (): Promise<IBrief[]> => axios.get(briefsUrl, config)
  .then((response: AxiosResponse) => response.data.data)
  .catch((error: AxiosError) => console.log(error));
