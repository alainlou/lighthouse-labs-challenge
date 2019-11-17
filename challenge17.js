const judgeVegetable = (vegetables, metric) => {
  let best = vegetables[0]
  for(let i = 1; i < vegetables.length; i++) {
    if(vegetables[i][metric] > best[metric]) {
      best = vegetables[i]
    }
  }
  return best.submitter
}