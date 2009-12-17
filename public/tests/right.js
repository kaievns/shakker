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

  bind: function(list) {
    list.each('on', 'click', function() {});
  },
  
  unbind: function(list) {
    list.each('stopObserving', 'click');
  },
  
  attr: function(list) {
    list.map('id');
  },
  
  style: function(list) {
    list.each('setStyle', { backgroundColor:"#ededed", color:"#fff" });
  },
  
  addClass: function(list) {
    list.each('addClass', 'test-class');
  },
  
  removeClass: function(list) {
    list.each('removeClass', 'test-class');
  },
  
  update: function(list) {
    list.each('update', 'the text');
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
