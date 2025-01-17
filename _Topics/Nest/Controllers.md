- Controllers -  are responsible for handling incoming requests and returning responses to the client. They are the entry point for your application's HTTP routes.

```ts
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id') // Route parameters
  findAll(@Param('id') id: string) {
    return this.userService.findAll();
  }
  @Post() // Request body
  createUser(@Body() body: UserBody) {
    return this.userService.createUser(body);
  }
  @Get() // Query parameters
  listUsers(@Query() query: UserQuery) {
    return this.userService.listUsers(query);
  }
  @Get('profile') // Headers and cookies
  getProfile(@Headers() headers: Headers, @Cookies() cookies: Cookies) {
    return this.userService.getProfile(headers, cookies);
  }
  @Delete(':id') // Request and Response objects
  deleteUser(@Req() req: Request, @Res() res: Response) {
    res.status(200).send(this.userService.deleteUser(req.params.id));
  }
  @Put(':id') // Redirects
  updateUser(@Redirect() redirect: Redirect, @Param('id') id: string) {
    return redirect.redirect('/users/' + id);
  }
}
```