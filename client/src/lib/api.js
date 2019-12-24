import axios from "axios";

export const getApi = async reqData => {
  try {
    const { url = "", params = {} } = reqData;
    let response = await axios.get(url, params);
    return response;
  } catch (err) {
    console.error(err, reqData);
  }
};
export const postApi = async reqData => {
  try {
    const { url = "", body = {} } = reqData;
    let response = await axios.post(url, body);
    return response;
  } catch (err) {
    console.error(err, reqData);
  }
};
