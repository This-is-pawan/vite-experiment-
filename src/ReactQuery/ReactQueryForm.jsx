import React from 'react'

const ReactQueryForm = ({item}) => {
  return (
    <div>

      <form action="" className='form'>
        <label htmlFor="input">Name</label>
        <input type="text" placeholder='search the items'  id='input'     required />

      </form>
    </div>
  )
}

export default ReactQueryForm