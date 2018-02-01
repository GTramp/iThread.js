/*
 * @Author: command
 * @Date: 2018-02-01 12:48:22
 * @Last Modified by: command
 * @Last Modified time: 2018-02-01 14:09:04
 */

/**
 * 异步执行函数
 *
 * @param {function} func
 */
function async(func) {
  if (!window.Worker) {
    console.error("Your browser doesn't support Webworker...")
    return
  }

  return new Promise(function(reslove, reject) {
    // webworker id
    const identifier = new Date().getTime().toString()
    //  blob string
    const script = `
          const _func = ${func.toString()}
          onmessage = function(resp){
          console.info(":: webworker start (id: ${identifier})")
          let _resoult = _func()
          postMessage(_resoult)}
      `
    // 创建 blob
    const blob = new Blob([script], { type: 'text/javascript' })
    // 创建Url
    const url = URL.createObjectURL(blob)
    // 创建 web worker
    let worker = new Worker(url)
    // revokeObjectURL
    URL.revokeObjectURL(url)

    // 监听 onmessage
    worker.onmessage = function(resp) {
      reslove(resp.data)
      console.info(`:: webworker end (id: ${identifier})`)
      // 停止 web worker
      worker.terminate()
      worker = null
    }

    // 监听 onerror
    worker.onerror = function(error) {
      // 回调error
      reject(error)
    }
    // 开始执行
    worker.postMessage('start')
  })
}

export default {
  async: async
}
