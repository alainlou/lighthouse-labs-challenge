class Car {
  constructor(speed) {
    this.time = Date.now()
    this.speed = speed
  }
}

const carPassing = (cars, speed) => {
  let car = new Car(speed);
  cars.push(car);
  return cars;
}