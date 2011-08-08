var Test = {
  _list: function() {
    return $$('ul');
  },
  
  make: function(id) {
    new Element('ul', {'class': 'fromcode', id: id})
      .insert(new Element('li', {html: 'one'}))
      .insert(new Element('li', {html: 'two'}))
      .insert(new Element('li', {html: 'three'}))
      .insertTo(document.body);
  },

  find: function(id) {
    return $(id);
  },

  bind: function(list, callback) {
    list.each('on', 'click', callback);
  },
  
  unbind: function(list, callback) {
    list.each('stopObserving', 'click', callback);
  },
  
  set: function(list, attrs) {
    list.each('set', attrs);
  },
  
  get: function(list, attr) {
    list.map(function(w) { return w._[attr]});
  },
  
  style: function(list, style) {
    list.each('setStyle', style);
  },
  
  addClass: function(list, class_name) {
    list.each('addClass', class_name);
  },
  
  removeClass: function(list, class_name) {
    list.each('removeClass', class_name);
  },
  
  update: function(list, content) {
    list.each('update', content);
  },
  
  insertBottom: function(list, elements) {
    list.each(function(item, i) {
      item.insert(elements[i]);
    });
  },
  
  insertTop: function(list, elements) {
    list.each(function(item, i) {
      item.insert(elements[i], 'top');
    });
  },
  
  insertAfter: function(list, elements) {
    list.each(function(item, i) {
      item.insert(elements[i], 'after');
    });
  },
  
  insertBefore: function(list, elements) {
    list.each(function(item, i) {
      item.insert(elements[i], 'before');
    });
  },
  
  remove: function(list) {
    list.each('remove');
  }
};
