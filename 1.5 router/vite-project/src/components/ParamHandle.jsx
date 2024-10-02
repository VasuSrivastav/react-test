import React from 'react'

import { useParams } from 'react-router-dom'

const ParamHandle = () => {
    const {id}= useParams();
    
  return (
    
      <div>
        <h1>ParamHandle</h1>
        <h2>Param is "{id}" any data</h2>
      </div>
    
  )
}

export default ParamHandle