import {rest} from 'msw'
import {mockedLoginError} from '__mocks__'

export const createLoginMockHandler = [
  rest.post(`/api/login`, (req, res, ctx) =>
    res(ctx.json(mockedLoginError), ctx.status(mockedLoginError.status))
  ),
]
