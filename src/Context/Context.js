import React, { useState, createContext } from 'react'

export const UserWhatsappContext = createContext()

export const UserWhatsappProvider = (props) => {
  const [number, setNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [page, setPage] = useState(false)
  const [userIsAuth, setUserIsAuth] = useState(false)
  return (
    <UserWhatsappContext.Provider
      value={{
        state1: [number, setNumber],
        state2: [loading, setLoading],
        state3: [city, setCity],
        state4: [name, setName],
        state5: [address, setAddress],
        state6: [page, setPage],
        state7: [userIsAuth, setUserIsAuth],
      }}
    >
      {props.children}
    </UserWhatsappContext.Provider>
  )
}
