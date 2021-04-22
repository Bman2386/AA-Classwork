function getCheapestCost(rootNode) {
    // your code goes here
   var total = 0;
    
    function depthFirstSearch(node) {
      // a terminating condition
      if (node == null) {
        return;
      } 
      else if (node.children.length === 0) {
        return node.cost;
      }
      else {
        var minCost = MAX_INT;
        
        for child in node.children:
          var tempCost = depthFirstSearch(child)
          
          if (tempCost < minCost) {
            minCost = tempCost;
          }  
      }
      return minCost + node.cost;
    }
    
    depthFirstSearch(rootNode)
    return total;
    
  }
  
  /******************************************
   * Use the helper code below to implement *
   * and test your function above           *
   ******************************************/ 
  
  // Constructor to create a new Node
  //Like a class
  function Node(cost) {
    this.cost = cost;
    this.children = [];
  }
  
  
  /*
  rootnode.cost = 0
  rootnode.children = [Node(5),Node(3),Node(6)]
  
  
  Node(5).const = 5
  Node(5).children = [Node(4)]
  
  Bruteforce = add all paths, and return smallest path
  
  const paths = {
    'pathTotal' = [nodes],
    '9' = [Node(4), Node(5)]
  }
  
  
  Minimum cost from source to destination
  
  Tree Traversals
    1) depth First Search
       Data Structures: Stack
       Recursion
    2) breath First Search
       Data Structures: Queue
    
    function dfs(node) {
        # What will happen if the node is a null node
        
        # What will happen if the node is a leaf node // we have reached a dealership
        
        # We need to traverse their childrens
    }
  
  */