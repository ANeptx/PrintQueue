const logInfoApi = (error, message) => {
  console.log('********** Error **********')
  console.log('message', error.response ? error.response : error)
  throw new Error(message)
}

export { logInfoApi }
