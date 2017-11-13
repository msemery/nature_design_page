$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  var percent = (scroll * 100) / ($(document).height() - $(window).height())
  var first_block = $('#second').height();
  //Manage navbar style
  if (scroll > first_block){
    if(!$('#nav').hasClass('nav_colored')){
        $('#nav').addClass('nav_colored');
        $('#intro').attr('src', 'dot.png');
    }
  }else {
    if($('#nav').hasClass('nav_colored')){
        $('#nav').addClass('nav_colored');
        $('#intro').attr('src', 'dot2.png');
    }
  }
});
