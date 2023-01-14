import React, {createContext, useState} from 'react'
import { backend } from '../mock/mock';

export let Beckend = createContext();

export const BeckendContextProvider = ({children}) => {
  const [beckend, setBeckend] = useState(backend)
  return (
    <Beckend.Provider value={[beckend, setBeckend]}>
      {children}
    </Beckend.Provider>
  )
}

export default BeckendContextProvider