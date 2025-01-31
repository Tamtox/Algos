class Lists {
    public static void Main() {
        // Create a list of integers
        List<int> numbers = new List<int>();
        // Add elements to the list
        numbers.Add(1);
        numbers.Add(2);
        numbers.Add(3);
        // Remove elements from the list
        numbers.Remove(2);
        // Iterate over the list
        foreach (int number in numbers) {
            Console.WriteLine(number);
        }
        // Sort the list
        numbers.Sort();
    }
}