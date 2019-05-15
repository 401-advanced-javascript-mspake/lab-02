'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  /**
   * // Remove an item from the beginning of the list and return it's value
   * @returns {*}
   */

  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  /**
   * // Add an item to the beginning of the list
   * @param item
   */
  unshift(newElement) {
    for(let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = newElement;
    this.length++;
  }

  /**
   * // Run a callback as many times as there are elements in the list
   * @param callback
   */
  forEach(callback) {
    if(typeof callback === 'function') {
      for (let i = 0; i < this.length; i++) {
        callback(this.data[i]);
      }
      return true;
    }
    else throw new Error;
  }
}

module.exports = List;
