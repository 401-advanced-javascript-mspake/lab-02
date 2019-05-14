
'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },

  stop: () => {
    return 'Stopping';
  }
})

function Car(name) {
  let car = Object.assign(
    {},
    {name},
    {wheels: 4},
    Vehicle()
  )
  return car;
}

function Motorcycle(name) {
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels: 2},
    {wheelie},
    Vehicle()
  )
  function wheelie() {return 'Wheee!'};
  return motorcycle;
}

module.exports = {Car, Motorcycle};