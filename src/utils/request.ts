export const request = (url, payload) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: payload
    })
      .then((reponse) => {
        resolve('success')
      })
      .catch((err) => {
        reject(err)
      })
  })
}
