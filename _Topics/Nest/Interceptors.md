- An interceptor is a class annotated with the @Injectable() decorator and implements the NestInterceptor interface. An Interceptor is function that can be used to intercept incoming requests to a NestJS application and perform some sort of manipulation before the request is handled by the route handler. This can be useful for things like logging, authentication and so on.
```typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before...");
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const now = Date.now();
    return next
      .handle() // handle method returns an Observable
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
// Controller
@UseInterceptors(LoggingInterceptor)
export class CatsController {}
// Global
app.useGlobalInterceptors(new LoggingInterceptor());
// Module
@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})

```