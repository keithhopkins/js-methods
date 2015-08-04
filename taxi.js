function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  this.passengers.push(passengerName);
};

Taxi.prototype.passengerCount = function(){
  return this.passengers.length;
};

Taxi.prototype.full = function() {
  return this.passengers.length===this.maxNumberOfPassengers;
};

Taxi.prototype.dropOffPassengers = function() {
  this.passengers = [];
};


// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
