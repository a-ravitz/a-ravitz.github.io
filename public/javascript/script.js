$(document).ready(function () {

  //animation when clicking on links
  $('.slideSection').click(function (e) {

    var linkHref = $(this).attr('href');
    console.log($(linkHref).offset().top)
    console.log(linkHref);

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 850);

    e.preventDefault();
  })



  //modal and form validation stuff
  var modal = $("#simpleModal")
  var submitBtn = $("#submitBtn")
  var closeBtn = $('.closeBtn');
  var colorArr = ["my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2","my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2","my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2","my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2","my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2","my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2","my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2","my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2","my-text-color-1","my-text-color-2","my-text-color-3","my-text-color-4","my-text-color-5","my-text-color-2","my-text-color-1","my-text-color-5","my-text-color-4","my-text-color-3","my-text-color-2"]
  var contactForm = $("#contactForm")

  //form validation
  $(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $(contactForm).validate({
      // Specify validation rules
      errorClass: colorArr[0],
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        message: "required",
      },
      // Specify validation error messages
      messages: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        message: "Please include a message"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
        openModal()
      }
    });
  });

  $(closeBtn).on("click", closeModal);
  $(window).on("click", clickOutside);

  function openModal() {
    $('#simpleModal').fadeIn();

    var name = $("#name").val();
    var nameArr = []

    for (var i = 0; i < name.length; i++) {
      nameArr.push(name[i])
    }

    for (var j = 0; j < nameArr.length; j++) {
    var name = $("<span>")
    // for (var x = 0; x < colorArr.length; x++) {
        name.addClass(colorArr[j])
    
        name.text(nameArr[j])
      // }
      $(".textName").append(name)
   
    }
    console.log(name)
    $(".text").append(name)
    $("#simpleModal").css("display", "block")
    $(".my-bg-color-2").css("background", "transparent")
    }

function closeModal() {
  $(".my-bg-color-2").css("background", "#f7f3f3")
  location.replace("/")
};

function clickOutside() { //function to close modal if outside click 
    console.log("hi")
      $(modal).on("click", function(e){
        if(e.target !== modal) {
        location.replace("/")
        }
    })
};

// function recaptchaCallback() {
//   $('#submitBtn').removeAttr('disabled');
// };

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

