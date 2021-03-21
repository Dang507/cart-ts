import React from 'react'
import {createStore,AnyAction,Dispatch,Middleware,compose,applyMiddleware} from 'redux'
import { rootReducer } from './rootReducer'
import thunk from "redux-thunk"

const simple=()=>(next:Dispatch<AnyAction>)=>(action:AnyAction)=>{
    next({...action});
}

const middleware: Middleware[]=[
    thunk,
    simple,
];



const composedEnhancers=compose(
    applyMiddleware(...middleware),
    
)
export default createStore(
    rootReducer,
    composedEnhancers,
    )

