import axios from "axios";

const url = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes";
export const fetchShow = () => {
    return axios.get(url)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.error("error fetching data from api, err: ", err.message);
            return err;
        }); // or res.data, however you want to set that up
}