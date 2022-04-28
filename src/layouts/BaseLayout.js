import React from 'react'

import { Header, Footer } from 'blocks'

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
