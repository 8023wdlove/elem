define(function () {
  function personage() {
    var aLis = $('.option').find('li');
    for(let i = 0; i < aLis.length; i++){
      aLis[i].onclick = function () {
        $('.content_right').css('display', 'none');
        $('.content_right').eq(i+1).css('display', 'block');
      }
    }
    $(".box").click(function () {
      $('.content_right').css('display', 'none');
      $('.content_right').eq(0).css('display', 'block');
    })
  }
  return personage();
})
