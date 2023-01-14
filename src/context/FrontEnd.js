import React, {createContext, useState} from 'react'
import { data } from '../mock/mock'

export let FrontEnd = createContext()

const FrontEndProvider = ({children}) => {
  const [state, setState] = useState(data)
  
  console.log(children, 'frontendprovider')
  return(
    <FrontEnd.Provider value={[state, setState]}>
      {children}
    </FrontEnd.Provider>
  )
}

export default FrontEndProvider