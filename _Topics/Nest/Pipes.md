- A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface. It is used to transform input data to a desired output. Pipes can be used to validate and transform data before it is passed to the route handler. Pipes can be synchronous or asynchronous.
```typescript
@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedValue = this.schema.parse(value);
    return parsedValue;
  }
}
```
- Apply a pipe to a route handler using the @UsePipes() decorator.
```typescript
@UsePipes(new ValidationPipe())
@Post()
create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```
- Apply a pipe to the entire application using the configure() method of the AppModule class.
```typescript
@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*').exclude({ path: 'cats', method: RequestMethod.GET });
  }
}
```
- Built-in pipes:
  - ValidationPipe: Uses class-validator to validate input data.
  - ParseIntPipe: Converts input data to an integer.
  - ParseBoolPipe: Converts input data to a boolean.
  - ParseArrayPipe: Converts input data to an array.
  - ParseUUIDPipe: Converts input data to a UUID.
  - DefaultValuePipe: Provides a default value for input data.
  - ParseEnumPipe: Converts input data to an enum value.