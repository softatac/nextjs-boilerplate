import {setupServer} from 'msw/node'
import * as handlers from './handlers'

export function setupApiMocking() {
  setupApiMockWithHandlers(
    ...Object.keys(handlers).reduce((acc, key) => [...acc, ...handlers[key]], [])
  )
}

export function setupApiMockWithHandlers(...handlers) {
  const server = setupServer(...handlers)
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
}
