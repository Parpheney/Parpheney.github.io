define(
'view',
 ['model', 'jquery', 'tmpl'],
function (model) {
  function View(model){
    var self = this;
     function init() {
       var wrapper = tmpl($('#wrapper-template').html());
   $('body').append(wrapper);
      self.elements ={
      input: $('.add__value'),
       addBtn: $('.add__submit'),
       listContainer: $('.list')
      };
      self.renderList(model.data);
    }
    self.renderList = function(data) {
      var list = tmpl($('#list-template').html(), {data: data});
      self.elements.listContainer.html(list);
    };
    init();
  }
  var view = new View(model);
  return view;
}
);
