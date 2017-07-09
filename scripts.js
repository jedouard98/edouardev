$('#title').typed({
  strings: ['edouar<span id=\'dev\'>dev</span>'],
  typeSpeed: 30
});

setTimeout(function () {
  $('#dev').animate({color:'#D0426D'}, 500);
}, 1750);

setTimeout(function () {
  $('#cursor').css('padding-bottom', '50%');
}, 2000);

timedIconPowerOn();

setTimeout (animateTitle, 1700);

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
      $('#title').css('top', '55%');
    }
    else {
      $('#title').css('top', '55.5%');
    }
    up = !up;
  }, 900);
}

function powerOnIcon(powerName, isFancy) {
  var color;
  switch (powerName) {
    case '#home':
      color = '#F2C2CD';
      break;
    case '#about':
      color = '#FFE4CD';
      break;
    case '#projects':
      color = '#CAE8BB';
      break;
    case '#contact':
      color = '#A7A9C8';
      break;
  }
  if (isFancy) {
    $(powerName).animate({
      backgroundColor: color,
    }, 1000);
  }
  else {
    $(powerName).css('background-color', color);
  }
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
      powerOnIcon(powerName, false);
    }
    on = !on;
  }, 200);
};

function timedIconPowerOn() {
  var count = 0;
  var intervalId = setInterval(function() {
    switch (count) {
      case 1:
        powerOnIcon('#home', true);
        break;
      case 2:
        powerOnIcon('#about', true);
        break;
      case 3:
        powerOnIcon('#projects', true);
        break;
      case 4:
        powerOnIcon('#contact', true);
        break;
      case 5:
        clearInterval(intervalId);
        break;
    }
    count++;
  }, 300);
};
