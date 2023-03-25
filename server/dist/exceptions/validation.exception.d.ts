import { HttpException } from '@nestjs/common';
export declare class ValidationException extends HttpException {
    message: any;
    constructor(response: any);
}
