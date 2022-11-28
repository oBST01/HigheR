import React from "react"
import Footer from "../../Components/Footer"
import Menu from "../../Components/Menu"
import About from "./Sections/About"
import Main from "./Sections/Main"
import Products from "./Sections/Products"

const NFTs = () => {
  return (
    <React.Fragment>
        <Menu />
        <Main />
        <div style={{background: "#1D256D"}}>
            <About />
            <Products />
        </div>
        <Footer />
    </React.Fragment>
  )
}

export default NFTs