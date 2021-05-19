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
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

const signUp = (params : requestParams) => {
  console.log(`Request: ${params.email} ${params.password} ${params.fullname} ${params.number_phone}`);
  return axios
    .post(apiUrl, params)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export default {
  login,
  signUp,
};