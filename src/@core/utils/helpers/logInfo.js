const logInfoApi = (error, message) => {
  console.error(`********** Error from function ${message} **********`)
  console.warn(error.response ? error.response : error)
}

export { logInfoApi }
