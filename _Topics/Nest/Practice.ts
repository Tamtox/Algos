//
@Module({
  controllers: [],
  providers: [
    {
      provide: "TEST",
    },
  ],
  imports: [],
  exports: [],
})
export class AuthModule {}

@Injectable()
export class AuthService {}
