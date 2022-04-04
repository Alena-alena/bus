import axios, { AxiosError, AxiosResponse } from 'axios';

const briefsUrl = `${process.env.REACT_APP_API_URL}/briefs`;
const token = '';

export const getBriefList = (): void => {
  axios.get(briefsUrl, { headers: { 'x-token': token } })
    .then((response: AxiosResponse) => {
      console.log(response);
    })
    .catch((error: AxiosError) => {
      console.log(error);
    });
};
