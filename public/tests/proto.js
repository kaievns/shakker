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

  bind: function(list) {
    list.invoke('observe', 'click', function() {});
  },
  
  unbind: function(list) {
    list.invoke('stopObserving', 'click', function() {});
  },
  
  attr: function(list) {
    list.pluck('id');
  },
  
  style: function(list) {
    list.invoke('setStyle', { backgroundColor:"#ededed", color:"#fff" });
  },
  
  addClass: function(list) {
    list.invoke('addClassName', 'test-class');
  },
  
  removeClass: function(list) {
    list.invoke('removeClassName', 'test-class');
  },
  
  update: function(list) {
    list.invoke('update', 'the text');
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
