$(function() {
//search
      $('button').on('click', search);
      $('#search').keypress(function (e) {
 var key = e.which;
 if(key == 13) {
    $('button').click();
    return false;
  }
});
      function search(e) {
          e.preventDefault();
         $('.pic').remove();
          var $keyWord = $('#search').val();
          $.ajax({
              url: 'https://pixabay.com/api/?key=2754477-e73f4db5ecd0f0e55c2e045a4&q=' + $keyWord + '&image_type=photo',
              dataType: 'jsonp',
              success: function (data) {
                  var $results = data.hits;
                  for (var i = 0; i < data.hits.length; i++) {
                $('.result').append('<img class="pic" src="' + $results[i].previewURL + '">');
                  }
              },
              error: function () {
                  alert('Опаньки...:-(((');
              }
          });

          $('#search').val();
  }

//prototype

  function Human(name, age, gender, height, weight) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
}
function Student(name, age, gender, height, weight, study, scholarship,say) {
    Human.apply(this, arguments);
    this.study = study;
    this.scholarship = scholarship;
    this.say=say;
}
   function Worker(name, age, gender, height, weight, working, salary, say) {
       Human.apply(this, arguments);
       this.working = working;
       this.salary = salary;
       this.say=say;
   }

   var luke = new Student('Luke',18,'male',181,87,'Trinity College',5000,'I like to watch soap operas');
   var leia = new Student('Leia',17,'female',163,49,'University of Hong Kong',7000,'I like to watch soap operas');

   var han = new Worker('Han',48,'male',179,84,'pilot', 23000,"I'm working");
   var grievous = new Worker('Grievous',43,'male',190,102,'military', 21000,"I'm working");
Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
console.log('Luke',luke);
console.log('Leia',leia);
console.log('Han',han);
console.log('Grievous',grievous);
//alert(han.say);
});
