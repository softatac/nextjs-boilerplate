import React from 'react'

import Loading from '@atom/Loading'
import {TEntityListColumns} from './types'
import style from './EntityList.module.css'
import EntityListRow from './EntityListRow'

const defaultColumns = [
  {key: 'id', title: 'ID'},
  {key: 'name', title: 'Nume'},
  {key: 'username', title: 'Utilizator'},
]

type TEntityListProps = {
  columns: TEntityListColumns
  items?: Array<unknown>
  loading?: boolean
  filters?: Record<string, any>
}

const EntityList = ({
  columns = defaultColumns,
  loading = false,
  items = [],
  filters = null,
}: TEntityListProps) => {
  return (
    <div>
      {items?.length === 0 && (loading ? <Loading /> : <div>Nu s-a găsit nici un rezultat</div>)}

      {items?.length > 0 && (
        <div className={style.tableContainer}>
          <table className="table">
            <thead>
              <tr>
                {columns.map(({title}) => (
                  <th key={title}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => (
                <EntityListRow
                  key={index.toString()}
                  columns={columns}
                  item={item}
                  filters={filters}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default EntityList
