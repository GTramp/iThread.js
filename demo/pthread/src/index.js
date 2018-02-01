import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import PThead from './lib'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

PThead.async(() => {
  for (let index = 0; index < 5000; index++) {
    console.log(index)
  }
  return 'async'
})
  .then(resp => {
    console.log(resp)
  })
  .catch(error => {
    console.log(error)
  })

