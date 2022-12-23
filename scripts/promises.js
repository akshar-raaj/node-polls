const createPromise = (value) => {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

const sayValue = function(value, milliSeconds) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(value)}, milliSeconds)
  })
  return promise
}

exports.createPromise = createPromise
exports.sayValue = sayValue