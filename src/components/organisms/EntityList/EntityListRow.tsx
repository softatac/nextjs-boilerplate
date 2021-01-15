export default function EntityListtRow({item, columns, filters}) {
  return (
    <tr>
      {columns.map(({key, component: Component}) => (
        <td key={key}>
          {Component ? (
            <Component item={item} filters={filters}>
              {item[key]}
            </Component>
          ) : (
            item[key]
          )}
        </td>
      ))}
    </tr>
  )
}
