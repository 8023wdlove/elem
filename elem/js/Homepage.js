/*
轮播图 
var curIndex = 0;  
 var autoChange = setInterval(function(){ 
    if(curIndex < $(".imgList li").length-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
     changeTo(curIndex); 
  },2000);
  function changeTo(num){ 
    $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
  }

 */



/*城市表单滚动*/

     $.ajax({
       url:"../json/addre.json",
       type:"get",
       success:function(data){
          //首先将json数据中arr数组的每一个对象进行循环遍历，再在每一个对象中对describe
          //进行xunhuanbianli 
          for(var i = 0; i<data.length; i++){
            // alert(data.length); /*4*/
              var html = "";
            for( var j = 0; j<data[i].describe.length;j++){
               // alert(data[i].describe);
                html += '<div><h3>' + data[i].title + '</h3><ul><li><a href = "#" target="_blank">' + data[i].describe[j] + '</ul></li></a></div>';
            }
             $(".detail2-3").html(html);
          }

         
       }
     }) 

/*城市鼠标落下出现抬起消失*/

    $(function(){
       var istrue = true;
      $(".addressq").on("click",function(){        
          if(istrue){
            $(".detail").css("display","block");           
         }else{
          $(".detail").css("display","none");
         }
         istrue =!istrue; 
       })
    })

  /*百度搜索框*/

  function func(data){
      var oMenu = document.getElementById('two');
      var html = '';
      if(data.s.length){
        oMenu.style.display = "block";
        //通过循环加载数据
        for(var i = 0; i < data.s.length; i++){
          html += "<li><a>" + data.s[i] + "</a></li>"
        }
        oMenu.innerHTML = html;
      }else{
        oMenu.style.display = "none";
      }
    }

    window.onload = function(){
      var oSearch = document.getElementById('one')
      var oMenu = document.getElementById('two')

      oSearch.onkeyup = function(){
        //判断输入框是否为空
        if(this.value != ""){
          var oScript = document.createElement("script");
          oScript.src = "http://suggestion.baidu.com/su?wd=" + this.value + "&cb=func";
          document.body.appendChild(oScript);
        }else{
          oMenu.style.display = "none";
        }
      }
        oSearch.onblur = function(){
          oMenu.style.display = "none";
        }   
    }