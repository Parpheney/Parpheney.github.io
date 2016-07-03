var clock = document.getElementById('clock');
var toggleBtn = document.getElementById('toggle');
var clearBtn = document.getElementById('clear');
var watch = new Stopwatch({
  element : clock,
  delay : 10
});

function start() {
  watch.start();
  toggleBtn.textContent = 'PAUSE';
  toggleBtn.style.backgroundColor = 'red';
  toggleBtn.style.color = 'black';
}

function pause() {
  watch. pause();
  toggleBtn.textContent = 'START';
  toggleBtn.style.backgroundColor = 'rgb(207, 201, 21)';
  toggleBtn.style.color = 'blue';
}

toggleBtn.addEventListener('click', function() {

if  (watch.isOn){
pause();
}
else{
start();
}
});

clearBtn.addEventListener('click', function() {
  if (!watch.isOn || watch.isOn) {
    watch.clear();
return watch.pause;
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

  this.pause = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null ;
      this.isOn = false;
    }
  };

  this.clear = function() {
  if (!this.isOn ) {
    time = 0;
    update();
  }
  else{
clearInterval(interval);
   interval = 0;
   time=0;
   update();
   return pause();
  }
};

}
