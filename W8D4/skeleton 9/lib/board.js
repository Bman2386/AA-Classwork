let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr[i] = new Array(8);
  }
  
  arr[3][4] = new Piece('black');
  arr[4][3] = new Piece('black');
  arr[3][3] = new Piece('white');
  arr[4][4] = new Piece('white');
  return arr;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  const [row, col] = pos;

  if ((row > 7 || col > 7 )|| (row< 0 || col < 0)) {
    return false;
  } else {
    return true;
  }
//  (pos === undefined) ? return false : return true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  const [row, col] = pos;
  
   if (!this.isValidPos(pos)) {
    throw Error( 'invalid position' );
   } else {
     return this.grid[row][col];
   }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.getPiece(pos) && this.getPiece(pos).color === color) {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return !!this.getPiece(pos);  
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  if (!piecesToFlip) {
    piecesToFlip = []; 
  } else { 
    piecesToFlip.push(pos);
  }
  let newPos = [pos[0] + dir[0], pos[1] + dir[1]];
  if (!this.isValidPos(newPos)) {
    return [];
  } else if (!this.isOccupied(newPos)) {
    return [];
  } else if (this.isMine(newPos, color)) {
    return piecesToFlip
    
  } else {
    return this._positionsToFlip(newPos, color, dir, piecesToFlip);

  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  }

   for (let i = 0; i < Board.DIRS.length; i ++) {
    const newFlips = this._positionsToFlip(pos, color, Board.DIRS[i]);
      if (newFlips.length) {
        return true;
     }
    }
    return false;
};
/*
[[n],[n],[n],[n],[n],[n],[n],[n]]
[[n],[n],[n],[n],[n],[n],[n],[n]]
[[n],[n],[n],[n],[n],[n],[n],[n]]
[[n],[n],[n],[W],[B],[n],[n],[n]]
[[n],[n],[n],[B],[W],[n],[n],[n]]
[[n],[n],[n],[n],[n],[n],[n],[n]]
[[n],[n],[n],[n],[n],[n],[n],[n]]
[[n],[n],[n],[n],[n],[n],[n],[n]]
*/
/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
 if (!this.validMove(pos, color)) {
  throw Error( 'invalid move')
 }
   let piecesToFlip = []
   for (i = 0; i < Board.DIRS.length; i++) {

    piecesToFlip = piecesToFlip.concat(
    this._positionsToFlip(pos, color, Board.DIRS[i]) || []
    );
   }
   for (i = 0; i < piecesToFlip.length; i++) {
     //flip piece, pop piece from array
     this.getPiece(piecesToFlip[i]).flip();
   }
 this.grid[pos[0]][pos[1]] = new Piece(color);
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  var newArr = [];
  for(let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (this.validMove([i,j], color)) {
        newArr.push(([i,j]));
      }
    }
  }
  return newArr
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length !== 0;
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return !this.hasMove("black") && !this.hasMove("white");
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  let showGrid = this.grid.map (el => el)
  
  for (let i = 0; i < 8; i++) {
   for (let j = 0; j < 8; j++) {
     if(!this.getPiece([i,j])) {
       showGrid.push(' |')
     }
   }
  }

  console.log(showGrid);
};
//   for (let i = 0; i < 8; i++) {
//     let rowString = " " + i + " |";

//     for (let j = 0; j < 8; j++) {
//       let pos = [i, j];
//       rowString +=
//         (this.getPiece(pos) ? this.getPiece(pos).toString() : ".");
//     }

//     console.log(rowString);
//   }
// };
// p grid[0], p grid[1]


module.exports = Board;
