import React, { ReactElement } from 'react'
import Header from './header/Header'
import ButtonHeader from './header/buttonHeader'
import Footer from './header/Footer'

interface Props {
    children: ReactElement
}

const Router_Layout = ({children}: Props) => {
  return (
    <>
    <Header/>
    <ButtonHeader/>
    {children}
    <Footer/>

    </>
  )
}

export default Router_Layout