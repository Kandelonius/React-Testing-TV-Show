import axios from "axios";

const url = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes";
export const fetchShow = () => {
    return axios.get
      .then(res => return res) // or res.data, however you want to set that up
  }