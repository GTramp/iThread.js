# iThread.js
Promise Thread Webworker Async

Promise in webworker

```
npm install ithread.js --save

import Thread from 'ithread.js'

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