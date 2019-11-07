
const termTopics = (interviews) => {
  solution = [0, 0, 0]
  interviews.forEach((i) => {
    switch(i) {
      case 'smart city':
        solution[0]++
        break;
      case 'arts funding':
        solution[1]++
        break;
      case 'transportation':
        solution[2]++
        break;
    }
  })
  return solution
}
