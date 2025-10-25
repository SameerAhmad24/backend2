class ApiResponse{
    constructor(successCode, data, message = "Success"){
        this.statusCode = successCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}