// import { createContext, useState, useContext, useRef } from 'react'

// const AuthContext = createContext()
// export const useAuth = () => useContext(AuthContext)

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const dataRef = useRef()

//   const handleIsAuthenticated = ({ isSignin, data }) => {
//     setIsAuthenticated(isSignin)
//     dataRef.current = data
//   }

//   const value = {
//     isAuthenticated,
//     userData: dataRef.current,
//     onIsAuthenticated: handleIsAuthenticated
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }
