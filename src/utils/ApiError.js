class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errrors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errrors=this.errrors
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.consturctor)
        }
    }

}
export{ApiError}