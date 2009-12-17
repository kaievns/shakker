var Test = {
  _list: function() {
    var select = document.getElementsByTagName('ul'), list = [];
    for (var i=0; i < select.length; i++)
      list.push(select[i]);
      
    return list;
  },
  
  make: function(id) {
    var ul = document.createElement('ul');
    ul.id = id;
    ul.className = 'fromcode';
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    
    li1.innerHTML = 'one';
    li2.innerHTML = 'two';
    li3.innerHTML = 'three';
    
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    
    document.body.appendChild(ul);
  },

  find: function(id) {
    return document.getElementById(id);
  },

  bind: self.attachEvent ? function(list) {
    for (var i=0, l = list.length; i < l; i++) {
      list[i].attachEvent('onclick', function() {});
    }
  } : function(list) {
    for (var i=0, l = list.length; i < l; i++) {
      list[i].addEventListener('click', function() {}, false);
    }
  },
  
  unbind: self.attachEvent ? function(list) {
    for (var i=0, l = list.length; i < l; i++) {
      list[i].detachEvent('onclick', function() {});
    }
  } : function(list) {
    for (var i=0, l = list.length; i < l; i++) {
      list[i].removeEventListener('click', function() {}, false);
    }
  },
  
  attr: function(list) {
    for (var result = [], i=0, l = list.length; i < l; i++) {
      result[i] = list[i].id;
    }
  },
  
  style: function(list) {
    var style = { backgroundColor:"#ededed", color:"#fff" };
    for (var i=0, l = list.length; i < l; i++) {
      for (var key in style) {
        list[i].style[key] = style[key];
      }
    }
  },
  
  addClass: function(list) {
    var class_name = 'test-class';
    for (var i=0, l = list.length; i < l; i++) {
      var testee = ' '+list[i].className+' ';
      if (testee.indexOf(' '+class_name+' ') == -1) {
        list[i].className += ' ' + class_name;
      }
    }
  },
  
  removeClass: function(list) {
    var class_name = 'test-class', re = /(^|\s+)test\-class(\s+|$)/g;
    for (var i=0, l = list.length; i < l; i++) {
      list[i].className = list[i].className.replace(re, ' ');
    }
  },
  
  update: function(list) {
    for (var i=0, l = list.length; i < l; i++) {
      // TODO make the scripts extraction in here
      list[i].innerHTML = 'the text';
    }
  },
  
  insertBottom: function(list, elements) {
    for (var i=0, l = list.length; i < l; i++) {
      list[i].appendChild(elements[i]);
    }
  },
  
  insertTop: function(list, elements) {
    for (var i=0, l = list.length; i < l; i++) {
      if (list[i].firstChild)
        list[i].insertBefore(elements[i], list[i].firstChild);
      else
        list[i].appendChild(elements[i]);
    }
  },
  
  insertAfter: function(list, elements) {
    for (var i=0, l = list.length; i < l; i++) {
      if (list[i].nextSibling)
        list[i].parentNode.insertBefore(elements[i], list[i].nextSibling);
      else
        list[i].parentNode.appendChild(elements[i]);
    }
  },
  
  insertBefore: function(list, elements) {
    for (var i=0, l = list.length; i < l; i++) {
      list[i].parentNode.insertBefore(elements[i], list[i]);
    }
  },
  
  remove: function(list) {
    for (var i=0, l = list.length; i < l; i++) {
      list[i].parentNode.removeChild(list[i]);
    }
  }
};
