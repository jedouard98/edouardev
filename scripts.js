$(document).ready(function() {
   $('nav').localScroll({duration:800});
});

$(document).ready(function() {
   $('#banner').localScroll({duration:800});
});

$('#home-title').typed({
  strings: ['edouar<span id=\'dev\'>dev</span>'],
  typeSpeed: 30
});

var on = true;

setInterval(function() {
  if (on) {
    $('.blink').css('color', 'black');
  }
  else {
    $('.blink').css('color', 'white');
  }
  on = !on;

}, 400);

setTimeout(function () {
  $('#dev').animate({color:'#D0426D'}, 500);
}, 1750);

setTimeout(function () {
  $('#cursor').css('padding-bottom', '50%');
}, 2000);

// timedIconPowerOn();

setTimeout (animateTitle, 2000);

// setTimeout (function() { blinking('#cursor'); }, 1700);

function blinking(element) {
  var visible = true;
  setInterval(function () {
    if (visible) {
      $(element).css('color', 'transparent');;
    }
    else {
      $(element).css('color', 'black');
    }
    visible = !visible;
  }, 900);
}

function animateTitle() {
  var up = true;
  setInterval(function () {
    if (up) {
      $('#home-title').css('top', '55%');
    }
    else {
      $('#home-title').css('top', '55.5%');
    }
    up = !up;
  }, 900);
}

function powerOnIcon(powerName) {
  var color;
  switch (powerName) {
    case '#home-circle':
      color = '#F2C2CD';
      break;
    case '#about-circle':
      color = '#FFE4CD';
      break;
    case '#projects-circle':
      color = '#CAE8BB';
      break;
    case '#contact-circle':
      color = '#F2C2CD';
      break;
  }
  $(powerName).css('background-color', color);
}

function powerOffIcon(powerName) {
  $(powerName).css('background-color', '#2E353B');
};

function animateIconPower(powerName){
  var on = false;
  var count = 1;
  var intervalId = setInterval(function() {
    if (on) {
      powerOffIcon(powerName);
      count++;
      if (count == 3) {
        clearInterval(intervalId);
        timedIconPowerOn();
      }
    }
    else {
      powerOnIcon(powerName);
    }
    on = !on;
  }, 200);
};

function timedIconPowerOn() {
  var count = 0;
  var intervalId = setInterval(function() {
    switch (count) {
      case 1:
        powerOnIcon('#home-circle');
        break;
      case 2:
        powerOnIcon('#about-circle');
        break;
      case 3:
        powerOnIcon('#projects-circle');
        break;
      case 4:
        powerOnIcon('#contact-circle');
        break;
      case 5:
        clearInterval(intervalId);
        break;
    }
    count++;
  }, 300);
};

$(document).on('scroll', function() {
    if($(this).scrollTop()>$('#home').position().top){
        powerOnIcon('#home-circle');
    }
    else {
      powerOffIcon('#home-circle');
    }
})

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#about').position().top){
        powerOnIcon('#about-circle');
    }
    else {
      powerOffIcon('#about-circle');
    }
})

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#projects').position().top){
        powerOnIcon('#projects-circle');
    }
    else {
      powerOffIcon('#projects-circle');
    }
})

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#contact').position().top){
        powerOnIcon('#contact-circle');
    }
    else {
      powerOffIcon('#contact-circle');
    }
})
