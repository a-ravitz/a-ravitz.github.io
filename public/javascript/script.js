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


  var modal = $("#simpleModal")
  var submitBtn = $("#submitBtn")
  var closeBtn = $('.closeBtn');
  var name = $("#formName").val()

  $(submitBtn).on("click", openModal);
  $(closeBtn).on("click", closeModal);
  $(window).on("click", clickOutside);


  function openModal() {
    $('#simpleModal').fadeIn();
    var name = $("#formName").val()
    console.log("name is: " + name)
    $("#simpleModal").css("display", "block")
    $(".text").append(`Thanks for the message, ${name}!`)
    

};

function closeModal() {

  // $("#simpleModal").css("display", "none")
  location.replace("/")
};

function clickOutside(e) { //function to close modal if outside click 
    console.log("hi")
    console.log("modal: " + modal[modal])
    if (e.target === modal[modal]) {
      location.replace("/") 
        // console.log(e)
        // $("#simpleModal").css("display", "none")
    }
};


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

