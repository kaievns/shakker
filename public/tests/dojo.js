self.connections = []; // dojo needs connection objects to unbind event listeners
var Test = {
  _list: function() {
    return dojo.query("ul");
  },
  
  make: function(id) {
    var ul = dojo.create("ul", { "class": "fromcode", id: id }, document.body);
		
		dojo.create('li', {innerHTML: 'one'},   ul);
		dojo.create('li', {innerHTML: 'two'},   ul);
		dojo.create('li', {innerHTML: 'three'}, ul);
  },

  find: function(id) {
    return dojo.byId(id);
  },

  bind: function(list, callback) {
    list.forEach(function(element, i) {
      self.connections[i] = dojo.connect(element, 'click', callback);
    });
  },
  
  unbind: function(list, callback) {
    list.forEach(function(element, i) {
      dojo.disconnect(self.connections[i]);
    });
  },
  
  set: function(list, attrs) {
    for (var key in attrs) {
      list.attr(key, attrs[key]);
    }
  },
  
  get: function(list, attr) {
    list.attr(attr);
  },
  
  style: function(list, style) {
    list.style(style);
  },
  
  addClass: function(list, class_name) {
    list.addClass(class_name);
  },
  
  removeClass: function(list, class_name) {
    list.removeClass(class_name);
  },
  
  update: function(list, content) {
    list.addContent(content, content);
  },
  
  insertBottom: function(list, elements) {
    list.forEach(function(item, i) {
      dojo.place(elements[i], item)
    });
  },
  
  insertTop: function(list, elements) {
    list.forEach(function(item, i) {
      dojo.place(elements[i], item, 'first');
    });
  },
  
  insertAfter: function(list, elements) {
    list.forEach(function(item, i) {
      dojo.place(elements[i], item, 'after');
    });
  },
  
  insertBefore: function(list, elements) {
    list.forEach(function(item, i) {
      dojo.place(elements[i], item, 'before');
    });
  },
  
  remove: function(list) {
    list.forEach(dojo.destroy);
  }
};
