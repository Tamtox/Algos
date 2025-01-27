namespace ConsoleApp1;

public class Basic_Types
{
    // Value types -------------------------------------------------------
    // Numeric
    sbyte a = 0; // byte is 8bit numeric type
    byte b = 0;
    short c = 0; // short is 16bit numeric type
    uint d = 0;
    float e = 0; 
    long f = 0; // long is 64bit numeric type
    double doub = 0; // double is 64bit numeric type
    decimal g = 0; // decimal is 128bit numeric type
    // Boolean
    bool h = true;
    // Char
    char i = 'a';
    // String
    string j = "Hello";
    // Reference types ---------------------------------------------------
    // Array
    int[] k = new int[5];
    int[] arr = { 1, 2, 3, 4, 5 };
    // List
    List<int> list = new(){1,2,3,4,5};
    // Dictionary
    Dictionary<int, string> dict = new() { {1, "asd"}, {2, "qwe"} };
    // Stack
    Stack<int> stack = new();
    // Queue
    Queue<int> queue = new();
    // HashSet
    HashSet<int> hashSet = new();
    // Delegate
    Func<int, int> n = x => x + 1;
    // Enum
    enum O { A, B, C }
    // Struct
    struct P { public int X; }
    // Nullables
    int? q = null;
    // Tuple
    (int, string) r = (1, "one");
    // Anonymous type
    var s = new { Name = "John", Age = 25 };
    // Dynamic
    dynamic t = 1;
    // Object
    object u = 1;
    // String interpolation
    string v = $"{1 + 1}";
    // Verbatim string
    string w = @"C:\temp";
    // Constants
    const int x = 1;
    // Readonly
    readonly int y = 1;
    // Default values
}