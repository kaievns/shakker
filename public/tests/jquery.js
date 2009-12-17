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
  
  bind: function(list) {
    list.bind('click', function() {});
  },
  
  unbind: function(list) {
    list.unbind('click');
  },
  
  attr: function(list) {
    list.map(function() { return this.id });
  },
  
  style: function(list) {
    list.css({ backgroundColor:"#ededed", color:"#fff" });
  },
  
  addClass: function(list) {
    list.addClass('test-class');
  },
  
  removeClass: function(list) {
    list.removeClass('test-class');
  },
  
  update: function(list) {
    list.html('the text');
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