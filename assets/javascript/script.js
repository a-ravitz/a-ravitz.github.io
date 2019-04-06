$(document).ready(function() {
console.log("loaded")

  $('.slideSection').click(function(e){
    
    var linkHref = $(this).attr('href');
    console.log($(linkHref).offset().top)
    console.log(linkHref);

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 850);
    
  e.preventDefault();
  })

});