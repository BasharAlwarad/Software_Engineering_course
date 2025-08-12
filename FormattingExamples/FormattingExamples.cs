using System;
using System.Globalization;

namespace FormattingExamples
{
    public static class FormattingExamplesDemo
    {
        public static void NumericFormatting()
        {
            Console.WriteLine("\n=== Numeric Formatting ===");
            
            double some_value = 1000D / 12.34D;
            Console.WriteLine($"Original value: {some_value}");
            Console.WriteLine(string.Format("Formatted ${0:0.0}", some_value));
            Console.WriteLine(string.Format("Formatted ${0:0.#}", some_value));
            Console.WriteLine(string.Format("Formatted ${0:0.000}", some_value));
        }

        public static void MoneyCultureInfo()
        {
            Console.WriteLine("\n=== Money Culture Info ===");
            
            double money = -10d / 3d;
            Console.WriteLine($"Original: {money}");
            Console.WriteLine(string.Format("-$10 / 3 = ${0:0.0}", money));
            Console.WriteLine($"C0: {money.ToString("C0")}");
            Console.WriteLine($"C1: {money.ToString("C1")}");
            Console.WriteLine($"C2: {money.ToString("C2")}");
            Console.WriteLine($"Current Culture: {money.ToString("C", CultureInfo.CurrentCulture)}");
            Console.WriteLine($"en-GB: {money.ToString("C", CultureInfo.CreateSpecificCulture("en-GB"))}");
        }
    }
}
