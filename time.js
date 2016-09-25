var deadline = 'March 18 2017 13:30:00 GMT+0200';
var clock = document.getElementById('clockdiv');
var timeinterval = setInterval(updateClock,1000);
var daysSpan = clock.querySelector('.days');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');

function getTimeRemaining(){
  var t = Date.parse(deadline) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateClock(){
  var t = getTimeRemaining(deadline);
  daysSpan.innerHTML = t.days;
  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  if(t.total<=0){
    clearInterval(timeinterval);
  }
}

updateClock();