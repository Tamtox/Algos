- Circular Dependency happens when classes depend on each other.

```ts
 import { forwardRef } from '@nestjs/common'
 @Injectable()
 export class CatsService {
   constructor(
     @Inject(forwardRef(() => CommonService))
     private commonService: CommonService,
   ) {}
 }
@Injectable()
 export class CommonService {
   constructor(
     @Inject(forwardRef(() => CatsService))
     private catsService: CatsService,
   ) {}
 }
```