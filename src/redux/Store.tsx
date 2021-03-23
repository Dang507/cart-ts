import React from 'react'
import {createStore,AnyAction,Dispatch,Middleware,compose,applyMiddleware} from 'redux'
import { rootReducer } from './rootReducer'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

const simple=()=>(next:Dispatch<AnyAction>)=>(action:AnyAction)=>{
    next({...action});
}

const middleware: Middleware[]=[
    thunk,
    simple,
];

// compose(
//     applyMiddleware(...middleware),
    


const composedEnhancers=composeWithDevTools({
  
})

export default createStore(
    rootReducer,
    composedEnhancers( applyMiddleware(...middleware))
    )

