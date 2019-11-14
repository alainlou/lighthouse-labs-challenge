const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let price = 1 + distanceTraveled*0.25
  if(numberOfPeople >= 30) {
    price += 0.25
  }
  return "$" + price.toFixed(2)
}
