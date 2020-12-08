import axios from 'axios';
import qs from 'qs';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({ timeout: 3000 });

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.common['Authorization'] = localStorage.getItem("token");

instance.interceptors.request.use(function (config) {
  NProgress.start();
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(
  (res) => {
    NProgress.done();
    res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
  },
  (err) => {
    console.log(err)
    const { response } = err;
    if (response) {
      errorHandle(response.status, response.data);
      return Promise.reject(response);
    } else {
      console.log('请求失败')
    }
  }
);

const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      console.log("信息校验失败");
      break;
    case 401:
      console.log("认证失败");
      break;
    case 403:
      console.log("token校验失败");
      break;
    case 404:
      console.log("请求的资源不存在");
      break;
    default:
      console.log(other);
      break;
  }
}

export default instance;