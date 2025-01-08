- Nest comes with a built-in text-based logger which is used during application bootstrapping and several other circumstances such as displaying caught exceptions (i.e., system logging). This functionality is provided via the Logger class in the @nestjs/common package. You can fully control the behavior of the logging system, including any of the following:

```typescript
import { LoggerService, Injectable } from '@nestjs/common';

@Injectable()
export class MyLogger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {}
  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, ...optionalParams: any[]) {}
  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {}
  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {}
  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {}
  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {}
}
const app = await NestFactory.create(AppModule, {
  logger: new MyLogger(),
});
await app.listen(process.env.PORT ?? 3000);

```