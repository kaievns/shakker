/**
 * This is the common part of all the tests, it makes the actual test calls
 * perform the iterations, and stuff
 *
 * NOTE: this hash should have all the same keys as the actual tests
 *
 * Copyright (C) 2009 Nikolay V. Nemshilov
 */
var TestDrive = {
  make: function(test, length) {
    for (var i=0; i < length; i++)
      test('someid'+i);
  },

  find: function(test, length) {
    for (var i=0; i < length; i++)
      test('someid'+i);
  },

  bind: function(test, list) {
    test(list);
  },
  
  unbind: function(test, list) {
    test(list);
  },
  
  attr: function(test, list) {
    for (var i=0; i < 10; i++)
      test(list);
  },
  
  style: function(test, list) {
    test(list);
  },
  
  addClass: function(test, list) {
    test(list);
  },
  
  removeClass: function(test, list) {
    test(list);
  },
  
  update: function(test, list) {
    test(list);
  },
  
  insertTop: function(test, list, elements) {
    test(list, elements);
  },
  
  insertBottom: function(test, list, elements) {
    test(list, elements);
  },
  
  insertAfter: function(test, list, elements) {
    test(list, elements);
  },
  
  insertBefore: function(test, list, elements) {
    test(list, elements);
  },
  
  remove: function(test, list) {
    test(list);
  },
  
// util methods used in the process
  
  getElementsToInsert: function(size) {
    for (var list=[], i=0; i < size; i++)
      list.push(document.createElement('div'));
      
    return list;
  }
};