#require "byebug"

def my_min1(array)
    (0...array.length-1).each do |i| #O(n) * O(n) = O(n^2)
       (i+1...array.length).each do |j| #O(n)
            break if array[i] > array[j] #O(1)
            return array[i] if j == array.length-1 #O(1)
       end
    end
end

def my_min2(array)
    var = array.first #O(1)
    (0...array.length).each do |i| #O(n)
        var = array[i] if array[i] < var #O(1)
    end
    var
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min1(list)  # =>  -5

def largest_contiguous_subsum1(list)# O(n^3)
    sub_arr = []
    (0...list.length).each do |i| #O(n) * O(n) = O(n^2)
        (i...list.length).each do |j|
            sub_arr << list[i..j] #O(n)  sub_arr = [[5], [5,3], [5,3,-7], [3], [3,-7], [-7]]=> [[5], [8], [1], [3], [-4], [-7]]
        end
    end

    var = sub_arr.first.sum #O(n)
    sub_arr.each do |sub| #O(n)
        var = sub.sum if sub.sum > var #O(n)
    end
    var
end

def largest_contiguous_subsum2(list)
    current_sum = list.first #O(1)
    max_sum = list.first #O(1)   
    (1...list.length).each do |i| #O(n)
        current_sum < 0 ? current_sum = list[i] : current_sum += list[i] #O(1)
        max_sum = current_sum if current_sum > max_sum #O(1)
    end
    max_sum #O(1)
end

# debugger  
list = [5, 3, -7]
p largest_contiguous_subsum2(list) # => 8


list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum2(list) # => 8 (from [7, -6, 7])

list = [-5, -1, -3]
p largest_contiguous_subsum2(list) # => -1 (from [-1])






  