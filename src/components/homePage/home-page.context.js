import { createContext, useReducer } from "react"
import HomePage from "./home-page"

export const HomePageContext = createContext({})

export default function HomePageContextProvider() {
  const ACTION_TYPES = { SUCCESS: "SUCCESS", ERROR: "ERROR" }
  const initialState = { data: null, error: null }

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "SUCCESS":
        return { ...state, data: payload }
      case "ERROR":
        return { ...state, error: payload }
      default:
        throw new Error("Unknown Action")
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <HomePageContext.Provider value={{ state, dispatch, ACTION_TYPES }}>
      <HomePage />
    </HomePageContext.Provider>
  )
}
