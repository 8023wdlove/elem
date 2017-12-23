define(function () {
  function login() {
    $('.login').on('click', 'a', function () {
      var iNow = $(this).index();
      $('.login').find('a').attr('class', '');
      $(this).attr('class', 'blue');
      $('.content').find('form').css('display', 'none');
      $('.content').find('form').eq(iNow).css('display', 'block');
      $('.blue_wire').stop().animate({
        left: 100 * iNow
      },300);
    })


    $(".hideShow").on("click", ".ball", function () {
      if($(this).attr('style') == "left: 0px;"){
        $(this).animate({
          left: 28
        }, 100)
        $(".hideShow").animate({
          backgroundColor: "#0da2ff",
          lineHeight: 14
        })
        $(".hideShow").find("span").html("ABC");
        $(".authCode").attr("type", "text");
      }else {
        $(this).animate({
          left: 0
        }, 100)
        $(".hideShow").animate({
          backgroundColor: "#fff",
          lineHeight: 5
        })
        $(".hideShow").find("span").html("...");
        $(".authCode").attr("type", "password");
      }
    })

  }
  return login();
})
