$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
  } else {
      $('.nav').removeClass('affix');
  }
});

$('.typed-cursor').hide();

var typed6 = new Typed('#typed', {
  strings: ['var lockdown = opportunity; <br><br> while(lockdown) { <br> <br> learnNewThings(); <br><br> upgradeSkills(); <br><br>}'],
  typeSpeed: 30,
  backSpeed: 0,
  loop: false,
  showCursor:false
});

var crossbtn = document.getElementById("crossbtn");
var bar = document.getElementById("bar");

bar.addEventListener("click",()=>{
    crossbtn.click();
})