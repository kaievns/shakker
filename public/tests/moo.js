var Test = {
  make: function(id) {
    new Element('ul', {'class': 'fromcode', id: id})
      .adopt(
        new Element('li', {html: 'one'}),
        new Element('li', {html: 'two'}),
        new Element('li', {html: 'three'})
      )
      .inject(document.body);
  },

  find: function(id) {
    return $(id);
  },

  bind: function(list) {
    list.each(function(item) {
      item.addEvent('click', $empty)
    });
  },
  
  unbind: function(list) {
    list.each(function(item) {
      item.removeEvent('click', $empty);
    });
  },
  
  attr: function(list) {
    list.map(function(item) { return item.id; });
  },
  
  style: function(list) {
    list.each(function(item) {
      item.setStyles({ backgroundColor:"#ededed", color:"#fff" });
    });
  },
  
  addClass: function(list) {
    list.each(function(item) {
      item.addClass('test-class');
    });
  },
  
  removeClass: function(list) {
    list.each(function(item) {
      item.removeClass('test-class');
    });
  },
  
  update: function(list) {
    list.each(function(item) {
      item.set('html', 'the text');
    });
  },
  
  insertBottom: function(list, elements) {
    list.each(function(item, i) {
      elements[i].inject(item);
    });
  },
  
  insertTop: function(list, elements) {
    list.each(function(item, i) {
      elements[i].inject(item, 'top');
    });
  },
  
  insertAfter: function(list, elements) {
    list.each(function(item, i) {
      elements[i].inject(item, 'after');
    });
  },
  
  insertBefore: function(list, elements) {
    list.each(function(item, i) {
      elements[i].inject(item, 'before');
    });
  },
  
  remove: function(list) {
    list.each(function(item) {
      item.dispose();
    });
  }
};
