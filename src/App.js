import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import ListFiles from './listFiles/ListFiles'
import { Provider } from "react-redux";
import store from "./redux/store";

function App () {
  return (
    <div className='App'>
      <Container className='p-3'>
        <h5 className='header p-1'>React Test App</h5>
        <Container className='p-4 mb-4 bg-light rounded-3'>
          <Provider store={store}>
            <ListFiles />
          </Provider>,
        </Container>
      </Container>
    </div>
  )
}

export default App
