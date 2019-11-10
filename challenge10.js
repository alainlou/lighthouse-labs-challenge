const whereCanIPark = (spots, vehicle) => {
  for(let i = 0; i < spots.length; ++i) {
    for(let j = 0; j < spots[0].length; ++j) {
      if(
        (vehicle === 'small' && (spots[i][j] === 'R' || spots[i][j] === 'S')) 
        || (vehicle === 'regular' && spots[i][j] === 'R') 
        || (vehicle === 'motorcycle' && spots[i][j].charCodeAt() >= 65 && spots[i][j].charCodeAt() <= 90)
        )
      {
        return [j, i]
      }
    }
  }
  return false
}