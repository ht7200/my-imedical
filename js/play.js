
$(function(){
	
	var i=0;//第i张图片
	var size=$(".banner .imgs li").size();	
	$(".banner .imgs li").first().addClass("on");

	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move()
	},4000)
	
	
	/*对banner定时器的操作*/
	// $(".banner").hover(function(){
	// 	clearInterval(t);
	// },function(){
	// 	t=setInterval(function(){
	// 		i++;
	// 		move()
	// 	},2000)
	// })
	
	
	
	/*向左的按钮*/
	$(".banner .btn_l").click(function(){
		i--;
		move();	
	})
	
	
	
	/*向右的按钮*/
	$(".banner .btn_r").click(function(){
		i++;
		move()				
	})
	
	
	
	
	
	
	function move(){
		
		if(i==size){
			i=0;
			$(".banner  .imgs li").eq(i).addClass("on").siblings().removeClass("on");
			$(".banner .imgs li").eq(i).css({opacity:0.1}).animate({opacity:1},600)	
		}
		
		
		else if(i==-1){
			i=size;
			$(".banner .imgs li").eq(i).addClass("on").siblings().removeClass("on");
			$(".banner .imgs li").eq(i).css({opacity:0.1}).animate({opacity:1},600)
		}
		
		else {
			$(".banner .imgs li").eq(i).addClass("on").siblings().removeClass("on");
			$(".banner .imgs li").eq(i).css({opacity:0.1}).animate({opacity:1},600)
		}
	//	$(".banner .imgs").stop().animate({left:-i*liLenth},600)	

					
	}
	
})
