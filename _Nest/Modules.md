- @Module() decorator provides metadata that Nest.js uses to organize the application structure.
- @Module({
    imports: [], // Import other modules here
    controllers: [UserController], // Declare controllers
    providers: [UserService], // Declare providers (services, custom factories, etc.)
    exports: [UserService], // Export providers to make them available in other modules
  })
- Types of modules:
  - Feature modules - are used to organize code. They are used to encapsulate a specific feature or domain of the application.
  - Root modules - is the entry point of the application. Each application has at least one root module.
  - Global modules - modules that are available application-wide. They are used to provide common services, utilities, etc.
    Use @Global() decorator to make a module global.
  - Shared modules - modules that export providers that are used by other modules.
    // user.module.ts
    @Module({
      providers: [UserService],
      exports: [UserService],
    })
    export class UserModule {}
- Dynamic modules - are used to create modules dynamically. They are used when the module configuration is dynamic or unknown at compile time.
  - Use @Module() decorator with a factory function that returns a module configuration object.
  - Use the register() method of the ModuleRef class to register
  ```ts
  @Module({})
  export class ConfigModule {
    static register(options: ConfigOptions): DynamicModule {
      return {
        module: ConfigModule,
        providers: [
          {
            provide: 'CONFIG_OPTIONS',
            useValue: options,
          },
        ],
      };
    }
  }
  // Usage
  @Module({
    imports: [ConfigModule.register({ env: 'production' })],
  })
  export class AppModule {}
  ```
- Module re-exporting - is used to re-export providers from other modules.
  @Module({
    imports: [UserModule],
    exports: [UserModule],
  })
  export class SharedModule {}
- Property based providers - are used to provide a provider based on a property value.
```ts
  @Module({
    providers: [
      {
        provide: 'API_KEY',
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => configService.apiKey,
      },
    ],
    exports: [`API_KEY`],
  })
  export class AppModule {}
```