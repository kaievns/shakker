var Test = {
  _list: function() {
    return $('ul');
  },
  
  make: function(id) {
    $("<ul id='" + id + "' class='fromcode'></ul>")
			.append("<li>one</li>")
			.append("<li>two</li>")
			.append("<li>three</li>")
			.appendTo(document.body);
  },
  
  find: function(id) {
    return $('#'+id);
  },
  
  bind: function(list, callback) {
    list.bind('click', callback);
  },
  
  unbind: function(list, callback) {
    list.unbind('click', callback);
  },
  
  set: function(list, attrs) {
    for (var key in attrs) {
      list.attr(key, attrs[key]);
    }
  },
  
  get: function(list, attr) {
    list.map(function() { return this[attr]; });
  },
  
  style: function(list, style) {
    list.css(style);
  },
  
  addClass: function(list, class_name) {
    list.addClass(class_name);
  },
  
  removeClass: function(list, class_name) {
    list.removeClass(class_name);
  },
  
  update: function(list, content) {
    list.html(content);
  },
  
  insertBottom: function(list, elements) {
    list.each(function(i, item) {
      $(item).append(elements[i]);
    });
  },
  
  insertTop: function(list, elements) {
    list.each(function(i, item) {
      $(item).prepend(elements[i]);
    });
  },
  
  insertAfter: function(list, elements) {
    list.each(function(i, item) {
      $(item).after(elements[i]);
    });
  },
  
  insertBefore: function(list, elements) {
    list.each(function(i, item) {
      $(item).before(elements[i]);
    });
  },
  
  remove: function(list) {
    list.remove();
  }
};