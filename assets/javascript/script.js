$(document).ready(function () {
  console.log("loaded")

  $('.slideSection').click(function (e) {

    var linkHref = $(this).attr('href');
    console.log($(linkHref).offset().top)
    console.log(linkHref);

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 850);

    e.preventDefault();
  })

var time = 

$(".submitBtn").on("click", function(e) {
  alert("We're so sorry for the inconvenience, this button will be functional soon!")
})
});




  // const secondHand = document.querySelector('.second-hand');
  // const minHand = document.querySelector('.min-hand');
  // const hourHand = document.querySelector('.hour-hand');
  // function setDate(){
  //     const now = new Date ();
  //     const seconds = now.getSeconds()
  //     const minutes = now.getMinutes()
  //     const hours = now.getHours()
  //     const secondsDegrees = ((seconds / 60) * 360) + 90;
  //     const minutesDegrees = ((minutes/60) * 360) + 90;
  //     const hoursDegrees = ((hours/12) * 360) + 90;
  //     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //     minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  //     hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  //     // console.log(seconds)
  // }

  // setInterval(setDate, 1000)

