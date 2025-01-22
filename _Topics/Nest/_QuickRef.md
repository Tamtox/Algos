// Middleware : NestMiddleware - use(req: Request, res: Response, next: NextFunction)
// Interceptor : NestInterceptor - intercept(context: ExecutionContext, next: CallHandler): Observable<any>
// Pipe : PipeTransform - transform(value: any, metadata: ArgumentMetadata): any
// Guard : CanActivate - canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>
// Exception Filter : ExceptionFilter - catch(exception: any, host: ArgumentsHost)
```ts
// Modules
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
class AppModule extends NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
// Controllers
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get(':id')
  findOne(@Param('id') id: string): Cat {
    return this.catsService.findOne(id);
  }
  @Post()
  create(@Body() createCatDto: CreateCatDto): Cat {
    return this.catsService.create(createCatDto);
  }
}
```