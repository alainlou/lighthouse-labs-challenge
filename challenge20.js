const PI = 3.14159 

const sphereVolume = function (radius) {
  return 4/3*PI*Math.pow(radius, 3)
}

const coneVolume = function (radius, height) {
  return PI*Math.pow(radius, 2)*height/3
}

const prismVolume = function (height, width, depth) {
  return height*width*depth
}

const totalVolume = function (solids) {
  let total = 0
  for(let solid of solids) {
    switch(solid.type) {
      case 'sphere':
        total += sphereVolume(solid.radius)
        break;
      case 'cone':
        total += coneVolume(solid.radius, solid.height)
        break;
      default:
        total += prismVolume(solid.height, solid.width, solid.depth)
    } 
  }
  return total
}
