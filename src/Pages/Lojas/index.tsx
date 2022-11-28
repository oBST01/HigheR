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
        <Footer />
    </React.Fragment>
  )
}

export default Lojas