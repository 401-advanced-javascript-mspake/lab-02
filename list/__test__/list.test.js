'use strict';

// These 2 should be interchangeable!
// They are!
const List = require('../list.js');
// const List = require('../list-constructor.js');


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

  it('forEach takes in a function', () => {
    const arr = prepopulatedStuff();
    expect(() => {arr.forEach( () => {} );}).not.toThrow();
    expect(() => {arr.forEach( 'frog' );}).toThrow();

  });

  it('forEach calls the callback function once for every element in the array', () => {
    const arr = prepopulatedStuff();
    const expected1 = ['new a', 'new b', 'new c'];
    const expected2 = [2, 2, 2];
    const test1 = new List();
    const test2 = new List();
    arr.forEach( val => test1.push(`new ${val}`));
    arr.forEach( () => test2.push( 4 / 2));
    expect(test1.data).toEqual(expect.objectContaining(expected1));
    expect(test2.data).toEqual(expect.objectContaining(expected2));

  });

});
