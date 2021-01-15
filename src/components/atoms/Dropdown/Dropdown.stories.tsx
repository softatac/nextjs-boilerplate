import React, {useState} from 'react'
import {withKnobs} from '@storybook/addon-knobs'
import Dropdown from './Dropdown'

export default {
  component: Dropdown,
  title: 'Dropdown',
  decorators: [withKnobs],
}

const options = [
  {value: '0', label: 'Zero'},
  {value: '1', label: 'One'},
  {value: '2', label: 'Two'},
]

export const Default = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className="flex flex-col">
      <Dropdown options={options} selected={selected} onChange={setSelected} />
      <h1 className="mt-8 text-white">I should get covered when the select expands</h1>
    </div>
  )
}
