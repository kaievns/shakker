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

  bind: function(list) {
    list.addEvent('click', $empty);
  },
  
  unbind: function(list) {
    list.removeEvent('click', $empty);
  },
  
  attr: function(list) {
    list.get('id');
  },
  
  style: function(list) {
    list.setStyles({ backgroundColor:"#ededed", color:"#fff" });
  },
  
  addClass: function(list) {
    list.addClass('test-class');
  },
  
  removeClass: function(list) {
    list.removeClass('test-class');
  },
  
  update: function(list) {
    list.set('html', 'the text');
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
