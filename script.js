/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

'use strict';

var vowelsCount = 0;
var vowels = ['a', 'e', 'i', 'o', 'u'];

var str = 'Today is best day of my life';

// Write code here
vowelsCount = str.split('').reduce((result, item) => {
    return vowels.includes(item) ? result + 1 : result;
}, 0);

console.log(vowelsCount);
// 8
