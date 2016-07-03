var test = {
  createElement: function (parameters) {
    var element = document.createElement(parameters.tagName);
  if (parameters.inputType) {
    element.setAttribute('type',parameters.inputType);
  }
  if (parameters.className) {
    element.className = parameters.className;
  }
  if (parameters.content) {
    element.innerHTML = parameters.content;
  }
  if (parameters.parentElement) {
    parameters.parentElement.appendChild(element);
  }
  return element;
},
generateQuestions: function (questionsAmount, answersAmount) {
for (var i = 0; i < questionsAmount; i++) {
this.createElement({
tagName: 'h3',
content: 'Вопрос №'+(i+1),
parentElement: form
});

for (var n= 0; n< questionsAmount ; n++) {
  var label = this.createElement({
    tagName:'label',
    content: 'Вариант ответа №'+(n+1)+'</br>',
    parentElement: form
});
var checkbox= this.createElement({
    tagName : 'input',
    inputType:'checkbox'
  });
  label.insertAdjacentElement('afterbegin', checkbox);
}}}};
 var body = document.querySelector('body');
 var title =test.createElement({
   tagName: 'h1',
   content: 'Тест по программированию',
   parentElement: body
 });
 var form = test.createElement({
   tagName: 'form',
   parentElement: body
 });
 test.generateQuestions(3,3);
 var button = test.createElement({
   tagName: 'input',
   inputType:'submit',
   content: 'Проверить мои результаты',
   parentElement: body
 });
 body.style.fontFamily= 'Helvetica';
 body.style.marginLeft= '50px';
 body.style.fontFamily= 'Helvetica';
 body.style.backgroundColor = 'rgb(191, 233, 121)';
 title.style.textAlign = 'center';
 button.style.backgroundColor = 'beige';
 button.style.height = '45px';
 button.style.width = '150px';
 button.style.fontSize = '20px';
 button.style.marginTop = '50px';
