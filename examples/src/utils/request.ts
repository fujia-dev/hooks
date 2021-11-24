import axios from 'axios';

const endPoints = {
  dev: 'https://60b2643d62ab150017ae21de.mockapi.io/',
  test: '',
  pre: 'https://staging.myapi.io/',
  prod: 'https://prod.myapi.io/',
};

const instance = axios.create({
  baseURL: endPoints.dev,
  timeout: 30000,
  headers: {
    Authorization: ''
  }
});

instance.interceptors.response.use(
  (res) => {
    // add some logic, i.e log
    return res;
  },
  (err) => {
    if (err.response.status === 403) {
      // Uniform handling unauthorized requests and jumping to the login screen
      // @ts-ignore
      document.location = '/login'
    }

    return Promise.reject(err);
  }
);

export default instance;
