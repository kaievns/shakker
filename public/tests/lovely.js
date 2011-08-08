var $ = Lovely.module('dom');
var Element = $.Element;

var Test = {
  _list: function() {
    return $('ul');
  },

  make: function(id) {
    new Element('ul', {'class': 'fromcode', id: id})
      .insert(new Element('li', {html: 'one'}))
      .insert(new Element('li', {html: 'two'}))
      .insert(new Element('li', {html: 'three'}))
      .insertTo(document.body);
  },

  find: function(id) {
    return $('#'+ id);
  },

  bind: function(list, callback) {
    list.on('click', callback);
  },

  unbind: function(list, callback) {
    list.no('click', callback);
  },

  set: function(list, attrs) {
    for (var key in attrs) {
      list.attr(key, attrs[key]);
    }
  },

  get: function(list, attr) {
    list.map(function(i) { return i._[attr]});
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
    list.update(content);
  },

  insertBottom: function(list, elements) {
    list.forEach(function(item, i) {
      item.insert(elements[i]);
    });
  },

  insertTop: function(list, elements) {
    list.forEach(function(item, i) {
      item.insert(elements[i], 'top');
    });
  },

  insertAfter: function(list, elements) {
    list.forEach(function(item, i) {
      item.insert(elements[i], 'after');
    });
  },

  insertBefore: function(list, elements) {
    list.forEach(function(item, i) {
      item.insert(elements[i], 'before');
    });
  },

  remove: function(list) {
    list.forEach('remove');
  }
};
