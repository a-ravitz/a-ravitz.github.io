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

  if ("data-collapse" === true) {
    $(".dropper").css("display", "none")
  }


  var form = $('#form'); //form id here
  form.submit(function (event) {
    event.preventDefault();
    var form_status = $('<div class="form_status"></div>');
    var $form = $(this);
    $.ajax({
      type: 'POST',
      url: "../php/sendmail.php",
      data: {
        Name: $("#name").val(),
        Email: $("#email").val(),
        Message: $("#message").val()
      },
      beforeSend: function () {
        form.append(form_status.html('Email is sending...').fadeIn());
      }
    }).done(function (data) {
      form_status.html('Email Sent!').delay(3210).fadeOut();
    });
    //delete messages when submit
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
});