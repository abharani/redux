import { BUY_CAKE} from './CakeTypes'
const initialState = {
    noOfCake: 10
}

const CakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
                ...state,
                noOfCake: state.noOfCake - 1
            }
        default: return state
    }
}
export default CakeReducer