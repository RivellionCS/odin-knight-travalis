function knightMoves(startPosition, endPosition) {
  // create graph of chessboard squares as [x, y] implicitly fomr start postition
  let i = startPosition[0];
  let j = startPosition[1];
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

  // function starts at the startPosition square
  // check every square connected to the startPosition square as knight movement L-shape
  // for every connected square we check if it's the endPostion if not we continue until the end position is reached
  // store the path being taken in an array
  // return the shortest array which is the one with the least amount of steps
  // incase of 2 or more equal arrays return the first one
}
