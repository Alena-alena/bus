import axios from "axios";

const briefsUrl = `${process.env.REACT_APP_API_URL}/briefs`;
const token = '';

export const getBriefList = () => {
    axios.get(briefsUrl, { headers: { 'x-token': token } })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
