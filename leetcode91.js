/*

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.
*/

function numDecodings(s) {
    //edge cases
    if (s == null || s.length === 0) return 0;
    if (s[0] === '0') return 0;
  
    //table initialization
    const table = new Array(s.length + 1).fill(0);
    //base case
    table[0] = 1;
    table[1] = 1;
  
    //Loop and fill rest of the table
    for (let i = 2; i <= s.length; i++) {
      const oneDigit = Number(s.slice(i - 1, i));
      const twoDigits = Number(s.slice(i - 2, i));
  
      if (oneDigit >= 1 && oneDigit <= 9) table[i] += table[i - 1];
      if (twoDigits >= 10 && twoDigits <= 26) table[i] += table[i - 2];
    }
  
    return table[s.length];
  }