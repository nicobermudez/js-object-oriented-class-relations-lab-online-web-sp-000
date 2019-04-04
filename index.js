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
  constructor(name, driver, trip) {
    this.id = ++passengerId
    this.name = name
    if(driver) {
      this.driverId = driver.id
    }
    if(trip) {
      this.tripId = trip.id
    }
    store.passengers.push(this)
  }
  setTrip(trip) {
    this.tripId = trip.id
  }
  trip() {
    return store.trips.find(function(trip) {
      return trip.id === this.tripId
    }.bind(this))
  }

}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if(driver) {
      this.driverId = driver.id
    }
    if(passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  setDriver(driver) {
    this.driverId = driver.id
  }
  setPassenger(passenger) {
    this.passengerId = passenger.id
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
