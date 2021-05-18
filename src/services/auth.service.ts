import { create } from 'apisauce';
import axios from 'axios';
import { requestParams } from './auth.type';

const apiUrl = 'http://45.77.33.125:8000/api/v1/users/';

const login = (email : string, password : string) => {
  console.log(`Request: ${email} ${password}`);
  return axios
    .post(`${apiUrl}login`, {
        email: email,
        password: password,
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}

const signUp = (params : requestParams) => {
  return axios.post(apiUrl, params)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}

export default {
  login,
  signUp,
};