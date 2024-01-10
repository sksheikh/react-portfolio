import React from 'react'

import Classes from '../assets/css/layout.module.css'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <>
        {/* navbar */}
        <Navbar />

        {/* main section */}
        <main className={Classes.container}>
            {children}
        </main>
    </>
  )
}

export default Layout
