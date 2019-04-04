let store = {users: [], passengers: [], trips: []}

let userId = 0
let passengerId = 0
let tripId = 0


class Driver {
  constructor(name) {
    this.id = ++userId
    this.name = name
  }

}

class Passenger {
  constructor(name) {
    this.name = name
  }
}

class Trip {
}
