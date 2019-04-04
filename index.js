let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
let passengerId = 0
let tripId = 0


class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

}

class Passenger {
  constructor(name, driver) {
    this.id = ++passengerId
    this.name = name
    if(driver) {
      this.driverId = driver.id
    }
    store.passengers.push(this)
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if(driver) {
      this.driverId = driver.id
    }
    if(passenger) {
      this.driverId = driver.id
    }
    store.trips.push(this)
  }
}
