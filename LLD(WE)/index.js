

class vehicle {
  constructor(type, regNumber, color) {
    this._type = type;
    this._regNumber = regNumber;
    this._color = color;
  }
  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }
}


class Car extends vehicle {
  constructor(regNumber, color) {
    super("Car", regNumber, color);
  }
  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }
}

class Bike extends vehicle {
  constructor(regNumber, color) {
    super("Bike", regNumber, color);
  }
  get types() {
    return this._type;
  }

  set types(value) {
    this._type = value;
  }
}

class Truck extends vehicle {
  constructor(regNumber, color) {
    super("Truck", regNumber, color);
  }
}

class slot {
  constructor(type, number) {
    this.number = number;
    this.type = type;
    this._isBooked = false;
  }
  get isBooked() {
    return this._isBooked;
  }

  set isBooked(value) {
    this._isBooked = value;
  }
}



class parkingFloor {
  constructor(floornumber, maxFloor) {
    this.floornumber = floornumber;
    this._parkingspots = []; 

    for (let i = 0; i < maxFloor; i++) {
      if (i === 0) {
      
        this._parkingspots.push(new slot("Truck", i)); // i is slot number
      } else if (i === 1) {
    
        this._parkingspots.push(new slot("Bike", i)); // i is slot number
      } else {
     
        this._parkingspots.push(new slot("Car", i)); // i is slot number
      }
    }
  }

  get parkingspots() {
    return this._parkingspots;
  }
}


class ParkingLot {
  constructor(number) {
    this._floors = [];
    this._numberofFloors = number;

    for (let i = 0; i < number; i++) {
      this._floors[i] = new parkingFloor(i, number);
    }
  }

  get numberofFloors() {
    return this._numberofFloors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  parkVehicle(vehicle) {
    let slot = this.findSlot(vehicle.type);

    if (!slot) {
      console.log("No slots");
      return false;
    }

    this.bookslot(slot);
    let ticket = new Ticket(slot.floornumber, slot.slot.number);
    console.log("Ticket is issued:", ticket);
  }

  findSlot(type) {
  
    for (let i = 0; i < this._numberofFloors; i++) {
      for (let slot of this._floors[i]._parkingspots) {
      

        if (slot.type === type && !slot._isBooked) {
      
          return { floornumber: i, slot: slot };
        }
      }
    }
    return false;
  }
  bookslot(slot) {
    slot.slot._isBooked = true;
    console.log("Slot is booked", slot);
    return true;
  }
}

class Ticket {
  constructor(floornumber, slotnumber) {
    this.floornumber = floornumber;
    this.slotnumber = slotnumber;

    this.issuedAt = new Date();
  }
}

let p1 = new ParkingLot(3);


let b1 = new Bike("MH-4165", "Black");

p1.parkVehicle(b1);
