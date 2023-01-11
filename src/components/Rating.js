import React from 'react'

import {AiFillStar , AiOutlineStar} from 'react-icons/ai'

const Rating = (props) => {
  return (
    <>
       {[...Array(5)].map((_,index)=>(
          <span key={index} onClick={()=>props.clicker(index)}>
              {
                props.rating>index?(<AiFillStar fontSize='15px' />):(<AiOutlineStar fontSize='15px'/>)
              }
          </span>
       ))
       }
    </>
  )
}

export default Rating