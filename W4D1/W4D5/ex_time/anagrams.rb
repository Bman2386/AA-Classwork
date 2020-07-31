def anagram?(str1, str2)
    words1 = str1.split("") #O(n)
    permutations = words1.permutation.to_a #O(n!)
    permutations.map! do |array|    #O(n^2)
        array.join("")  
    end
    permutations.include?(str2)#O(n)        
end

def second_anagram?(str1, str2) #O(n^2)
    str1.each_char do |char| # O(n)
        bad = str2.index(char) #O(n)
        if bad.nil? #O(1)
            return false #O(1)
        else
            str2 = str2[0...bad] + str2[bad+1..-1]  #O(n) + O(n) = O(2n) = O(n)
        end
    end
    str2.empty? #O(1)
end

def third_anagram?(str1, str2) #O(nlogn)
    str1.split("").sort == str2.split("").sort #O(n) + O(nlogn) + O(n) + O(nlogn)
end

def fourth_anagram?(str1, str2) #O(n)
    hash1 = Hash.new(0) #O(1)
  
    str1.each_char { |char| hash1[char] += 1 } #O(n)
    str2.each_char { |char| hash1[char] -= 1 }  #O(n)

    hash1.all? { |k, v| v == 0 }

    
end


p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true