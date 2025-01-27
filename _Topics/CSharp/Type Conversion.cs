public class Type_Conversion
{
    public static void typeConversion()
    {
        int num = int.Parse("123");
        string str = num.ToString();
        string str1 = Convert.ToString(num);
        string str2 = num + "";
        float f = (float)num;
        double d = Convert.ToDouble(num);
        if (int.TryParse(str, out int intVal))
        {
            num = intVal;
        }
        else
        {
            Console.WriteLine("Invalid number");
        }
    }
}