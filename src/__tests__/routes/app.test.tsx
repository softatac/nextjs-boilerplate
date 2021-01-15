import React from 'react'
import {render, screen} from '@testing-library/react'

import App from '../../pages/index'

test('renders without crashing', () => {
  render(<App />)
  const heading = screen.getByLabelText('heading')
  expect(heading.textContent).toContain('Landing NextJS')
})
