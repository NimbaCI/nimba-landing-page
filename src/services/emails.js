import Axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const saveEmail = async (email) => {
  try {
    await Axios.post(`${BACKEND_URL}/emails`, { emails: [email] });
  } catch (e) {
    console.log(e);
  }
};

export { saveEmail };
