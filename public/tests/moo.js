var Test = {
  _list: function() {
    return $$('ul');
  },
  
  make: function(id) {
    var ul = new Element('ul', {'class': 'fromcode', id: id})
      new Element('li', {html: 'one'}).inject(ul);
      new Element('li', {html: 'two'}).inject(ul);
      new Element('li', {html: 'three'}).inject(ul)  
    ul.inject(document.body);
  },

  find: function(id) {
    return $(id);
  },

  bind: function(list, callback) {
    list.addEvent('click', callback);
  },
  
  unbind: function(list, callback) {
    list.removeEvent('click', callback);
  },
  
  attr: function(list, attr) {
    list.get(attr);
  },
  
  style: function(list, style) {
    list.setStyles(style);
  },
  
  addClass: function(list, class_name) {
    list.addClass(class_name);
  },
  
  removeClass: function(list, class_name) {
    list.removeClass(class_name);
  },
  
  update: function(list, content) {
    list.set('html', content);
  },
  
  insertBottom: function(list, elements) {
    list.each(function(item, i) {
      $(elements[i]).inject(item);
    });
  },
  
  insertTop: function(list, elements) {
    list.each(function(item, i) {
      $(elements[i]).inject(item, 'top');
    });
  },
  
  insertAfter: function(list, elements) {
    list.each(function(item, i) {
      $(elements[i]).inject(item, 'after');
    });
  },
  
  insertBefore: function(list, elements) {
    list.each(function(item, i) {
      $(elements[i]).inject(item, 'before');
    });
  },
  
  remove: function(list) {
    list.dispose();
  }
};
