import axios from "axios";
import { BASE_API_URL } from "./constant";

axios.defaults.baseURL = BASE_API_URL;
export const get = async reqData => {
  try {
    const { url = "", params = {} } = reqData;
    let response = await axios.get(url, params);
    return response.data;
  } catch (err) {
    console.error(err, reqData);
  }
};
export const post = async reqData => {
  try {
    const { url = "", body = {} } = reqData;
    let response = await axios.post(url, body);
    return response;
  } catch (err) {
    console.error(err, reqData);
  }
};
