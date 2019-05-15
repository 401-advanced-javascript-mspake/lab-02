'use strict';


function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

/**
 * // Remove an item from the beginning of the list and return it's value
 * @returns {*}
 */
List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  for (let i = 0; i < this.length; i++) {
    this.data[i] = this.data[i + 1];
  }
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function(newElement) {
  for(let i = this.length; i > 0; i--) {
    this.data[i] = this.data[i - 1];
  }
  this.data[0] = newElement;
  this.length++;
};

List.prototype.forEach = function(callback) {
  if(typeof callback === 'function') {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i]);
    }
    return true;
  }
  else throw new Error;
};

module.exports = List;
