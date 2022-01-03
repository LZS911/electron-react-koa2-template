/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable promise/always-return */
import axios from 'axios';
// import { message } from 'antd';

axios.defaults.baseURL = 'http://127.0.0.1:3434';
axios.defaults.timeout = 180000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (res: any) => {
    if (+res.status === 200 || +res.status === 201) {
      return res;
    }
    console.log(res.msg);
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

export function $post<T = any>(
  url: string,
  params: any,
  config: any
): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(
        (res: any) => {
          if (!res.data.code) {
            // message.error(res.data.msg);
            reject(res.data.msg);
          }
          resolve(res.data.data);
        },
        (err: any) => {
          reject(err);
        }
      )
      .catch((err: any) => {
        reject(err);
      });
  });
}

export function $get<T = any>(
  url: string,
  params: any,
  config: any
): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res: any) => {
        if (!res.data.code) {
          // message.error(res.data.msg);
          reject(res.data.msg);
        }
        resolve(res.data.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

export default axios;
