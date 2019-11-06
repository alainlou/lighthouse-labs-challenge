const isValid = (station) => {
  return station[1] >= 20 && (station[2] === "school" || station[2] === "community centre");
}

const chooseStations = (stations) => {
  return stations.filter(isValid).map(station => station[0]);
}
