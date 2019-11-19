const pumpkinSpice = money => {
  let result = [0,0,0,0]
  while(money >= 5) {
    result[3] += 30
    result[0] += 1
    money -= 5
  }
  while(money >= 3) {
    result[3] += 15
    result[1] += 1
    money -= 3
  }
  result[3] += 3 * money
  result[2] = money
  return result
}
