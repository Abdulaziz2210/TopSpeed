import React from 'react'
import Page from './pages/page'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <div className='container px-4'>
        <Navbar/>
        <Page/>
      </div>
      <Footer/>
    </div>
  )
}

export default App