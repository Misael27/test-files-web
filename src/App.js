import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import ListFiles from './listFiles/ListFiles'

function App () {
  return (
    <div className='App'>
      <Container className='p-3'>
        <h5 className='header p-1'>React Test App</h5>
        <Container className='p-4 mb-4 bg-light rounded-3'>
          <ListFiles />
        </Container>
      </Container>
    </div>
  )
}

export default App
