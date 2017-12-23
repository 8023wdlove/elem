define(function () {
  function register() {
    $('.username').blur(function () {
      var _this = this;
      return username(_this);
    })
    $('.rpassword').blur(function () {
      var _this = this;
      return password(_this);
    })
    $(".nextrpassword").blur(function(){
        if($('.rpassword').val() == $(".nextrpassword").val()){
            $(".rpassword_error").html("");
            return true;
        }else{
            $(".rpassword_error").html("两次密码输入不一致");
            return false;
        }
    })
    $('.phone').blur(function () {
      var _this = this;
      return phone(_this);
    })
    
    var code;
    changeImg();

    $("#authCode").blur(function(){
       check();
    })

  }
  function username(_this) {
    var oValue = _this.value.replace(/\s/ig, "");
    this.value = oValue;
    if(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(oValue)){
        return true;
    }else if(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(oValue)){
        return true;
    }else{
        $(".user_error").html("请输入正确的邮箱或者手机号");
        return false;
    }
  }

  function password(_this) {
    var oValue = _this.value.replace(/\s/ig, "");
    this.value = oValue;
    if(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?_/\-.<> ]).*$/.test(oValue)){
        $(".pwd_error").html("<div class = 'low pwd_error_blue'>低</div><div class = 'center pwd_error_blue'>中</div><div class = 'tall pwd_error_blue'>高</div>");
        return true;
    }else if(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/.test(oValue)){
        $(".pwd_error").html("<div class = 'low pwd_error_blue'>低</div><div class = 'center pwd_error_blue'>中</div><div class = 'tall'>高</div>");
         return true;
    }else if(/^.*(?=.{6,})(?=.*\d).*$/.test(oValue) || /^.*(?=.{6,})(?=.*[A-Z])(?=.*[a-z]).*$/.test(oValue)){
        $(".pwd_error").html("<div class = 'low pwd_error_blue'>低</div><div class = 'center'>中</div><div class = 'tall'>高</div>");
         return true;
    }else{
        $(".pwd_error").html("请输入六位以上的密码");
        return false;
    }
  }

  function phone(_this) {
    var oValue = _this.value.replace(/\s/ig, "");
    this.value = oValue;
    if(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(oValue)){
        $(".phone_error").html("");
        return true;
    }else{
        $(".phone_error").html("请输入正确的手机号");
        return false;
    }
  }

  function changeImg(){
      //alert("换图片");
      var arrays=new Array(
          '1','2','3','4','5','6','7','8','9','0',
          'a','b','c','d','e','f','g','h','i','j',
          'k','l','m','n','o','p','q','r','s','t',
          'u','v','w','x','y','z',
          'A','B','C','D','E','F','G','H','I','J',
          'K','L','M','N','O','P','Q','R','S','T',
          'U','V','W','X','Y','Z'
      );
      code='';//重新初始化验证码
      //alert(arrays.length);
      //随机从数组中获取四个元素组成验证码
      for(var i=0;i<4;i++){
          //随机获取一个数组的下标
          var r=parseInt(Math.random()*arrays.length);
          code+=arrays[r];
          //alert(arrays[r]);
      }
              //alert(code);
      document.getElementById('randomImg').value=code;//将验证码写入指定区域
  }

  //效验验证码(表单被提交时触发)
  function check(){
      //获取用户输入的验证码
      var input_code=document.getElementById('authCode').value;
      //alert(input_code+"----"+code);
      if(input_code.toLowerCase()==code.toLowerCase())
          {
              //验证码正确(表单提交)
              $(".authCode_error").html("");
              return true;
          }
          $(".authCode_error").html("验证码不正确");
          //验证码不正确,表单不允许提交
          return false;
  }

  return register();
})
