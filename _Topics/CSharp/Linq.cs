namespace ConsoleApp1;

public class Linq
{
    public static void LinqExample()
    {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        // Query syntax
        var result = from num in numbers
                     where num % 2 == 0
                     select num;
        foreach (var num in result)
        {
            Console.WriteLine(num);
        }
        // Method syntax
        var result1 = numbers.Where(num => num % 2 == 0).ToList();
        foreach (var num in result1)
        {
            Console.WriteLine(num);
        }
    }
}