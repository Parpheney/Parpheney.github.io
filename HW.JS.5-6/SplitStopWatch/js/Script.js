var clock = document.getElementById('clock');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var splitBtn = document.getElementById('split');
var text = document.getElementById('text');
var field = document.getElementById('field');
var watch = new Stopwatch({
  element : clock,
  delay : 10
});

function start() {
  watch.start();
  toggleBtn.textContent = 'STOP';
  toggleBtn.style.backgroundColor = 'beige';
  toggleBtn.style.color = 'rgb(44, 10, 107)';
}

function stop() {
  watch. stop();
  toggleBtn.textContent = 'START';
  toggleBtn.style.backgroundColor = 'rgb(33, 198, 221)';
  toggleBtn.style.color = 'rgb(125, 33, 33)';

}

toggleBtn.addEventListener('click', function() {
if  (watch.isOn){
stop();
}
else{
start();
}
});

resetBtn.addEventListener('click', function() {
  if (!watch.isOn|| watch.isOn) {
watch.reset();
    }

});
splitBtn.addEventListener('click', function() {
if  (watch.isOn){
  watch.split();
}
});

function Stopwatch(opts) {
  var time = 0;
  var interval;
  var offset;
  var element = opts.element;
  var delay = opts.delay;
  function update() {
    if (this.isOn) {
      var spentTime = delta();
      time += spentTime;
    }

    var formattedTime = timeFormatter(time);
    element.textContent = formattedTime;
  }

  function delta() {
    var now = Date.now();
    var spentTime = now - offset;
    offset = now;
    return spentTime;
  }

  function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var hours =  time.getUTCHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();
    if (hours.length < 2) {

      hours = '0' + hours;
    }
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }
    return hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
  }

  this.isOn = false;

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), delay);
      offset = Date.now();
      this.isOn = true;
    }
  };
  this.stop = function() {
    if (this.isOn) {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
    text.innerHTML = 'Stop' + ' : ' + element.textContent;
}

  };
  this.split = function() {
  if (this.isOn) {
  var li = document.createElement('li');
      li.innerText = 'Split' + ' : ' + element.textContent;
      field.appendChild(li);
}
};
  this.reset = function() {
  if (!this.isOn ) {
    time = 0;
    text.innerHTML = '';
    field.innerHTML = '';
    update();
  }
  else{
   clearInterval(interval);
   interval = 0;
   time=0;
   text.innerHTML = '';
   field.innerHTML = '';
   update();
   return stop();
  }
};
}
