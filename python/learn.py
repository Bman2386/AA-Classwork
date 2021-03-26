print("Hello World") # prints Hello World

def multi():
    """
    Use triple quotes fro multi-
    Line
    comments
    """
help(multi)

print("a1b2c3")
print("Jodi asked, 'What\'s up, Sam'")

print('''My instructions are very long so to make them
more readable in the code I am putting them on
more than one line. I can even include "quotes"
of any kind because they won't get confused with
the end of the string!''')

print(len("Spaghetti"))    # => 9

print("Spaghetti"[0])    # => S
print("Spaghetti"[4])    # => h

print("Spaghetti"[-1])    # => i
print("Spaghetti"[-4])    # => e

print("Spaghetti"[1:4])  # => pag
print("Spaghetti"[4:-1])    # => hett
print("Spaghetti"[4:4])  # => (empty string)

print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])    # => Spaghett

print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti

print("Spaghetti".index("h"))    # => 4
print("Spaghetti".index("t"))    # => 6

print("Spaghetti".count("h"))    # => 1
print("Spaghetti".count("t"))    # => 2
print("Spaghetti".count("s"))    # => 0
print('''We choose to go to the moon in this decade and do the other things,
not because they are easy, but because they are hard, because that goal will
serve to organize and measure the best of our energies and skills, because that
challenge is one that we are willing to accept, one we are unwilling to
postpone, and one which we intend to win, and the others, too.
'''.count('the '))                # => 4

print("$1" + ",000"*3)     # => 1,000,000,000

first_name = "Billy"
last_name = "Bob"
print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob    
print(f'Your name is {first_name} {last_name}') # => Your name is Billy Bob 

s = "Hello World"
print(s.upper())
print(s.lower())
print(s.islower())
print(s.isupper())
print(s.startswith("He"))
print(s.endswith("ld"))
print(s.split())
print(s.split("o"))

string = "--".join(["this", "will", "join"])
print(string)

# Method	Purpose
# isalpha()	returns True if the string consists only of letters and is not blank.
# isalnum()	returns True if the string consists only of letters and numbers and is not blank.
# isdecimal()	returns True if the string consists only of numeric characters and is not blank.
# isspace()	returns True if the string consists only of spaces, tabs, and newlines and is not blank.
# istitle()	returns True if the string consists only of words that begin with an uppercase letter followed by only lowercase letters.

# The assignment shorthand operators from JavaScript also work in Python:

# +=
# -=
# *=
# /=
# In fact, all the arithmetic operators have shorthand counterparts:

# **= (exponent)
# //= (integer division)
# %= (modulo)

# Null in Python is None
print(True and False) # prints false
# print(true && false) creates syntax error even though python still uses &&, ||, and !print(a == not b)    # => SyntaxError

print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
# Consider this cases where a = 4 and b = 5.
print(not a == b)     # => True
#print(a == not b)    # => SyntaxError
print (a == (not b))    # => False
# To take input from the user
num = int(input("Enter a number: "))

# By definition, prime numbers are greater than 1
if num > 1:
  # check for factors
  for i in range(2,num):
    # check for remainder in division (mod), if none it's not prime
    if (num % i) == 0:
      print(num,"is not a prime number")
      # find it's corresponding factor using integer division
      print(i,"times",num//i,"is",num)
      break
  else:
    print(num,"is prime")

else:
  print(num,"is not a prime number")

  if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
else:
    print('You are neither Monica nor a little kid.')

    spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam >= 5:
    break

#   It may help you to remember this order by thinking of arithmetic expressions and their order of evaluation.

# Negative signs (not) are applied first (part of each number)
# Multiplication and division (and) happen next
# Addition and subtraction (or) are the last step

a = 321
try:
    print(len(a))
except:
    print('Silently handle error here')

    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))

    def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("Cannot divide by zero")
    else:
        print("Result is", result)
    finally:
        print("Finally...")


# tuple of file names
files = ('one.txt', 'two.txt', 'three.txt')

# simple loop
for filename in files:
    try:
        # open the file in read mode
        f = open(filename, 'r')
    except OSError:
        # handle the case where file does not exist or permission is denied
        print('cannot open file', filename)
    else:
        # do stuff with the file object (f)
        print(filename, 'opened successfully')
        print('found', len(f.readlines()), 'lines')
        f.close()

# Try a number - nothing will print out
a = 321
if hasattr(a, '__len__'):
    print(len(a))

# Try a string - the length will print out (4 in this case)
b = "5555"
if hasattr(b, '__len__'):
    print(len(b))

# dictionary = object = hash
# python        JS       Ruby
example = {
    'string':'string of stuff',
    'list': ['this', 'is', 'a', 'list'],
    'thing':{
        'more': 'things',
        'in':'here'
    },
    'tuple':('immutable', 'list'),
}