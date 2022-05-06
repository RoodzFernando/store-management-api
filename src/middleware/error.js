const handleDuplicateErrors = (error, req, res, next) => {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    res.status(500).send({message: error.keyValue.email + ' is already taken'});
  }
  next(error)
}

const handleAuthorization = (error, req, res, next) => {
  res.status(401).send({message: "You are not allowed to perform this operation!"})
  next(error)
}

module.exports = {
  handleDuplicateErrors,
  handleAuthorization
}