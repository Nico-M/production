$(function(){
	//cart
	(function(){
		var oSpan = $('#cart');
		var oImg = oSpan.find('img');
		var oDiv = oSpan.find('.cart_detail')
		oSpan.hover(function(){
			oImg.attr('src','imgs/shopcar_orange.gif');
			oDiv.slideDown('fast');

		},function(){
			oImg.attr('src','imgs/shopcart.jpg');
			oDiv.slideUp('fast');

		});
	})();

	//导航弹层
	(function(){

		var arr= [
			{'img':'imgs/ad/pop1.gif','proName':'小米Max','price':'1499元起'},
			{'img':'imgs/ad/pop1.gif','proName':'小米Max','price':'1499元起'},
			{'img':'imgs/ad/pop1.gif','proName':'小米Max','price':'1499元起'}
			];
		
		var aLi = $('.nav_list').find('li');
		var oPop = $('.pop');
		var oUl = $('.pop').find('ul');
		aLi.hover(function(){
			oPop.stop().slideDown();
			$.each(arr,function(i,elem){
				if(i<arr.length-1){
					var $li = $('<li class="after"><a href="#"><img src="'+arr[i].img+'" ><h3>'+arr[i].proName+'</h3><span>'+arr[i].price+'</span></a></li>');
				}else{
					var $li = $('<li><a href="#"><img src="'+arr[i].img+'" ><h3>'+arr[i].proName+'</h3><span>'+arr[i].price+'</span></a></li>');
				}
				
				oUl.append($li);
			});
			

		},function(){
			oPop.stop().slideUp();
			oPop.find('li').remove();
		}); 
	})();

	//导航列表
	(function(){
		var oUl = $('.content_list').find('.list');
		var aLi = oUl.find('li');
		aLi.hover(function(){
			$(this).find('.content_list_detail').show();
		},function(){
			$(this).find('.content_list_detail').hide();
		});
	})();

	//轮播图
	(function(){
		var oUl = $('.pics');
		var aLi = oUl.find('li');
		var iNow = 0;
		var timer = null;
		var aLiIco = $('.pics_ico').find('li')
		
		$('.pre_btn').on('click',function(){
			clearInterval(timer);
			doMove(-1);
			autoPlay();

		});

		$('.next_btn').on('click',function(){
			clearInterval(timer);
			doMove(1);
			autoPlay();
		});

		aLiIco.on('click',function(){
			var Index = $(this).index();
			clearInterval(timer);
			aLi.fadeOut();
			aLi.eq(Index).fadeIn();
			iNow = Index;
			changeIco(iNow);
			autoPlay();

		});

		function autoPlay(){
			clearInterval(timer);
			timer = setInterval(function(){
				doMove(1);
			},3000);
		}

		autoPlay();

		function doMove(num){
			iNow+=num;

			if(iNow<0){
				iNow = aLi.length-1;
			}else if(iNow>aLi.length-1){
				iNow = 0 ;
			}

			aLi.fadeOut();
			aLi.eq(iNow).fadeIn();
			changeIco(iNow);
			
		}

		function changeIco(num){
			aLiIco.attr('class','');
			aLiIco.eq(num).attr('class','active');
		};
	})();
});