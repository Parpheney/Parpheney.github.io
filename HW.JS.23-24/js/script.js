function Model(data){
var self = this;

self.data = data;
self.addItem = function (item) {
  if (item.length === 0) {
    return;
  }
  self.data.push(item);
  return  self.data;

};
self.removeItem = function (item) {
  var index = self.data.indexOf(item);
  if (index === -1) {
  return;
  }
   self.data.splice(index, 1);
   return  self.data;
};
self.itemEditIndex = function (item) {
var index = self.data.indexOf(item);

  if (index === -1) {
  return;
}
  return index;
};
  self.changeItem = function (text, index) {
  if (text === '') {
    return;
  }
self.data[index] = text;
  return self.data;
};
}

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

function Controller(model, view){
  var self = this;
  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.change__edit', editItem);
  view.elements.listContainer.on('click', '.item__del', removeItem);

function addItem() {
  var newItem = view.elements.input.val();
  model.addItem(newItem);
  view.renderList(model.data);
  view.elements.input.val('');
}
function editItem () {
var item = $(this).attr('data-value');
var index = model.itemEditIndex(item);
var itemNew = $('<input type="text">');
var saveBtn =$('<button class="change__save">Save</button>');
$(this).parent().html('').append(itemNew).append(saveBtn);
saveBtn.on('click', function () {
model.changeItem(itemNew.val(), index);
view.renderList(model.data);
itemNew.val('');
});
}
function removeItem() {
var item = $(this).attr('data-value');
model.removeItem(item);
view.renderList(model.data);
}
}
$(function () {
    var firstToDoList = ['Learn HTML', 'Learn CSS', 'Learn JavaScript'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});
