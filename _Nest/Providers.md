- Provider is a dependency injection system that allows you to inject dependencies into your application. It is a way to provide a service to other parts of the application. Examples: services, guards, interceptors, etc.
- @Injectable() decorator is used to define a provider. It tells Nest.js that the class is a provider and should be managed by the Nest.js dependency injection container.
- Optional Provider - a provider that is not required to be injected. It is created when needed.
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
- Property based injection 
  @Injectable()
  export class HttpService<T> {
    @Inject('HTTP_OPTIONS')
    private readonly httpClient: T;
  }