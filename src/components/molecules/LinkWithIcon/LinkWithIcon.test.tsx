import {render} from '@testing-library/react'
import LinkWithIcon from './LinkWithIcon'

jest.mock('next/link', () => {
  return ({children}) => {
    return children
  }
})

test('it renders', () => {
  const tree = render(<LinkWithIcon name="facebook" url="http://www.test.com" />)
  expect(tree).toMatchSnapshot()
})
