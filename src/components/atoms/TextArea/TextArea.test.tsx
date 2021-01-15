import {render} from '@testing-library/react'
import TextArea from './TextArea'

test('it renders', () => {
  const tree = render(<TextArea />)
  expect(tree).toMatchSnapshot()
})
