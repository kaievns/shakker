var $ = function(id) { return document.getElementById(id); };
var $E = function(tag) { return document.createElement(tag); };

var results = $('results');
var diffs = 0;
var tests = 0;

var rjs_time = 0;
var jqr_time = 0;

var record = function(test, rjs, jqr) {
  var diff = Math.round(jqr/rjs * 100);
  
  tests    ++;
  diffs    += diff;
  rjs_time += rjs;
  jqr_time += jqr;
  
  var result = $E('tr');
  results.appendChild(result);
  result.innerHTML = '<td>'+Tester.names[test]+'</td><td>'+rjs+'</td><td>'+jqr+'</td><td>'+diff+'</td>';
}

var calc_summary = function() {
  $('avg-diff').innerHTML = ''+Math.round(diffs/tests);
  
  var summary = $E('tr');
  results.appendChild(summary)
  summary.innerHTML = '<td>Total</td><td>'+rjs_time+'</td><td>'+jqr_time+'</td><td>'+Math.round(jqr_time/rjs_time*100)+'</td>';
};

var Tester = {
  start: function() {
    var rjs = rightjs_frame.Tests;
    var jqr = jquery_frame.Tests;
    
    var t, rjs_time, jqr_time, list;
    
    // resetting
    diffs = 0;
    tests = 0;
    rjs_time = 0;
    jqr_time = 0;
    results.innerHTML = '';
    rightjs_frame.document.body.innerHTML = '';
    jquery_frame.document.body.innerHTML = '';
    
    for (var test in rjs) {
      
      // running the test for RightJS
      list = rightjs_frame.document.getElementsByTagName('ul');
      t = new Date();
      
      this.drivers[test](rjs[test], list);
      
      rjs_time = new Date() - t;
      
      
      // running the test for jQuery
      list = jquery_frame.document.getElementsByTagName('ul');
      t = new Date();
      
      this.drivers[test](jqr[test], list);
      
      jqr_time = new Date() - t;
      
      record(test, rjs_time, jqr_time);
    }
    
    calc_summary();
  },
  
  names: {
    make:         "Elements building",
    find:         "Access an element by ID",
    bind:         "Bind an event listener",
    unbind:       "Remove event listener",
    attr:         "Grab an element attribute",
    style:        "Assign an element style",
    addClass:     "Assign css-class",
    removeClass:  "Remove css-class",
    update:       "Set new html content",
    insertAfter:  "Insert element after",
    insertBefore: "Insert element before",
    remove:       "Remove"
  },
  
  drivers: {
    make: function(test) {
      for (var i=0; i < 400; i++)
        test(i);
    },

    find: function(test) {
      for (var i=0; i < 400; i++)
        test(i);
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
    
    insertAfter: function(test, list) {
      var elements = [];
      for (var i=0; i < list.length; i++)
        elements.push(document.createElement('div'));
        
      test(list, elements);
    },
    
    insertBefore: function(test, list) {
      var elements = [];
      for (var i=0; i < list.length; i++)
        elements.push(document.createElement('div'));
        
      test(list, elements);
    },
    
    remove: function(test, list) {
      test(list);
    }
  }
};


$('starter').onclick = function() {
  Tester.start();
  return false;
};
