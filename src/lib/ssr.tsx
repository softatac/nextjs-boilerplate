// import {NextPageContext} from 'next'
// import * as AuthAPI from '@lib/api/auth'
// import {AuthState} from '@context/auth/state'
import {IProvideAuthState} from '@context/auth/types'
// import { TProfileData } from './api/profile/types'

export type ServerSideProps = {
  initialAuthState: IProvideAuthState
}

// /**
//  * @description Refresh the token server side and set cookies on the response
//  * @param ctx ServerSide NextPage context
//  * @returns a new jwt token
//  */
// export async function refreshToken(ctx: NextPageContext): Promise<TProfileData | null> {
//   let tokenRef = null
//   const cookies = ctx?.req?.headers?.cookie
//   const extraHeaders = cookies ? {Cookie: cookies} : {}
//   await AuthAPI.refreshLogin()
//     .then(({token, headers}) => {
//       // set new refresh token on Context Response
//       ctx.res.setHeader('Set-cookie', headers['set-cookie'])
//       // return token
//       tokenRef = token
//     })
//     .catch(() => console.warn('failed to refresh token - skipping'))
//   return tokenRef
// }

// /**
//  * @description Refresh auth using the `refetch_token` from the SSR Request context
//  * @param ctx
//  * @param props
//  */
// export const refreshAuth = async (ctx, props = {}) => {
//   const response = await refreshToken(ctx)
//   return {
//     ...props,
//     initialAuthState: AuthState.Authenticated(response),
//   }
// }
