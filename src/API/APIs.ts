import axios from "axios";
const url = "https://opendata.resas-portal.go.jp";

const getPref = () => {
  axios.get(`${url}/api/v1/prefectures`, {
    headers: {
      "X-API-KEY": "4xFd8jNVSkhzrTIEAY3dcADb7DGh4HPCN4w060CR",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};

export default getPref;
