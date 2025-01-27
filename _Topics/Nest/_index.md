### Interfaces:
  - CanActivate - used in guards
  ```typescript
  export interface Guard extends CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
  }
  ```
  - NestMiddleware - used in middleware
  ```typescript
  export interface AuthMiddleware extends NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
  }
  ```
  - ExceptionFilter - used in exception filters
  ```typescript
  export interface HttpExceptionFilter extends ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
  }
  ```
  - PipeTransform - used in pipes
  - NestInterceptor - used in interceptors