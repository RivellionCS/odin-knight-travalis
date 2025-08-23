function knightMoves(startPosition, endPosition) {
  // if the start and end are the same
  if (
    startPosition[0] === endPosition[0] &&
    startPosition[1] === endPosition[1]
  ) {
    console.log(
      `Your knight will take 0 steps to go from ${startPosition} to ${endPosition}.`
    );
    return;
  }

  // an array to check distance and the predecessor
  let bfsArray = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => Array.from({ length: 2 }, () => null))
  );
  // variable to store the final position when its reached
  let finalPosition = null;
  // set the distance of the end position to 0
  bfsArray[endPosition[0]][endPosition[1]][0] = 0;
  // a queue to store the positions of the knight
  let queue = [];
  // push the end position into the queue
  queue.push(endPosition);

  while (
    queue.length > 0 &&
    bfsArray[startPosition[0]][startPosition[1]][0] === null
  ) {
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

    // only keep positions where i or j is either greater than or equal 0
    // or less than or equal to 7
    const neighboursInRange = neighbours.filter(
      (item) => item[0] <= 7 && item[0] >= 0 && item[1] <= 7 && item[1] >= 0
    );

    // remove any positions that have already been visited
    const neighboursUnvisited = neighboursInRange.filter(
      (item) => bfsArray[item[0]][item[1]][0] === null
    );

    // set the distance and predecessor for every neighbour
    // and push it into the queue and store if the position
    // is the start position in the lastPosition variable
    neighboursUnvisited.forEach((item) => {
      bfsArray[item[0]][item[1]][0] =
        1 + bfsArray[currentPosition[0]][currentPosition[1]][0];
      bfsArray[item[0]][item[1]][1] = currentPosition;
      queue.push(item);
    });
  }

  console.log(
    `These are the steps your knight will take to go from ${startPosition} to ${endPosition}:`
  );
  finalPosition = startPosition;
  while (finalPosition !== endPosition) {
    console.log(finalPosition);
    finalPosition = bfsArray[finalPosition[0]][finalPosition[1]][1];
  }
  console.log(finalPosition);
}

knightMoves([3, 3], [4, 3]);
