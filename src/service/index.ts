import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'
import { AxiosHeaders } from 'axios'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: new AxiosHeaders(),
  interceptors: {
    requestSuccessFn: (config) => config
  }
})

export default hyRequest
