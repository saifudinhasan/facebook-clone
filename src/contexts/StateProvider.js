import { createContext, useContext, useReducer } from 'react';
import database from '../firebase';
import stateReducer from './stateReducer';


export const StateContext = createContext();
export const useStateValue = () => useContext(StateContext);


export const StateProvider = ({ children }) => {

  const initialState = {
    user: null,
  }

  const [state, dispatch] = useReducer(stateReducer, initialState)

  const databasePost = (collection, data) => database.collection(collection).add(data)
  const databaseDelete = (collection, id) => database.collection(collection).doc(id).delete()

  const value = {
    user: state.user,
    dispatch,
    databasePost,
    databaseDelete
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}


