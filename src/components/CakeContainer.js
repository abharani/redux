import React from 'react'
import { buyCake } from '../redux/Cakes'
import { connect } from 'react-redux'
function CakeContainer  (props) {
  return (
    <div>
        <h2>
            Number of Cakes - {props.noOfCake} 
        </h2>
        <button onClick={props.buyCake}> Buy Cake</button>
    </div>
  )
}

const mapStateToProps= state=>{
    return{
        noOfCake: state.noOfCake
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( CakeContainer)