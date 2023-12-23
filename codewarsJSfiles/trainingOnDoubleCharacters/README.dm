Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Declare a function name doubleChar that takes a single Parameter 'str'
Declare a empty string variable named word, this will be used to build the result.
create a 'for' loop  that iterates over each character in the input string str. 
  - declaring a var i = 0 will  Initializes the variable i to 0
  - i < str.length;: The loop will continue as long as i is less than the length of the input string str.
  -i++: Increments i after each iteration.
  -inside the loop the var 'word' will be equal to the 'var' word + str[i] + str[i] and it will do it until it meets the conditions of the loop.
and finally we return 'word'
