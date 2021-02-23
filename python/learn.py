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
# print(true && false) creates syntax error even though python still uses &&, ||, and !

print (2 == 2.0)    # => True
print (2 is 2.0)    # => False