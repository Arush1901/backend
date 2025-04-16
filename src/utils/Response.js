class Response{
    constructor(statuscode,data,message ){
        this.statuscode=statuscode
        this.message=message
        this.success= statuscode<400
    }
}
export {Response}