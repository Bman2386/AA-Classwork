
def windowed_max_range(array, num)
    initial = array[0...num]
    max_range = initial.max - initial.min
    end_pos = array.length-(num-1)
    (1...end_pos).each do |i|
        window = array[i...i+num]
        current_max_range = window.max - window.min
        if current_max_range > max_range
            max_range = current_max_range
        end
    end
    max_range
end




p windowed_max_range([1, 0, 2, 5, 4, 8], 2) # 4  [4, 8]
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) # 5  [0, 2, 5]
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) # 6  [2, 5, 4, 8]
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) # 6  [3, 2, 5, 4, 8]

