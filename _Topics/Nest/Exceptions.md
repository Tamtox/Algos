- Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. 
When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response.
- Default Nest Exceptions:
    BadRequestException
    UnauthorizedException
    NotFoundException
    ForbiddenException
    NotAcceptableException
    RequestTimeoutException
    ConflictException
    GoneException
    HttpVersionNotSupportedException
    PayloadTooLargeException
    UnsupportedMediaTypeException
    UnprocessableEntityException
    InternalServerErrorException
    NotImplementedException
    ImATeapotException
    MethodNotAllowedException
    BadGatewayException
    ServiceUnavailableException
    GatewayTimeoutException
    PreconditionFailedException

``` ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(responseBody.statusCode).json(responseBody);
    }
}
app.useGlobalFilters(new GlobalExceptionsFilter(app.get(HttpAdapterHost)));
```