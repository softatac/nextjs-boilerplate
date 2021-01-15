import axios from 'axios'
import useSWR, {ConfigInterface, mutate, responseInterface} from 'swr'
import {DEV_MODE} from '@config/env'
import {API_URL} from '@config/external-urls'
import {logger} from '@lib/log'

const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  'X-Accept-Version': 'v2',
}

const HttpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true,
  headers,
})

const log = logger.extend('http:client')

// Add a request interceptor
HttpClient.interceptors.request.use(
  (config) => {
    DEV_MODE && log('%s %s%s', config.method.toUpperCase(), config.baseURL, config.url, config.data)
    return config
  },
  (error) => Promise.reject(error)
)

// Add a response interceptor
HttpClient.interceptors.response.use(
  (response) => {
    DEV_MODE && log('%s %s', response.status, response.statusText)
    return response
  },
  ({request, response}) => {
    if (!response) {
      log('request failed')
      return Promise.reject({
        message: 'The request was made but no response was received',
        context: {request},
      })
    }
    log('%s %s | %s', response?.status, response?.statusText, response?.data?.message)
    return Promise.reject({context: response, message: response.data?.message})
  }
)

export declare type TUseGetResponseInterface<Data, Error = unknown> = responseInterface<
  Data,
  Error
> & {
  headers?: Record<string, string>
}

/**
 * Creates a context for given key (GET endpoint)
 *  - stays the same throughout the app
 *  - can be refreshed
 *
 * @see https://github.com/vercel/swr
 */
export const useGet = <T>(
  key: string,
  options: ConfigInterface = {}
): TUseGetResponseInterface<T, unknown> => {
  const response = useSWR(key, (url, params) => HttpClient.get(url, {params}), options)

  return {
    ...response,
    data: response?.data?.data,
    headers: response?.data?.headers,
  }
}

/**
 * Refresh key for useGet (reload in background from server)
 */
export const refreshGet = (key: string) => mutate(key)

export default HttpClient
