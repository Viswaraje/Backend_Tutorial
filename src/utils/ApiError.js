
//in the future how api errors will be shown
class ApiError extends Error{



    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""

    ){

        //constructor overwrite
        super(message)//message is overwritten
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors


        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }



    }
}

export{ApiError}