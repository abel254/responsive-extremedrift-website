import { IconContext } from "react-icons"
import React from 'react'

type IconConfigProps = {
  children: React.ReactNode
}

export const IconConfig2 = ({children}: IconConfigProps) => {
  return(
    <>
    <IconContext.Provider value={{color: '#EBEDEF', size: '2em'}}>
      {children}
    </IconContext.Provider>
    </>
  )
}