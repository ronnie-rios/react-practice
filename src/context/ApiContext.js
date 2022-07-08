import { createContext, useReducer } from "react";
import apiReducer from './ApiReducer'

//create the context
const ApiContext = createContext()

//export the provider
export const ApiProvider = ({ children }) => {
    //create initial state
    const intialState = {
        posts: [],
        post: [],
        comments: [],
        loading: true
    }
    //user reducer takes 2 arguments, reduer and intial stae
    //returns an arr of 2 items, curr state and then the initial state
    const [state, dispatch] = useReducer(apiReducer, intialState)

    //return the context.provider values with state, dispatch
    //when wrap the context it will access the state, dispatch
    return <ApiContext.Provider value=
    {{
        ...state,
        dispatch
    }}>
        //all child components wrapped within the provder will have access to its values, like in props
        {children}
    </ApiContext.Provider>
}
export default ApiContext;