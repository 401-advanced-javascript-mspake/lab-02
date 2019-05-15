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

  it('pop removes the last element from the end of the data set', () => {
    let toPop = prepopulatedStuff();
    toPop.pop();
    expect(toPop.length).toEqual(2);
  });

  it('pop returns the value of the removed element', () => {
    expect(prepopulatedStuff().pop()).toEqual('c');
  });

  it('shift removes the first element from the data set', () => {
    let toShift = prepopulatedStuff();
    toShift.shift();
    expect(toShift.length).toEqual(2);
    expect(toShift.data[0]).toEqual('b');
  });

  it('shift returns the value of the removed element', () => {
    expect(prepopulatedStuff().shift()).toEqual('a');
  });

  it('unshift adds elements to the beginning of the data set', () => {
    let toUnshift = prepopulatedStuff();
    toUnshift.unshift('added');
    expect(toUnshift.data[0]).toEqual('added');
    expect(toUnshift.data[1]).toEqual('a');
    expect(toUnshift.length).toEqual(4);
  });

});
