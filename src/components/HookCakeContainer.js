import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/Cakes'


function HookCakeContainer  ()  {
    const noOfCake= useSelector (state=> state.noOfCake)
  const dispatch=useDispatch()
    return (
    <div>
        <h2>
            Number of Cakes -{noOfCake}
        </h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HookCakeContainer