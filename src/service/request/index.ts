// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// interface HyRequstInterceptor {
//   requestInterceptor?:(config:AxiosRequestConfig)=>AxiosRequestConfig
//   requestInterceptorCatch?:(err:any)=>any
//   responseInterceptor?:(config:AxiosResponse)=>AxiosResponse
//   responseInterceptorCatch?:(err:any)=>any
// }

// interface HyRequestConfig extends AxiosRequestConfig{
//   interceptors?:HyRequstInterceptor
// }
// class HyRequst{
//   instance:AxiosInstance
//   interceptors?:HyRequstInterceptor
//   constructor(config:HyRequestConfig){
//     this.instance=axios.create(config)
//     this.interceptors=config.interceptors

//     this.instance.interceptors.request.use(
//       this.interceptors?.requestInterceptor,
//       this.interceptors?.requestInterceptorCatch
//     )
//     this.instance.interceptors.response.use(
//       this.interceptors?.responseInterceptor,
//       this.interceptors?.responseInterceptorCatch
//     )

//     this.instance.interceptors.request.use(
//       (config) => config, // 默认请求处理
//       (err) => {
//         console.error('Request Error:', err); // 请求错误处理
//         return Promise.reject(err);
//       }
//     );

//     this.instance.interceptors.response.use(
//       (response) => response, // 默认响应处理
//       (err) => {
//         console.error('Response Error:', err); // 响应错误处理
//         return Promise.reject(err);
//       }
//     );

//   }

//   request(config:HyRequestConfig):void{
//     this.instance.request(config)
//   }
// }

// export default HyRequst

import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance

  // request实例 => axios的实例
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 针对特定的hyRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  request<T = any>(config: HYRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
