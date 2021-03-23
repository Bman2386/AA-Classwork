print("** Doubling Penny **")

# How many times would a penny need to double to generate a million dollars?
count = 0
total = 0

# STEP 2: Write the while loop
while total < 1000000:
  if total == 0:
  	total += 0.01
  else:
  	total *= 2
  count += 1


print('Double', count, 'times')

# How much money has been generated at that point?
print('${:,}'.format(total))

'''
This is a simple script to practice creating a few functions in Python

Please follow the steps outlined below.
'''

# STEP 1 - Write a function named `welcome` that prints a welcome message

def welcome():
  print('Welcome')
# Step 2 - Write a function named `calc_sum` that
#   - takes in two numbers and
#   - returns their sum

def calc_sum(num1, num2):
  return num1 + num2
# DO NOT EDIT - The guts of the program
welcome()
print(calc_sum(1,2), 'is 3?', calc_sum(1,2) == 3)
print(calc_sum(-10,-2), 'is -12?', calc_sum(-10,-2) == -12)
print(calc_sum(1.1,-2.2), 'is -1.1?', calc_sum(1.1,-2.2) == -1.1)
print(calc_sum('a','b'), 'is ab?', calc_sum('a','b') == 'ab')
print(calc_sum([1,2],[3,4]), 'is [1,2,3,4]?',
      calc_sum([1,2],[3,4]) == [1,2,3,4])

# Define your function "addition" here
addition = lambda num1, num2: num1 + num2


print(addition(2, 3))   #> 5
print(addition(-3, -6)) #> -9
print(addition(7, 3))   #> 10

# also this 
# def addition(x, y):
#   return x+y

# Write your function, here.
is_same_num = lambda num1, num2: num1 == num2


print(is_same_num(4, 8))   #>  False
print(is_same_num(2, 2))   #>  True
print(is_same_num(2, "2")) #>  False

# also
# def is_same_num(num1, num2):
#   return num1 == num2

def min2sec(num):
  return num*60

print(min2sec(5)) #> 300
print(min2sec(3)) #> 180
print(min2sec(2)) #> 120

#also
# min2sec = lambda n: n*60

def how_many_legs(chickens, cows, pigs):
  return chickens*2 + cows*4 + pigs*4

print(how_many_legs(2, 3, 5))    #> 36
print(how_many_legs(1, 2, 3))    #> 22
print(how_many_legs(5, 2, 8))    #> 50

increment = lambda n: n+1
print(increment(0))   #> 1
print(increment(9))   #> 10
print(increment(-3))  #> -2

#also
# def increment(n):
#   return n+1

def remainder(x,y):
  return x % y

print(remainder(1, 3))  #> 1
print(remainder(3, 4))  #> 3
print(remainder(5, 5))  #> 0
print(remainder(7, 2))  #> 1

# Write your function, here.

def string_int(s):
  return int(s)

print(string_int("6"))     #> 6
print(string_int("1000"))  #> 1000
print(string_int("12"))    #> 12

# Write your function, here.
def calculate_exponent(base,exp):
	return base**exp


print(calculate_exponent(5, 5))     #> 3125
print(calculate_exponent(10, 10))   #> 10000000000
print(calculate_exponent(3, 3))     #> 27

def And(p1, p2):
  return p1 and p2

print(And(True, False))    #> False
print(And(True, True))     #> True
print(And(False, True))    #> False
print(And(False, False))   #> False

# Write your function, here.
def long_burp(n):
  return 'Bu'+ ('r'*n) + 'p'
  


print(long_burp(3))  #> "Burrrp"
print(long_burp(5))  #> "Burrrrrp"
print(long_burp(9))  #> "Burrrrrrrrrp"

# # Write your function, here.
# def cap_space(string):
# 	ans = ""
#   i = 0
#   while i < len(string):
# 		if string[i].isupper():
#         	ans += " "
#         ans += string[i]
#     i += 1
#     return ans.lower()
      
            


print(cap_space("helloWorld"))     #> "hello world"
print(cap_space("iLoveMyTeapot"))  #> "i love my teapot"
print(cap_space("stayIndoors"))    #> "stay indoors"

# Write your function, here.
def concat_name(n1, n2):
  return n2 + ', ' + n1 


print(concat_name("First", "Last"))  #> "Last, First"
print(concat_name("John", "Doe"))    #> "Doe, John"
print(concat_name("Mary", "Jane"))   #> "Jane, Mary"

# Write your function, here.
def char_count(c, s):
  count = 0
  i = 0
  while i < len(s):
    if s[i] == c:
      count += 1
    i += 1
  return count



print(char_count("a", "App Academy"))         #> 1
print(char_count("c", "Chamber of Secrets"))  #> 1
print(char_count("b", "big fat bubble"))      #> 4

#also 
# def char_count(c, s):
#   count = 0
#   for x in s:
#     if c == x:
#       count += 1
#   return count

def factorial(n):
    ans = 1
    for i in range(1, n + 1):
        ans *= i
    return ans

print(factorial(1))     #> 1
print(factorial(8))     #> 40320
print(factorial(12))    #> 479001600


# Write your function, here.
def divisible_by_five(n):
  return n % 5 == 0


print(divisible_by_five(5))    #> True
print(divisible_by_five(-55))  #> True
print(divisible_by_five(37))   #> False

# Write your function, here.
def is_last_character_n(s):
  return s[-1] == 'n'


print(is_last_character_n("Aiden"))  #> True
print(is_last_character_n("Piet"))   #> False
print(is_last_character_n("Bert"))   #> False
print(is_last_character_n("Dean"))   #> True

# Write your function, here.

compare = lambda s1, s2: len(s1) == len(s2)

print(compare("AB", "CD"))              #> True
print(compare("ABC", "DE"))             #> False
print(compare("hello", "App Academy"))  #> False

# Write your function, here.
def is_valid_hex_code(s):
  if s[0] != '#' or len(s) != 7:
    return False
  i = 1
  while i < len(s):
    check = s[i].lower()
    if not check.isdigit():
      if check != 'a' and check != 'b' and check != 'c' and check != 'd' and check != 'e' and check != 'f':
        return False
    i += 1
  return True
      



print(is_valid_hex_code("#CD5C5C")) #> True
print(is_valid_hex_code("#EAECEE")) #> True
print(is_valid_hex_code("#eaecee")) #> True

print(is_valid_hex_code("#CD5C58C"))
# Prints False
# Length exceeds 6

print(is_valid_hex_code("#CD5C5Z"))
# Prints False
# Not all alphabetic characters in A-F

print(is_valid_hex_code("#CD5C&C"))
# Prints false
# Contains unacceptable character

print(is_valid_hex_code("CD5C5C"))
# Prints False
# Missing #
# Write your function, here.

def first_before_second(sentence, s1, s2):
  return sentence.rindex(s1) < sentence.index(s2)

## Here's another variant, with the while loop
# def first_before_second_while(s, first, second):
#     first_last_index = 0
#     second_first_index = 0
#     i = 0
#     while i < len(s):
#         if s[i] == first:
#             first_last_index = i
#         i += 1
#     i = 0
#     while i < len(s):
#         if s[i] == second:
#             second_first_index = i
#             break
#         i += 1
#     return first_last_index < second_first_index
    

print(first_before_second("a rabbit jumps joyfully", "a", "j"))
#> True
# Every instance of "a" occurs before every instance of "j".

print(first_before_second("knaves knew about waterfalls", "k", "w"))
#> True

print(first_before_second("happy birthday", "a", "y"))
#> False
# The "a" in "birthday" occurs after the "y" in "happy".

print(first_before_second("precarious kangaroos", "k", "a"))
#> False