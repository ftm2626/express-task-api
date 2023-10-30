class CustomeApiError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg,statusCode) =>{
    return new CustomeApiError(msg,statusCode)
}

module.exports = {createCustomError,CustomeApiError }