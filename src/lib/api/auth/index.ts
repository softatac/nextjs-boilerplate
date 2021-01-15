import httpClient from '@lib/api/httpClient'
import {TLoginRequestData, TLoginResponseData, TRegisterRequestData} from '../types/auth'

/**
 * @description Make a login request
 * @param payload Contains login credentials
 */
export async function login(payload: TLoginRequestData): Promise<TLoginResponseData> {
  return httpClient.post<TLoginResponseData>('auth/login', payload).then(
    ({data}) => data,
    (error) => {
      throw error
    }
  )
}

/**
 * @description Make a signup request
 * @param payload Contains signup credentials
 */
export async function signup(payload: TRegisterRequestData) {
  return httpClient
    .post<TLoginResponseData>('auth/register_student', payload)
    .then(({data}) => data)
}

/**
 * @description Clear cookies
 */
export async function logout() {
  return httpClient.post('auth/logout').then(({data}) => data)
}

/**
 * @description Get the login status
 */
export async function refreshLogin() {
  return httpClient.get<TLoginResponseData>('auth/check').then(({data}) => data)
}
