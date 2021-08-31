function rotate(array) {
  const newArray = [];

  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[0].length; x++) {
      if (!newArray[x]) newArray[x] = [];
      array[x][y] = array[array.length - 1 - y][x];
    }
  }

  return newArray;
}

function isInBoundary(x, y, array) {
  return x < array[0].length && x >= 0 && y < array.length && y >= 0;
}

const getPiece = (baseCoordinate, board, searchElement = 0) => {
  const DIRECTION = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up

  const queue = [baseCoordinate];
  const pieceCoordinate = [baseCoordinate];

  const [x, y] = baseCoordinate;

  let minY = y;
  let maxY = y;
  let minX = x;
  let maxX = x;

  board[y][x] = -1;

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < DIRECTION.length; i++) {
      const [directionX, directionY] = DIRECTION[i];

      const newX = curX + directionX;
      const newY = curY + directionY;

      if (!isInBoundary(newX, newY, board) || board[newY][newX] === -1) continue;

      if (board[newY][newX] === searchElement) {
        queue.push([newX, newY]);
        pieceCoordinate.push([newX, newY]);

        minX = Math.min(minX, newX);
        maxX = Math.max(maxX, newX);
        minY = Math.min(minY, newY);
        maxY = Math.max(maxY, newY);
      }

      board[newY][newX] = -1;
    }
  }

  const piece = [];

  pieceCoordinate.forEach(([x, y]) => {
    if (!piece[y - minY]) piece[y - minY] = Array(maxX - minX + 1).fill(0);
    piece[y - minY][x - minX] = 1;
  });

  return piece;
};

function isFitPieceInHole(piece4ways, hole) {
  // eslint-disable-next-line no-labels
  for (let i = 0; i < piece4ways.length; i++) {
    const piece = piece4ways[i];

    piece.length === hole.length
    && piece.every((a, i) => {
      const b = hole[i];
      return a[0] === b[0] && a[1] === b[1];
    });
    // for (let y = 0; y < piece.length; y++) {
    //   const pieceRow = piece[y];
    //   const holeRow = hole[y];

    //   if (pieceRow.length !== holeRow.length) continue outer;

    //   for (let x = 0; x < pieceRow.length; x++) {
    //     if (pieceRow[x] !== holeRow[x]) continue outer;
    //   }
    // }

    return true;
  }

  return false;
}

function solution(gameBoard, table) {
  const size = gameBoard.length;

  const puzzleHoles = [];

  const HOLE_NUMBER = 0;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (gameBoard[y][x] === HOLE_NUMBER) {
        puzzleHoles.push(getPiece([x, y], gameBoard, HOLE_NUMBER));
      }
    }
  }

  const pieces = [];

  const PIECE_NUMBER = 1;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (table[y][x] === PIECE_NUMBER) {
        const piece4ways = [getPiece([x, y], table, PIECE_NUMBER)];

        for (let i = 0; i < 3; i++) {
          const rotatedPiece = rotate(piece4ways[piece4ways.length - 1]);
          piece4ways.push(rotatedPiece);
        }

        pieces.push(piece4ways);
      }
    }
  }

  let answer = 0;
  // eslint-disable-next-line no-labels
  outer: while (puzzleHoles.length) {
    const hole = puzzleHoles.shift();

    for (let i = 0; i < pieces.length; i++) {
      const piece4ways = pieces[i];

      if (isFitPieceInHole(piece4ways, hole)) {
        hole.forEach(row => {
          row.forEach(element => {
            if (element === 1) answer++;
          });
        })
        pieces.splice(pieces.indexOf(piece4ways), 1);
        continue outer;
      }
    }
  }

  return answer;
}

const gameBoard = [
  [1, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1],
  [1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0]];

const table = [
  [1, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0]];

console.log(solution(gameBoard, table)); // 14

