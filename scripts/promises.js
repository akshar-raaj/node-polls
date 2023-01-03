const createPromise = (value) => {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

const sayValue = function(value, milliSeconds) {
  // Resolves the value after x milliseconds

  const executor = function (resolve, reject) {
    const callback = function () {
      if (value.length <= 5) {
        resolve(value)
      }
      else {
        reject(new Error(value))
      }
    }
    setTimeout(callback, milliSeconds)
  }
  const promise = new Promise(executor)
  return promise
}

const invokeSayValue = function (value) {
  let p = sayValue(value, 5000)
  const success = function (data) {
    console.log(data)
  }
  const failure = function (error) {
    console.log(error)
  }
  p.then(success, failure)
}

exports.createPromise = createPromise
exports.sayValue = sayValue
exports.invokeSayValue = invokeSayValue