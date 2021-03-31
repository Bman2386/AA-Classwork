# nums = [1,6,4.3,7,-8,9,2]
# sorted(nums)
# print(nums[4:])

# DO NOT EDIT - Starting with a simple lists of colors and numbers
colors = ["blue", "Green", "PURPLE", "blue-green", "sky blue"]
numbers = [2, 34, 8.5, -22.0, 33//4, 2**5]
print ('COLORS', colors)
print ('NUMBERS', numbers)

# 1. Print the total number of colors (length of the list)

print (len(colors)
# 2. Print the first color
print (colors[0])

# 3. Print the second and third colors
print (colors[1:2])

# 4. Print the last two colors
print (colors[-2][-1])

# There are two ways to declare dictionaries
# Create a dictionary and assign it to the d1 variable using the dict()
# constructor that has key/value pairs
#   key: "module", value: "Python 3"
#   key: "subject", value: "Dictionaries"
d1 = dict(module="Python 3", subject="Dictionaries")


# Create a dictionary and assign it to the d2 variable using the dictionary
# literal that has key/value pairs
#   key: "module", value: "Python 3"
#   key: "subject", value: "Dictionaries"
d2 = {"module": "Python 3", "subject": "Dictionaries"}


# Unlike JavaScript, the keys in Python dictionaries can be any kind of
# value, not just strings or Symbols. Add a key to d1 that is the number
# one with the value "one". Then, add another key to d1 that is a string
# that contains the character 1 and give it the value of "one". Then,
# print the dictionary to see what's in there.
d1[1] = "one"
d1["1"] = "one"
print(d1)


# Convert d1 to a list using the list() method. Then, print it. What gets
# put into the list?
d1_as_list = list(d1)
print(d1_as_list)


# Now, check that the following keys are in d1 by printing out if
# they do exist. The first one is there for you.
#  "module"    should be True
#  "subject"   should be True
#  "age"       should be False
#  1           should be True
#  "1"         should be True
#  "one"       should be False
#  True        should be False
print(f"'module' in d1? {'module' in d1}")

# DO NOT EDIT
odds = 1,3,5,7,9
evens = 2,4,6,8

# Step 1: Print out the result of adding evens to odds
print(odds+evens)

# Step 2: Print out the result of multiplying odds by three
print(odds*3)

# Step 3A: Use print to find out if odds is less than evens
print(odds < evens)

# Step 3B: Print out your explanation of why 3A has that result
print('First item in odds (1) is < first item in evens (2), so odds < evens.')

# Step 4: Print out the average of the numbers in evens using one line of code
print(sum(evens)/len(evens))

# Step 5A: Write a function 'minmaxmean' that accepts an iterable and
#         returns the minimum value, the maximum value and the average (mean)
def minmaxmean(iterable):
    return min(iterable), max(iterable), sum(iterable)/len(iterable)

# Step 5B: Use print to confirm you function is working on evens and odds
print(minmaxmean(evens))
print(minmaxmean(odds))

# BONUS: Call your function with a new tuple of your own creation
#        And print the results in a pretty way
(low,high,ave) = minmaxmean((22, 33, 44, 55, -7, 16, 123))
print('Average is {2} with range from {0} to {1}.'.format(low, high, ave))

print('THREE CASES FOR RANGE')
print('A) End Value')

# STEP 1: Change the zero in the range to 10
#         Notice how "10" is not included in the output
for i in range(10):
    print(i)

print('B) Start & End Values')

# STEP 2: Code a `for` loop to print numbers 5 through 9
for i in range(5,10):
    print(i)

print('C) Only Even Values')

# STEP 3: Print 0, 2, 4, 6 and 8 using a for loop
#         Hint - range can take a 3rd parameter for the step distance
for i in range(0,10,2):
    print(i)


def get_indices(l, var):
    a = []
    for i in range(0,len(l)):
        if l[i] == var:
            a.append(i)
    return a
