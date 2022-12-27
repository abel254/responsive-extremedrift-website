import { IconContext } from "react-icons"
import React from 'react'

type IconConfigProps = {
  children: React.ReactNode
}

export const IconConfig = ({children}: IconConfigProps) => {
  return(
    <>
    <IconContext.Provider value={{color: '#EBEDEF', size: '3em'}}>
      {children}
    </IconContext.Provider>
    </>
  )
}