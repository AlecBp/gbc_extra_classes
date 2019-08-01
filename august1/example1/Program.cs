using System;

namespace example1
{
   class Program
   {
      static void Main(string[] args)
      {
         String line = "1234 ABXDEABCXEABCDXABCDE";
			String key = "ABCDEABCDEABCDEABCDE";
			string[] tokens;
			string stuAns;
			string stuId;
			int stuScore = 0;
			int[] questionCounter = new int[20];
			// Split
			tokens = line.Split(' ');
			stuId = tokens[0];
			stuAns = tokens[1];
			// Calculate score
			// +4 -1 0
			Console.WriteLine($"ID\t|\tSCORE");
         for (int i = 0; i < key.Length; i++)
         {
				if(key[i] == stuAns[i]) {
					stuScore += 4;
					questionCounter[i] += 1;
				} else if(key[i] == 'X') {
					// nothing
				} else {
					stuScore -= 1;
				}
         }
			Console.WriteLine($"{stuId}\t|\t{stuScore}");
			for(int i = 0;i<questionCounter.Length;i++) {
				Console.Write($"{i+1}:\t{questionCounter[i]}\t|\t");
				if((i+1)%10 == 0) {
					Console.WriteLine();
				}
			}
         Console.ReadKey();
      }
   }
}
