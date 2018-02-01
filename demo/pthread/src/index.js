import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Thread from 'ithread.js'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

Thread.async(() => {
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

