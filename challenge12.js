const checkAir = function (samples, threshold) {
  let dirty = 0.0
  let n = samples.length
  for(let s of samples) {
    if(s === 'dirty') {
      dirty++
    }
  }
  return (dirty/n > threshold) ? 'Polluted' : 'Clean'
}