import React from 'react'
import NoReducer from './NoReducer';
import WReducer from './WReducer';
import WReducer2 from './WReducer2';

const Screen = () => {

  return (
    <div>
      <NoReducer />
      <hr />
      <WReducer />
      <hr />
      <WReducer2 />
    </div>
  )
}

export default Screen