import React from 'react'
import QuoraHeader from './QuoraHeader'
import './css/Quora.css'
 import Sidebar from './Sidebar'
import Feeds from './Feeds'
import Widget from './Widget'

function Quora() {
  return (
    <div className= 'quora'>
       <QuoraHeader />
       <div className='quora__contents'>
        <div className='quora__content'>
              <Sidebar /> 
              <Feeds /> 
             <Widget />
        </div>
       </div>
    </div>
  )
}

export default Quora
