var $ = function(id) { return document.getElementById(id); };
var $E = function(tag) { return document.createElement(tag); };

var round = function(num) {
  return Math.round(num);
};

var results = $('results');

var tests    = 0;
var diffs_13 = 0;
var diffs_14 = 0;

var rjs_time = 0;
var j13_time = 0;
var j14_time = 0;

var record = function(test, rjs, j13, j14) {
  var diff_13 = round(j13/rjs * 100);
  var diff_14 = round(j14/rjs * 100);
  
  tests    ++;
  diffs_13 += diff_13;
  diffs_14 += diff_14;
  rjs_time += rjs;
  j13_time += j13;
  j14_time += j14;
  
  var result = $E('tr');
  results.appendChild(result);
  result.innerHTML = '<td>'+Tester.names[test]+
    '</td><td>'+rjs+'</td><td>'+j13+'</td><td>'+j14+
    '</td><td>'+diff_13+'</td><td>'+diff_14+'</td>';
}

var calc_summary = function() {
  $('avg-diff-13').innerHTML = ''+round(diffs_13/tests);
  $('avg-diff-14').innerHTML = ''+round(diffs_14/tests);
  
  var summary = $E('tr');
  results.appendChild(summary)
  summary.innerHTML = '<td>Total</td><td>'+rjs_time+' ms</td><td>'+j13_time+' ms</td><td>'+j14_time+
    ' ms</td><td>'+round(j13_time/rjs_time*100)+' %</td>'+
    '</td><td>'+round(j14_time/rjs_time*100)+' %</td>';
};

var Tester = {
  start: function() {
    var rjs = rightjs_frame.Tests;
    var j13 = jquery_13_frame.Tests;
    var j14 = jquery_14_frame.Tests;
    
    var t, rjs_time, j13_time, j14_time, list;
    
    // resetting
    tests = 0;
    diffs = 0;
    diffs_13 = 0;
    diffs_14 = 0;
    rjs_time = 0;
    j13_time = 0;
    j14_time = 0;
    results.innerHTML = '';
    rightjs_frame.document.body.innerHTML = '';
    jquery_13_frame.document.body.innerHTML = '';
    jquery_14_frame.document.body.innerHTML = '';
    
    for (var test in rjs) {
      
      // running the test for RightJS
      list = rightjs_frame.document.getElementsByTagName('ul');
      t = new Date();
      
      this.drivers[test](rjs[test], list);
      
      rjs_time = new Date() - t;
      
      
      // running the test for jQuery 1.3
      list = jquery_13_frame.document.getElementsByTagName('ul');
      t = new Date();
      
      this.drivers[test](j13[test], list);
      
      j13_time = new Date() - t;
      
      
      // running the test for jQuery 1.4
      list = jquery_14_frame.document.getElementsByTagName('ul');
      t = new Date();
      
      this.drivers[test](j14[test], list);
      
      j14_time = new Date() - t;
      
      
      // recording the test
      record(test, rjs_time, j13_time, j14_time);
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
    insertBottom: "Insert element bottom",
    insertTop:    "Insert element on top",
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
    
    insertTop: function(test, list) {
      var elements = [];
      for (var i=0; i < list.length; i++)
        elements.push(document.createElement('div'));
        
      test(list, elements);
    },
    
    insertBottom: function(test, list) {
      var elements = [];
      for (var i=0; i < list.length; i++)
        elements.push(document.createElement('div'));
        
      test(list, elements);
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
