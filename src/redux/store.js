import { createStore, combineReducers } from 'redux'
import { localizationReducer } from './reducers/localizationReducer'

export default createStore(
    combineReducers(
        { localization: localizationReducer },
    )
)
