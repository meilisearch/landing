import React from 'react'

import { Header, Footer } from 'blocks'

const Layout = ({ headerStyle, children }) => {
  return (
    <div>
      <Header style={headerStyle} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
