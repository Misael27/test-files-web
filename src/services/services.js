import axios from 'axios'

const API_URL = process.env.REACT_APP_TEST_FILE_API

const getListFiles = async () => {
  const options = {
    headers: {
      'content-type': 'application/json'
    }
  }
  try {
    return await axios.get(`${API_URL}/files/list`, options)
  } catch {}
}

const getDataFiles = async (fileName) => {
  const options = {
    headers: {
      'content-type': 'application/json'
    }
  }
  const query = fileName && fileName !== "" ? `?fileName=${fileName}` : "";
  try {
    return await axios.get(`${API_URL}/files/data${query}`, options)
  } catch {}
}

export {
  getListFiles,
  getDataFiles
}
