import axios from "axios";

const API_URL = process.env.REACT_APP_TEST_FILE_API;

const getFiles = async () => {
  const options = {
    headers: {
      "content-type": "application/json"
    },
  };
  try {
    return await axios.get(`${API_URL}/files`, options);
  } catch {}
};


export {
  getFiles
};
