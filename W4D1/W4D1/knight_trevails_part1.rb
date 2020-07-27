require_relative "./polytreenode.rb"
require "byebug"
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
#   def self.valid_moves(pos)
#     valid_moves = []

#     cur_x, cur_y = pos
#     MOVES.each do |(dx, dy)|
#       new_pos = [cur_x + dx, cur_y + dy]

#       if new_pos.all? { |coord| coord.between?(0, 7) }
#         valid_moves << new_pos
#       end
#     end

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
      #@board = Array.new(8) { Array.new(8, "_") }
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

    def build_move_tree #[1,2] => 
        #  self.root_node = PolyTreeNode.new(start_pos)
        nodes = [root_node] 
     
        until nodes.empty?
        current_node = nodes.shift 
            new_move_positions(current_node.value).each do |pos|
                #return true if pos == end_position
                next_node = PolyTreeNode.new(pos)
                current_node.add_child(next_node)
                nodes << next_node 
           end
       end 
    end 

    # def print_children
    #     self.root_node.children.each do |child|
    #         p "test"
    #         p child.value 
    #     end
    # end
end 

# a = KnightPathFinder.new([0,0])
# p a
# # p a.new_move_positions([0,0])
#  a.build_move_tree
#  a.print_children

