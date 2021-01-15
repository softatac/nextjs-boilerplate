import {FC} from 'react'

export type TEntityListColumn = {
  key: string
  title: string
  component?: FC | Element | unknown
  fillters?: unknown
}

export type TEntityListColumns = Array<TEntityListColumn>
