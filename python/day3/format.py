shopping_list = ['bread','milk','eggs']
print(','.join(shopping_list))
#prints bread, milk, eggs

print('{:,}'.format(1234567890))
#prints '1,234,567,890'

# d = datetime.datetime(2020, 7, 4, 12, 15, 58)
# print('{:%Y-%m-%d %H:%M:%S}'.format(d))

# prints '2020-07-04 12:15:58'

points = 190
total = 220
print('Correct answers: {:.2%}'.format(points/total))

#prints Correct answers: 86.36%

width=8
print(' decimal      hex   binary')
print('-'*27)
for num in range(1,16):
    for base in 'dXb':
        print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')
    print()

# prints 
#  decimal      hex   binary
# ---------------------------
#        1        1        1
#        2        2       10
#        3        3       11
#        4        4      100
#        5        5      101
#        6        6      110
#        7        7      111
#        8        8     1000
#        9        9     1001
#       10        A     1010
#       11        B     1011
#       12        C     1100
#       13        D     1101
#       14        E     1110
#       15        F     1111