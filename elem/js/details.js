
$(function(){
	// 加载所有
		$.ajax({
		   	  	url:"data/ceshi.json",
		   	  	success:function(data){
		   	  		var html="";
		   	  		var html2="";
		   	  		var html3="</div>";
		   	  		var html4="";
		   	  		var html5="";
		   	  		var html6="";
		   	  		var html7 = "";

		   	  		for(var i in data.content){
		   	  			html="<div id = 'shoplist'><h3 id = 'typetitle' class = 'typetitle'>"+data.content[i].type+"<span>大家喜欢吃，才是真的好吃</span></h3>"
		   	  			if(i == 0){
		   	  				html5='<a class = "active">'+data.content[i].type+'</a>';
		   	  			}else{
		   	  				html5='<a class = "">'+data.content[i].type+'</a>';
		   	  			}
		   	  			html6=html6+html5;
		   	  			for(var j in data.content[i].detail){
		   	  				for(var k = 0 ;k < data.content[i].detail[j].avgLevel;k++){
		   	  					html7 += "<img src='images/star-on.png'alt=''>";
		   	  				}
		   	  				html2="<div id ='typedetails' _id='"+data.content[i].detail[j].gid+"' class='typedetails'><a><img id='shoppic' class='shoppic'src="+data.content[i].detail[j].gimg+" alt=''></a><div id='shopdetailebg'><h3>"+data.content[i].detail[j].gname+"</h3><p>"+data.content[i].detail[j].intro+"</p><span id='picstar'>"+html7+"</span><span id='avergrade'>("+data.content[i].detail[j].avgLevel+")</span><span id='salesm'>月售"+data.content[i].detail[j].saleCount+"</span><br><span id='shopprice'>￥<span id='shopprice1'>"+data.content[i].detail[j].price+"</span></span><div id='addcar' class='addcar'>加入购物车</div></div></div>";
		   	  				html4=html4+html2;
		   	  				html7="";

		   	  			}
		   	  			html=html+html4;
		   	  			$("#shoplistbg").append(html);
		   	  			html="";
		   	  			html4="";
		   	  		}
		   	  		$("#shoptypes").html(html6);

		   	  	}
		   	 
		   })

		$("#shoptypes").on("click","a",function(){
			$("#shoptypes").find("a").removeClass("active");
			$(this).addClass("active");
			$('html,body').animate({scrollTop: ($("#shoplistbg").find(".typetitle").eq($(this).index()).offset().top-$("#shoptypes").height())}, 800);
		})
			
		var height1 = ($("#shoptypes").offset().top);
		$(window).scroll(function(){

			if($(document).scrollTop()>height1){
				$("#shoptypes1").css("height",$("#shoptypes").height());
				$("#shoptypes").css("position","fixed").css("top","0px");
			}
			else{
				$("#shoptypes").css("position","").css("top","");
			}
			
		})


	$("#shoptypeleft").find("a").not("p a").click(function(){
		$("#shoptypeleft").find("a").not("p a").attr("class","");
		$(this).attr("class","active1");
		$("#shopmenubg .bg").removeClass("active3");
		$("#shopsort").find("a").css("display","block");
		$("#shopmenubg .bg").eq($(this).index()).addClass("active3");
		if($(this).index()==1 ||$(this).index()==2 ){
			$("#shopsort").find("a").css("display","none")
		}

	})
// 这是排序部分
	   $("#shopsort").find("a").on("click",function(){
			$("#shopsort").find("a").removeClass("active4");
			$(this).addClass("active4");
			$("#shoplistbg").html("");
			 $.ajax({
		   	  	url:"data/ceshi.json",
		   	  	success:function(data){
		   	  		if(data.code == 1){
			   	  		var html="";
			   	  		var html2="";
			   	  		var html3="</div>";
			   	  		var html4="";
			   	  		for(var i in data.content){
			   	  			html="<div id = 'shoplist'><h3 id = 'typetitle' class = 'typetitle'>"+data.content[i].type+"<span>大家喜欢吃，才是真的好吃</span></h3>"
			   	  			for(var j in data.content[i].detail){
			   	  				html2="<div id ='typedetails' _id='"+data.content[i].detail[j].gid+"' class='typedetails'><a><img id='shoppic' class ='shoppic'src="+data.content[i].detail[j].gimg+" alt=''></a><div id='shopdetailebg'><h3>"+data.content[i].detail[j].gname+"</h3><p>"+data.content[i].detail[j].intro+"</p><span id='picstar'><img src= 'images/star-on.png' alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''></span><span id='avergrade'>("+data.content[i].detail[j].avgLevel+")</span><span id='salesm'>月售"+data.content[i].detail[j].saleCount+"</span><br><span id='shopprice'>￥<span id='shopprice1'>"+data.content[i].detail[j].price+"</span></span><div id='addcar' class='addcar'>加入购物车</div></div></div>";
			   	  				html4=html4+html2;
			   	  			}
			   	  			html=html+html4;
			   	  			$("#shoplistbg").append(html);
			   	  			html="";
			   	  			html4="";
			   	  		}
		   	  		}else{
		   	  			alert("错误")
		   	  		}
		   	  	}
		   	  
		   })
	})
//排序部分已结束 
    

    // 评论部分 
    $("#commentype").find("a").on("click",function(){
    	$("#commentype").find("a").removeClass("active2");
    	$(this).addClass("active2");
    	$("#allcomments").html("");
    	$.ajax({
    		url:"data/ceshi3.json",
    		success:function(data){
    			if(data.code == 1){
    					var level ="";
		    			var html = "";
		    			var html2 = "";
		    			var html3 = "";
		    			var html5 = "";
		    			var html6 = "";
		    			var html4='<span id="userinfo"><img src="images/default-avatar.38e40d.png"alt=""></span></li>'


		    			for(var i in data.content){
		    				if(data.content[i].evaluateInfo.level>= 4){

		    					level ="满意"
		    				}else{
		    					level ="不满意"
		    				}
		    				for(var k = 0 ;k < data.content[i].evaluateInfo.level;k++ ){
		    						 html5 += '<i class="iconfont icon-xihao"></i>';
		    					}
		    				html='<li><h4><span id="comuser">匿名**用户</span><span id="comtime">'+data.content[i].evaluateInfo.time +'</span></h4><div id="comresult"><p>'+html5+'<span id="pleased">'+level+'</span><span id="timesend">'+data.content[i].evaluateInfo.arriveTime+'</span></p></div>';
		    				for(var j in data.content[i].eva){
		    					for(var h = 0 ;h < data.content[i].eva[j].goodsLevel; h++ ){
		    						 html6 += '<i class="iconfont icon-like"></i>';
		    					}
		    					if(data.content[i].eva[j].goodsLevel>= 4){

		    					glevel ="满意"
		    				}else{
		    					glevel ="不满意"
		    				}
		    					html2 ='<div id="specificcom"><span id="describe">'+data.content[i].eva[j].goodsName+'</span>'+html6+'<span id="describeresult">'+glevel+'</span><a id="showpic"href="">查看商品</a></div>'
		    					html3 = html3+html2;
		    					html6 = "";
		    				}
		    				html3 = html+html3 + html4;
		    				$("#allcomments").append(html3);
		    				 html = "";
		    				html2 = "";
		    				html3 = "";
		    				html5 = "";
		    				

		    			}
    				}else{
    					alert("错误")
    				}
    		}
    	})
    })
// 这里可以做购物车操作
    $("#shoplistbg").on("click",".addcar",function(){
    	var first = $.cookie("goods") == null ? true : false;
    	if(first){
				$.cookie("goods", '[{id:' + $(this).closest(".typedetails").attr("_id") + ',num:1,price:'+$(this).closest(".typedetails").find("#shopprice1").html()+'}]', {expires: 7});
				
			}else{
				var cookieStr = $.cookie("goods");
				var arr = eval(cookieStr);
				
				var isYes = false;
				for(var i in arr){
					if(arr[i].id == parseInt($(this).closest(".typedetails").attr("_id"))){
						arr[i].num = Number(arr[i].num)+1;
						isYes = true;
					}
				}
				if(!isYes){
					var obj = {id: $(this).closest(".typedetails").attr("_id"), num: 1,price:$(this).closest(".typedetails").find("#shopprice1").html()};
					arr.push(obj);
				}
				$.cookie("goods", JSON.stringify(arr), {expires: 7});
			}
			car();
			showprice();
    })
     		 car();
	 function car(){
     		$.ajax({
     			url:"data/4444.json",
     			success:function(data){
     				var html='';
     				$("#shopEM").html("");
     				var arr = eval($.cookie("goods"));
     				if(!arr){
							return;
						}
					for(var i = 0; i < arr.length; i++){
						for(var j in data){
							if(arr[i].id == data[j].id ){
								html += '<p class="foods"><span class="foodname">'+data[j].title+'</span><span class="countbg"><a class="decrease">-</a><span class="count">'+arr[i].num+'</span><a class="increase">+</a></span><span class="money">'+data[j].price+'</span></p>';
							}
						}
					}
					$("#shopEM").html(html);
					html="";

     			}

     		})
     	}	
     $("#cleanall").on("click",function(){
     	$.cookie("goods",null);
     	car();
     	showprice();
     })
     $("#shoplistbg").on("click",".shoppic",function(){
    	$("#show2222").css("display","block");
    	($(this).closest(".typedetails").attr("_id"));
    	$.ajax({
    		url:"data/ceshi44.json",
    		success:function(data){
    			if(data.code == 1){
    				$("#conbg").html('');
    				var html3 = '<span id = "shopco">商品评论</span>';
    				var html= "";
    				var html1="";
    				$("#show333").attr("src",data.content.gimg);
    				$("#showname").html(data.content.gname);
    				$("#shopprice1111").html(data.content.price);
    				for(var i = 0 ;i < data.content.evaluateItem.length;i++){
    				for(var k = 0 ;k < data.content.evaluateItem[i].goodsLevel ;k++ ){
		    				html1 += '<img src="images/star-on.png" alt="">';
		    			}
    					html+='<p class="WWW"><span>'+html1+'</span> <span id ="timecom">'+data.content.evaluateItem[i].time+'</span></p>'
    					html1 ="";
    				}
    				 html=html3+html
    				$("#conbg").html(html);


    			}else{
    				alert("错误")
    			}


    		}

    	})
    	
    })
     $("#close").on("click",function(){
     	$("#show2222").css("display","none");

     })



    $.ajax({
    		url:"data/3333.json",
    		success:function(data){
    			if(data.code == 1){
    				$("#shoptimeinfo").html(data.content[0].openingTime );
    				$(".startprice").html(data.content[0].qiSongJia);
    				$(".price").html(data.content[0].peiSongFei);
    				$(".minute").html(data.content[0].speed);
    				$(".shoplogo").attr("src",data.content[0].simg);
    				$("#shopname11").html(data.content[0].sname);
    				$("#grade").html(data.content[0].sevaluate);
    				$(".salemonth").html(data.content[0].orderCount);
    				$("#shopaddinfo").html(data.content[0].saddress );
    				$(".starcount").html('(72)');
    				$("#compare1").html("69%");
    				 $(".compare").html('5.0');
    				 $("#sendshop").html(data.content[0].sname);
    				 $(".shopbulletin-content").html(data.content[0].info);
    				 $(".ng-binding222").html(data.content[0].peiSongFei);
    			}else(
    				alert("数据错误")
    				)
    		
    		}

    })
  

		center($("#show2222"));
		
//div居中函数
   function center(aaa){
   	aaa.css("left", ($(window).width() - aaa.outerWidth()) / 2).css("top", ($(window).height() - aaa.outerHeight()) / 2);

   }

   $("#shopEM").on("click",".decrease",function(){
   	if($(this).closest(".foods").find(".count").html() >= 1){
   		$(this).closest(".foods").find(".count").html(Number($(this).closest(".foods").find(".count").html())-1);
   		}	
   		bb($(this).closest(".foods").index(),$(this).closest(".foods").find(".count").html());
   }).on("click",".increase",function(){
   		$(this).closest(".foods").find(".count").html(Number($(this).closest(".foods").find(".count").html())+1);
   		bb($(this).closest(".foods").index(),$(this).closest(".foods").find(".count").html());
   })

    function bb(a,b){
    	var cookieStr = $.cookie("goods");
		var arr = eval(cookieStr);
		arr[a].num=b;
		$.cookie("goods", JSON.stringify(arr), {expires: 7});
		car();
		showprice();
    }
        showprice();
    function showprice(){
    	var cookieStr = $.cookie("goods");
		var arr = eval(cookieStr);
		var sum = 0;
		if(arr != null){
			for(var i = 0;i<arr.length;i++){
			sum = sum+parseInt(arr[i].num)*parseInt(arr[i].price);
			}
		$("#shoem").html((sum+Number($(".price").html())));
	}else{
		$("#shoem").html(0);
	}
    }
    $("#empty1").on("click",function(){
    	window.location.href="www.baidu.com"
    })

})