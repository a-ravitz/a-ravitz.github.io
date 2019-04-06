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


//   $(function () {

//     // init the validator
//     // validator files are included in the download package
//     // otherwise download from http://1000hz.github.io/bootstrap-validator

//     $('#contact-form').validator();


//     // when the form is submitted
//     $('#contact-form').on('submit', function (e) {

//         // if the validator does not prevent form submit
//         if (!e.isDefaultPrevented()) {
//             var url = "sendmail.php";

//             // POST values in the background the the script URL
//             $.ajax({
//                 type: "POST",
//                 url: url,
//                 data: $(this).serialize(),
//                 success: function (data)
//                 {
//                     // data = JSON object that contact.php returns

//                     // we recieve the type of the message: success x danger and apply it to the 
//                     var messageAlert = 'alert-' + data.type;
//                     var messageText = data.message;

//                     // let's compose Bootstrap alert box HTML
//                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
//                     // If we have messageAlert and messageText
//                     if (messageAlert && messageText) {
//                         // inject the alert to .messages div in our form
//                         $('#contact-form').find('.messages').html(alertBox);
//                         // empty the form
//                         $('#contact-form')[0].reset();
//                     }
//                 }
//             });
//             return false;
//         }
//     })
//   });
});
