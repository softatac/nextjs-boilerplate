import React from 'react'
import {fireEvent, screen, render} from '@testing-library/react'
import Dropdown from './Dropdown'

const options = [
  {value: '0', label: 'Zero'},
  {value: '1', label: 'One'},
  {value: '2', label: 'Two'},
]

test('fires onChange', () => {
  const onChange = jest.fn()
  render(<Dropdown options={options} selected={options[0]} onChange={onChange} />)
  fireEvent.click(screen.getByText('Zero'))
  fireEvent.click(screen.getByText('Two'))
  expect(onChange).toBeCalledWith(options[2])
})
