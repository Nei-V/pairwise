1. turning string with values separated by comma into array
I used this resource:
https://stackoverflow.com/questions/13272406/convert-string-with-commas-to-array

the first step is to split the string by the commas and then using maps to turn each item into a number

2. in this challenge you need a reduce inside the loop.

3. using reduce - moslty learned from MDN - usage of the currentIndex (the third argument of reduce) - this is the index of the current item. 
very important ! ! ! - if you give a start value for the reduce, it will run from index 0 of the array each time, so in this excerciese you have to check that the current index is different than the accumulator index. this is important (especialy) beacuse we are using reduce inside the loop. if you don't use start value for accumulator, the index of the current starts from 1, not 0. 

4. you can do a the reduce inside a foreach, but I finnaly understood the problem with the index only when I used the for loop. 