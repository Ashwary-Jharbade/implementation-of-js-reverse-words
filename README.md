# implementation-of-js-reverse-words

#### Problem
##### Given a string that contains words seperated by digits(0-9). Reverse words in place
#### Algorithm

-	Initialize two variable reverseStr and resultStr of type string with empty string
-	Loop over the characaters of string 'str' passed as a function parameter
-	Loop starts with iterator i at zero index of str
	-	Check if character is a number or end of string
		-	If no
			-	Concate the character with reverseStr variable value
		-	If yes
			-	Reverse the value of reverseStr variable
			-	Concate reverseStr with number
			-	Concate the final result of reverseStr into resultStr variable.
			-	Now assign reverseStr to a empty string
	Loop end
-	Return resultStr