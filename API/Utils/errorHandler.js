function errorHandler(statusCode,message){
    const error = new Error()
    error.status = statusCode
    error.message = message
    return error
}

module.exports = errorHandler