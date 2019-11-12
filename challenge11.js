const busTimes = buses => {
  for(let bus in buses) {
    buses[bus] = buses[bus].distance/buses[bus].speed
  }
  return buses
}
