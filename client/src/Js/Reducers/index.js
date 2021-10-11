// combiner ts les reducers dans combinedReducer
import {combineReducers} from 'redux'

//imporetr ts les reducers
import {ContactReducer} from './Contacts'

export const CombineReducer=combineReducers({ContactReducer})

// ES6 export const CombineReducer=combineReducers({ContactReducer:ContactReducer})
// export const CombineReducer=combineReducers({Reducer1:ContactReducer})
// w mb3ed kif nabda 7ajti utilisi wala njib 7aja mn contactrreducer on apple Reducer1

