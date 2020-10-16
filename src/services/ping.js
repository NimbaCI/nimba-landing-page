import Axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ping = async () => {
  try {
    await Axios.get(`${BACKEND_URL}/ping`);
  } catch (e) {
    console.log(e);
  }
};

export { ping };
