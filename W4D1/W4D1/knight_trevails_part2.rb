require_relative "./polytreenode.rb"
# require "byebug"
class KnightPathFinder 

  MOVES = [
    [-2, -1],
    [-2,  1],
    [-1, -2],
    [-1,  2],
    [ 1, -2],
    [ 1,  2],
    [ 2, -1],
    [ 2,  1]
  ]
     def self.valid_move?(move)
       move.each do |idx| 
        return false if idx > 7 
        return false if idx < 0 
       end 
       true 
     end 
     
    attr_reader :start_pos, :root_node
    attr_accessor :considered_pos
    
    def initialize(start_pos)

      @start_pos = start_pos 
      @root_node = PolyTreeNode.new(start_pos)
      @considered_pos = [start_pos]
    #   build_move_tree
    end 

    def new_move_positions(pos)
        arr = []
        MOVES.each do |move| 
           
          pos1, pos2 = move[0]+pos[0], move[1]+pos[1]
          new_pos = [pos1, pos2]
            if KnightPathFinder.valid_move?(new_pos) && !self.considered_pos.include?(new_pos)
                self.considered_pos << new_pos
                arr << new_pos
            end
        end  
         arr
    end 

    def build_move_tree 
     
        nodes = [root_node] 
     
        until nodes.empty?
        current_node = nodes.shift 
            new_move_positions(current_node.value).each do |pos|
         
                next_node = PolyTreeNode.new(pos)
                current_node.add_child(next_node)
                nodes << next_node 
           end
       end 
    end
# #Create an instance method #find_path(end_pos) to search for end_pos in the move tree. 
# You can use either dfs or bfs search methods from the PolyTreeNode exercises; 
# it doesn't matter. This should return the tree node instance containing end_pos.
       def find_path(end_pos)
        end_node = root_node.dfs(end_pos)
        trace_path(end_node).reverse.map(&:value) 
       end

       def trace_path(end_node)
        positions = []
        current_pos = end_node 
            until current_pos.nil?
            positions << current_pos
            current_pos = current_pos.parent
            end
        positions
       end
    # def print_children
    #     self.root_node.children.each do |child|
    #         p "test"
    #         p child.value 
    #     end
    # end
end 

# a = KnightPathFinder.new([0,0])
# # p a
# # # p a.new_move_positions([0,0])
# a.build_move_tree
# #  a.print_children

# p a.find_path([7,7])
kpf = KnightPathFinder.new([0, 0])
kpf.build_move_tree
kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
# p kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]
