'use strict';
$(function() {
var html = $('#test').html();
var data = {
title:"Тест по программированию",
submit:"Проверить мои результаты",
fields:[
{question:"Вопрос №1",
id:["1","2","3"],
answer:["Вариант ответа №1",
        "Вариант ответа №2",
        "Вариант ответа №3"],
correct:1},

{question:"Вопрос №2",
id:["1","2","3"],
answer:["Вариант ответа №1",
        "Вариант ответа №2",
        "Вариант ответа №3"],
correct:3},

{question:"Вопрос №3",
id:["1","2","3"],
answer:["Вариант ответа №1",
        "Вариант ответа №2",
        "Вариант ответа №3"],
correct:2},
]
};
localStorage.setItem("object",JSON.stringify(data));
var app = localStorage.getItem("object");
app = JSON.parse(app);
var content = tmpl(html,  app);
$('body').append(content);

function Result() {
  var $modal = $('.result');
  var $score=0;
  var $chbarr=[];
$( 'input:checked' ).each(function(){
$chbarr.push($(this).attr('id'));
});
for (var j = 0; j < app.fields.length; j++) {
  if($chbarr[j]==app.fields[j].correct) {
  ++$score;
  $modal.append('<p class="correct">Bопрос №'+(j+1)+' - верно!');
  } else {
  $modal.append('<p class="incorrect">Bопрос №'+(j+1)+' - невернo!');
  }
}
$modal.append('<p class="summ"> Сумма правильных ответов: ' +$score);
$('.modal').show();
}
function resetForm() {
$('#questionForm').trigger( 'reset' );
$('.result').html('');
$('.modal').hide();
}
$( 'input ').click(function(e){
if ($('input:checked').length > 3 ) {
 alert('Только три варианта!');
  resetForm();
 return false;
}});
$('#submit').on('click',Result);

$('#close').on('click', resetForm);
});
