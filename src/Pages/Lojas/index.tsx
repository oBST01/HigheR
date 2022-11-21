import React from "react"

import Menu from "../../Components/Menu"
import Footer from "../../Components/Footer"
import About from "./Sections/About"
import Main from "./Sections/Main"
import Stores from "./Sections/Stores"

const Lojas = () => {
  return (
    <React.Fragment>
        <Menu />
        <Main />
        <About />
        <Stores />
        <Footer background="linear-gradient(180deg, #020202 23.37%, #074A79 100%)" />
    </React.Fragment>
  )
}

export default Lojas