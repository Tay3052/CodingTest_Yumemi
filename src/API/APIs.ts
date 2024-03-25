import axios from "axios";
import getPref from "../Interface/Interface";
const url = "https://opendata.resas-portal.go.jp";

const getPrefs = () => {
  const get = axios.get<getPref[]>(`${url}/api/v1/prefectures`, {
    headers: {
      "X-API-KEY": "4xFd8jNVSkhzrTIEAY3dcADb7DGh4HPCN4w060CR",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return get;
};

export { getPrefs };
