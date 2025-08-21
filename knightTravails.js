function knightMoves(startPosition, endPosition) {
  // a queue to store the positions of the knight
  let queue = [];
  // push the end position into the queue
  queue.push(startPosition);

  while (queue.length > 0) {
    let currentPosition = queue.shift();
    // create graph of chessboard squares as [x, y] implicitly from start currentPostition
    let i = currentPosition[0];
    let j = currentPosition[1];
    const neighbours = [
      [i + 1, j + 2],
      [i + 1, j - 2],
      [i + 2, j + 1],
      [i + 2, j - 1],
      [i - 1, j + 2],
      [i - 1, j - 2],
      [i - 2, j + 1],
      [i - 2, j - 1],
    ];

    // remove any position where i or j is either greater than 7 or less than 0
    neighbours.forEach((item, index) => {
      if (item[0] < 0 || item[0] > 7 || item[1] < 0 || item[1] > 7) {
        neighbours.splice(index, 1);
      }
    });

    // remove any positions that have already been visited
    neighbours.forEach((item, index) => {
      if (checkVisited[item[0]][item[1]] === true) {
        neighbours.splice(index, 1);
      }
    });
  }

  // function starts at the startPosition square
  // check every square connected to the startPosition square as knight movement L-shape
  // for every connected square we check if it's the endPostion if not we continue until the end position is reached
  // store the path being taken in an array
  // return the shortest array which is the one with the least amount of steps
  // incase of 2 or more equal arrays return the first one
}
