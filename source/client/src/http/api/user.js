import axios from '../axios';

const login = data => {
  return axios.post('/api/user/login', data);
};

const getUserProfile = () => {
  return axios.get('');
};

export default {
  login,
  getUserProfile,
};
