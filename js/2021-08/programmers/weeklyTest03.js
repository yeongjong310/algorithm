function rotate(board) {
  const newBoard = [];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (!newBoard[x]) newBoard[x] = [];
      newBoard[x][y] = board[board.length - 1 - y][x]
    }
  }
  return newBoard;
}

function isInBoundary(y, x, array) {
  if (y < array.length && y >= 0 && x < array[0].length && x >= 0) return true;
  return false;
}

function solution(gameBoard, table) {

  const getPiece = (y, x, array, visited) => {
    visited[y][x] = true;
  
    const queue = [[y, x]];
    const DIRECTION = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up

    const piecePuzzle = [[y, x]];

    let minY = y;
    let maxY = y;
    let minX = x;
    let maxX = x;

    while (queue.length) {
      const [curY, curX] = queue.shift();

      for (let i = 0; i < DIRECTION.length; i++) {
        const [directionY, directionX] = DIRECTION[i];

        const newY = curY + directionY;
        const newX = curX + directionX;

        if (!isInBoundary(newY, newX, array)) continue;

        if (visited[newY][newX] === true) continue;

        if (array[newY][newX] === 1) {
          queue.push([newY, newX]);
          piecePuzzle.push([newY, newX]);

          minY = Math.min(minY, newY);
          maxY = Math.max(maxY, newY);
          minX = Math.min(minX, newX);
          maxX = Math.max(maxX, newX);
        }

        visited[newY][newX] = true;
      }
    }

    const piece = [];
    piecePuzzle.forEach(([y, x]) => {
      if (!piece[y - minY]) piece[y - minY] = Array(maxX - minX + 1).fill(0);
      piece[y - minY][x - minX] = 1;
    });

    return piece;
  };

  const gameBoardSize = gameBoard.length;

  const boardVisited = Array.from({ length: gameBoardSize }, () => Array(gameBoardSize).fill(false));

  puzzleHoles = [];

  for (let y = 0; y < gameBoardSize; y++) {
    for (let x = 0; x < gameBoardSize; x++) {
      if (gameBoard[y][x] === 1 && boardVisited[y][x] === false) {
        puzzleHoles.push(getPiece(y, x, gameBoard, boardVisited));
      }  
    }
  }

  const tableSize = table.length;

  const tableVisited = Array.from({ length: tableSize }, () => Array(tableSize).fill(false));

  pieces = [];

  const isExistInArray = (piece, array3D) => {
    array3D: for (let i = 0; i < array3D.length; i++) {
      const array2D = array3D[i];
      let flag = true;
  
      if (array2D.length !== piece.length) continue;

      for (let j = 0; j < array2D.length; j++) {
        const array1D = array2D[j];
        const row = piece[j];
        
        if (array1D.length !== row.length) continue array3D;

        for (let k = 0; k < array1D.length; k++) {
          if (array1D[k] !== row[k]) {
            flag = false;
          };
        }

      }

      if (flag) return true;
    }

    return false;
  }

  for (let y = 0; y < tableSize; y++) {
    for (let x = 0; x < tableSize; x++) {
      if (table[y][x] === 1 && tableVisited[y][x] === false) {
        let piece = getPiece(y, x, table, tableVisited);

        for (let i = 0; i < 4; i++) {
          if (!isExistInArray(piece, pieces)) pieces.push(piece);

          piece = rotate(piece);
        }
      }  
    }
  }

  puzzleHoles.forEach(hole => {
    
  })

}

const game_board = [
  [1,1,0,0,1,0],
  [0,0,1,0,1,0],
  [0,1,1,0,0,1],
  [1,1,0,1,1,1],
  [1,0,0,0,1,0],
  [0,1,1,1,0,0]];

const table = [
  [1,0,0,1,1,0],
  [1,0,1,0,1,0],
  [0,1,1,0,1,1],
  [0,0,1,0,0,0],
  [1,1,0,1,1,0],
  [0,1,0,0,0,0]];

console.log(solution(game_board, table)); // 14
