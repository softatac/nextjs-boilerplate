import {render} from '@testing-library/react'
import TextInput from './TextInput'

test('it renders', () => {
  const tree = render(<TextInput icon="facebook" />)
  expect(tree).toMatchSnapshot()
})
