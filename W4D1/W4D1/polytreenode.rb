
class PolyTreeNode

  attr_accessor :value, :children 
  attr_reader :parent
  
    def initialize(value = nil)
        @value = value
        @parent = nil 
        @children = []
    end

    def parent=(passed_node)
        
        if self.parent != nil
            self.parent.children.delete(self)
        end 
        
        @parent = passed_node
        passed_node.children << self if !self.parent.nil?
   
    
    end

    def add_child(child)
        child.parent = self
    end 

    def remove_child(child)
        raise "Node is not a child" if !self.children.include?(child)
        child.parent = nil
    end

    def dfs(target)
        return self if self.value == target 
        self.children.each do |child| 
            result = child.dfs(target)
            return result unless result == nil
        end 
        nil
    end 

    def bfs(target)
     
        queue = [self] 
        until queue.empty? 
            ele = queue.shift
           return ele if ele.value == target
           ele.children.each { |child| queue << child }
        end
        nil
    end
end

