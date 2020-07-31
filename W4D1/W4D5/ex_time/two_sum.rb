def bad_two_sum?(arr, target_sum)
    (0...arr.length).each do |i| #O(n) * O(n) = O(n^2)
        (i+1...arr.length).each do |i2| #O(n)
            if arr[i] + arr[i2] == target_sum
                return true
            end
        end
    end
    false
end

def okay_two_sum?(arr, target) #O(nlogn)
    sorted = arr.sort #O(nlogn)
    i = 0 #O(1)
    j = arr.length - 1 #O(1)
    while i < j #O(n)
        sum = sorted[i] + sorted[j]
        if sum == target
            return true
        elsif sum < target
            i += 1 
        else
            j -= 1
        end
    end
    false
end

def hash_map(arr, target)
    hash = Hash.new(false)

    arr.each do |ele|
        difference = target - ele
        if hash[difference] == true
            return true
        else
            hash[ele] = true
        end
    end 
    false
end


arr = [0, 1, 7, 5]
p hash_map(arr, 6) # => should be true
p hash_map(arr, 10) # => should be false