import React from 'react'
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Nav/>
      {props.children}
      <Footer/>
    </React.Fragment>
  )
}

export default Layout
