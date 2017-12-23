// 手机下的二维码出来
$(function(){
	$(".phon").hover(function(){
		$(".code").css("display" , "block");
	},function(){
		$(".code").css("display" , "none");
	})
});

// 用户登录交换

$(".nav1").find("a").eq(1).on("click",function(){
	 $(".navc").css("display","none");
	 $("#hide").css("display","block");
})

// input框变化大小
$(function(){
    $("#seekid").on("click",function(){	
		$("#seekid").css("width","350px");
	   }) 
	$("#seekid").on("blur",function(){
		$("#seekid").css("width","252px");
	   })
	});


//侧边栏出来回去 


   $(function(){
     
     // 点击购物车出来
   
      var istrue = false;
      $(".shopcar").on("click",function(){
        if(!istrue){
          $(".slibarall").css("right","0px");
        }else{
          $(".slibarall").css("right","-295px");
        }
        istrue = !istrue;
      });

 //点击信息出来 
      var istrue = false;
      $(".myage").on("click",function(){
        if(!istrue){
          $(".slibarall").css("right","0px");
        }else{
          $(".slibarall").css("right","-295px");
        }
        istrue = !istrue;
      });


// 点击购物车和信息切换页面
    
     $(".shopcar").on("click",function(){
         $("#shopfull").css("display" , "block");
         $("#magfull").css("display" , "none");
     });
    $(".myage").on("click",function(){
        $("#shopfull").css("display" , "none");
        $("#magfull").css("display" , "block");
     });
   })

 //尾部hover微信图标时弹出框
 
$(function(){
    	$("#footeg").hover(function(){
    	$("#dropbox").css("display","block");
    },function(){
    	$("#dropbox").css("display","none");
    })
});
 


// 具体商品商品弹出框
$(function(){
	$(".rstblock").on("mouseover",function(){
		// alert(1);
		$(this).find(".desc_id").css('display',"block");
	})
	$(".rstblock").on("mouseout",function(){
		$(this).find(".desc_id").css('display',"none");
	})
})

//判断每一行最后一个A的移动框，使其位置改变
 


//具体商品ajax	 

     $.ajax({ 
          url:"data/juti.json",
          method:"get",
          success:function(data){
            // alert(data.length);
            var html = "";
            for(var i = 0; i < data.length; i++){
            		html += '<div class = "rstblock-logo"><img src = " '+ data[i].img +'" width:70px ;height:70px;/><span>' + data[i].time + '</span></div><div class = "rstblock-content"><div class = "rstblock-title">' + data[i].area + '</div><div class = "icon-star"><span class = "iconfont icon-wujiaoxing1"></span><span class = "iconfont icon-wujiaoxing1"></span><span class = "iconfont icon-wujiaoxing1"></span><span class = "iconfont icon-wujiaoxing1"></span><span class = "iconfont icon-wujiaoxing1"></span><i class = "rstblock-month">' + data[i].month + '</i></div><div class = "rstblock-cost">' + data[i].free + '</div><div class = "rstblock-activity"><i style = "background:#fff;color:#999999;border:1px solid;padding:0;">' + data[i].keep + '</i></div></div><div class = "desc_id"><h3>' + data[i].title+ '</h3><span>'+ data[i].food +'</span><div class = "desc_av"><span>' + data[i].arrive + '</span></div><div class = "desc_so"><p>' + data[i].describe + '</p></div></div></div>'
              } 

            $(".rstblock").html(html); 
        }
    }) 

  $.ajax({ 
          url:"data/none.json",
          method:"get",
          success:function(data){
            // alert(data.length);
            var html = "";
           for(var i = 0; i < data.length; i++){
            		html += '<div class = "rstblock-logo"><img src = " '+ data[i].img +'" width:70px ;height:70px;/><span>' + data[i].time + '</span></div><div class = "rstblock-content"><div class = "rstblock-title">' + data[i].area + '</div><div class = "icon-star"><span class = "iconfont icon-wujiaoxing1"></span><span class = "iconfont icon-wujiaoxing1"></span><span class = "iconfont icon-wujiaoxing1"></span><span class = "iconfont icon-wujiaoxing1"></span><span class = "iconfont icon-wujiaoxing1"></span><i class = "rstblock-month">' + data[i].month + '</i></div><div class = "rstblock-cost">' + data[i].free + '</div><div class = "rstblock-activity"><i style = "background:#fff;color:#999999;border:1px solid;padding:0;">' + data[i].keep + '</i></div></div><div class = "desc_id"><h3>' + data[i].title+ '</h3><span>'+ data[i].food +'</span><div class = "desc_av"><span>' + data[i].arrive + '</span></div><div class = "desc_so"><p>' + data[i].describe + '</p></div></div></div>'
              } 

            $(".rstblockt").html(html); 
        }
    }) 



 
  // 点击不同的名称切换页面
    $(function(){
    	$("#Merchantsm").find("a").eq(1).on("click",function(){
    		$(".difshop").css("display","none");
    		$(".difshopt").css("display","block");
    	})
    })
    $(function(){
    	$("#Merchantsm").find("a").eq(0).on("click",function(){
    		$(".difshop").css("display","block");
    		$(".difshopt").css("display","none");
    	})
    })


    // 移动框方向改变
    $(function(){
        $(".rstblock").hover(function(){
           if((($(this).index()+1)%4)== 0||(($(this).index()+1)%4)== 3){
              $(this).find(".desc_id").css("left","-310px");
           }



        })







    })