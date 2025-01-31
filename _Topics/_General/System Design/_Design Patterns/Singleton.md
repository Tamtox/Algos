```ts
// Singleton Implementation in Typescript
class Singleton {
  private static instance: Singleton;

  private constructor() {
    // private constructor to prevent instantiation
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
```

```cs
// Singleton Implementation in C#
public class Singleton
{
    private static Singleton instance;
    private Singleton()
    {
        // private constructor to prevent instantiation
    }
    public static Singleton Instance
    {
        get
        {
            if (instance == null)
            {
                instance = new Singleton();
            }
            return instance;
        }
    }
}
```
```