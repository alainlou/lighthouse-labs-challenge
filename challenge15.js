const finalPosition = (moves) => {
  let x = 0;
  let y = 0;
  for(let move of moves) {
    switch(move) {
      case 'north':
        ++y;
        break;
      case 'south':
        --y;
        break;
      case 'east':
        ++x;
        break;
      default:
        --x;
    }
  }
  return [x, y];
}
