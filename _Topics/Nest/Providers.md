- Provider is a dependency injection system that allows you to inject dependencies into your application. It is a way to provide a service to other parts of the application. Examples: services, guards, interceptors, etc.
- @Injectable() decorator is used to define a provider. It tells Nest.js that the class is a provider and should be managed by the Nest.js dependency injection container.
- Property based injection 
```typescript
  @Injectable(
    {
      durable // 
    }
  )
  export class HttpService<T> {
    // @Optional() - if the provider is not available, it will not throw an error
    @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient: T;
  }
```