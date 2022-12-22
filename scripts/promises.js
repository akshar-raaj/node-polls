const createPromise = (value) => {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

exports.createPromise = createPromise