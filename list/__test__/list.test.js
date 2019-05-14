'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');


describe('List Data Structure', () => {
  function prepopulatedStuff() {
    let newList = new List();
    newList.push('a');
    newList.push('b');
    newList.push('c');
    return newList;
  }


  it('starts with a length of 0 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops the last element off the end of the data set', () => {
    let toPop = prepopulatedStuff();
    toPop.pop();
    expect(toPop.length).toEqual(2);
  });

  it('poping off an element returns the value of that element', () => {
    expect(prepopulatedStuff().pop()).toEqual('c');
  });

});
