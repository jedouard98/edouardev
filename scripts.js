$("#title").typed({
  strings: ["edouar<span id=\"dev\">dev</span>"],
  typeSpeed: 2
});

setTimeout(function () {
  $("#dev").animate({color:'#D0426D'},500);
}, 1000);
