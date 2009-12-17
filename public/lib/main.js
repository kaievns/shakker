/**
 * This is a small util library that handles the acutal tests
 * running, the data collecting, results building and stuff
 *
 * Copyright (C) 2009 Nikolay V. Nemshilov aka St.
 */

////////////////////////////////////////////////////////////
//
//   The tests definition section
//
////////////////////////////////////////////////////////////

var test_names = {
  make:          "Elements building",
  find:          "Access an element by ID",
  bind:          "Bind an event listener",
  unbind:        "Remove an event listener",
  attr:          "Grab an element attribute",
  style:         "Assign an element style",
  addClass:      "Add css-class",
  removeClass:   "Remove css-class",
  update:        "Set new html content",
  insertBottom:  "Insert element bottom",
  insertTop:     "Insert element on top",
  insertAfter:   "Insert element after",
  insertBefore:  "Insert element before",
  remove:        "Remove element"
};

var tests_without_list = 'make find';
var tests_with_insert  = 'insertBottom insertTop insertAfter insertBefore';

var elements_in_test   = 1000;


/////////////////////////////////////////////////////////////
//
//   Util methods section
//
/////////////////////////////////////////////////////////////
var $ = function(id) { return document.getElementById(id); };
var $E = function(tag) { return document.createElement(tag); };

var results = $('results');
var frameworks = [];
var frames = $('frames').getElementsByTagName('iframe');
for (var i=0; i < frames.length; i++) {
  frameworks.push(frames[i].id.substr(0, frames[i].id.length-6))
};

var build_result_row = function(name, key) {
  var tr = $E('tr');
  results.appendChild(tr);
  var td = $E('td');
  td.innerHTML = name;
  tr.appendChild(td)
  
  for (var i=0; i < frameworks.length; i++) {
    var td = $E('td');
    td.id = frameworks[i]+key+'_result';
    tr.appendChild(td);
  }
};
var rebuild_tests_table = function() {
  for (var key in test_names) {
    build_result_row(test_names[key], key);
  }
  build_result_row("Total:", 'total');
};
rebuild_tests_table();



/////////////////////////////////////////////////////////////
//
//   Results processing section
//
/////////////////////////////////////////////////////////////
var record_test  = function(framework, test, time) {
  $(framework+test+'_result').innerHTML = time || 1; // <- in case it took less than 1ms
};

var calc_summary = function() {
  var results = {};
  for (var i=0; i < frameworks.length; i++) {
    var framework = frameworks[i];
    var summary = 0;
    results[framework] = {};
    for (var key in test_names) {
      results[framework][key] = parseInt($(framework+key+'_result').innerHTML);
      summary += results[framework][key];
    }
    $(framework+'total_result').innerHTML = results[framework].total = summary;
  }
  
  calc_the_diffs(results);
};

var calc_the_diffs = function(result) {
  for (var name in result) {
    var diffs = 0, tests_num = 0;
    for (var test in result[name]) {
      diffs += result[name][test] / result[base_framework][test];
      tests_num ++;
    }
    $(name + '_avg_diff').innerHTML = Math.round(diffs/tests_num * 100) / 100;
    $(name + '_total_diff').innerHTML = Math.round(result[name].total / result[base_framework].total * 100) / 100;
  }
};


//////////////////////////////////////////////////////////////
//
//   The actual tests runner
//
//////////////////////////////////////////////////////////////
var test_keys = [];
for (var key in test_names)
  test_keys.push(key);

var testees_list = [];

var test_next_framework = function(test_name) {
  var framework = testees_list.shift();

  if (framework) {
    
    var frame = self[framework+'_frame'];
    var test   = frame.Test[test_name];
    var driver = frame.TestDrive[test_name];
    
    if (tests_without_list.indexOf(test_name) > -1) {
      time = new Date();
      driver(test, elements_in_test);
    } else {
      var list = frame.TestDrive.getElementsForProcessing();
      if (tests_with_insert.indexOf(test_name) > -1) {
        var inserts = frame.TestDrive.getElementsToInsert(elements_in_test);
        time = new Date();
        driver(test, list, inserts);
      } else {
        time = new Date();
        driver(test, list);
      }
    }
    record_test(framework, test_name, new Date() - time);
    
    test_next_framework(test_name);
  } else {
    window.setTimeout(run_next_test, 0);
  }
}

// initiates a test run (a horizontal row)
var run_next_test = function() {
  var test_name = test_keys.shift();
  
  if (test_name) {
    testees_list = [].concat(frameworks);
    test_next_framework(test_name);
  } else {
    calc_summary();
  }
}


$('starter').onclick = function() {
  run_next_test();
  return false;
};