import axios from 'axios';

const API_URL = 'http://localhost:3001/uploadFile'

const ApiCall = async(formData) => {
  try {
    const res = await axios.post(API_URL , formData);
    return (res.data); 
  } catch (error) {
    console.error(error.message);
  }
}

export default ApiCall;
