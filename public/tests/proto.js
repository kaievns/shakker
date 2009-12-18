var Test = {
  _list: function() {
    return $$('ul');
  },
  
  make: function(id) {
    $(document.body).insert(new Element('ul', {'class': 'fromcode', id: id})
      .insert(new Element('li', {html: 'one'}))
      .insert(new Element('li', {html: 'two'}))
      .insert(new Element('li', {html: 'three'})));
  },

  find: function(id) {
    return $(id);
  },

  bind: function(list, callback) {
    list.invoke('observe', 'click', callback);
  },
  
  unbind: function(list, callback) {
    list.invoke('stopObserving', 'click', callback);
  },
  
  attr: function(list, attr) {
    list.pluck(attr);
  },
  
  style: function(list, style) {
    list.invoke('setStyle', style);
  },
  
  addClass: function(list, class_name) {
    list.invoke('addClassName', class_name);
  },
  
  removeClass: function(list, class_name) {
    list.invoke('removeClassName', class_name);
  },
  
  update: function(list, content) {
    list.invoke('update', content);
  },
  
  insertBottom: function(list, elements) {
    list.each(function(item, i) {
      item.insert(elements[i]);
    });
  },
  
  insertTop: function(list, elements) {
    list.each(function(item, i) {
      item.insert({top: elements[i]});
    });
  },
  
  insertAfter: function(list, elements) {
    list.each(function(item, i) {
      item.insert({after: elements[i]});
    });
  },
  
  insertBefore: function(list, elements) {
    list.each(function(item, i) {
      item.insert({before: elements[i]});
    });
  },
  
  remove: function(list) {
    list.invoke('remove');
  }
};
