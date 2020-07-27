require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark
  def initialize(board, mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    
  end
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