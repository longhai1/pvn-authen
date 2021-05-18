import { requestParams } from '../services/auth.type';
export const getVideoRequestParams = (email: string, password: string, fullname: string, phoneNumber: string) => {
  let params = {} as requestParams;

  if (email) {
    params['email'] = email;
  }
  if (password) {
    params['password'] = password;
  }
  if (fullname) {
    params['fullname'] = fullname;
  }
  if (phoneNumber) {
    params['number_phone'] = phoneNumber;
  }

  return params;
};