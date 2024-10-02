import React from 'react'
import { memo } from 'react'

const MemoFile = memo((props) => {
    return (
      <div>
          <h1>useMemo</h1>
          {/* but memo not work if fx is pass through props */}
          {console.log('render memo')}
          <p>{props.name} : name</p>
      </div>
    )
  })

export default MemoFile