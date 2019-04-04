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
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  drivers() {
    return this.trips.map(function(driver) {
      return trip.driver()
    })
  }
  trips() {
    return store.trips.filter(function(trip) {
      return trip.passengerId === this.id
    }.bind(this))
  }

}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }
  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId
    }.bind(this))
  }
  passenger() {
    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }
}
