export default class BaseException extends Error {
    constructor(message: string,protected code?:string){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}