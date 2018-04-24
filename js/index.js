window.onload=function(){
	headerScroll();

	cutDownTime();

	banner();
}
function headerScroll(){
	var headerDom=document.querySelector('.jd_header');
	var navDom=document.querySelector('.jd_nav');
	var maxDistance=navDom.offsetTop + navDom.offsetHeight;
	headerDom.style.backgroundColor='rgba(201,21,35,0)';
	
	
	window.onscroll=function(){
		var scrollDistance=window.document.documentElement.scrollTop;
		
		var percent=scrollDistance/maxDistance;
		
		if(percent>1){
			percent=1;
		}
		headerDom.style.backgroundColor='rgba(201,21,35,'+percent+')';
	}

}

function cutDownTime(){
	var totalHour=3;
	var totalSec=3*60*60;
	totalSec++;
	var liArr=document.querySelectorAll('.content_top1 li');
	var timeId=setInterval(function(){
		if(totalSec<=0){
			clearInterval(timeId);
			console.log("活动一结束");
			return;
		}
		totalSec--;
		var hour=Math.floor(totalSec/3600);
		var minute=Math.floor(totalSec%3600/60);
		var sec=totalSec % 60;

		liArr[0].innerHTML=Math.floor(hour/10);
		liArr[1].innerHTML=hour%10;

		liArr[3].innerHTML=Math.floor(minute/10);
		liArr[4].innerHTML=minute%10;

		liArr[6].innerHTML=Math.floor(sec/10);
		liArr[7].innerHTML=sec%10;
	},1000)
}

function banner(){
	var width=document.body.offsetWidth;

	var moveUl=document.querySelector(".banner_images");
	moveUl.style.transition='all .3s';
	var indexLiArr=document.querySelectorAll('.banner_index li');
	var index=1;
	timeId=setInterval(function(){
		moveUl.style.transition='all .3s';
		index++;
		moveUl.style.transform='translateX('+index*width*-1+'px)';
	},1000);
	moveUl.addEventListener('webkitTransitionEnd',function(){
		console.log('过度结束');
		if(index>8){
			index=1;
			moveUl.style.transition="";
			moveUl.style.transform='translateX('+index*width*-1+'px)';
		}else if(index<1){
			index=8;
		}
		for(var i=0;i<indexLiArr.length;i++){
			indexLiArr[i].className="";
		}
		indexLiArr[index-1].className="current";
	});
var startX=0;
var moveX=0;
var distanceX=0;
moveUl.addEventListener('touchstart',function(event){
	clearInterval(timeId);
	moveUl.style.transition='';
	startX=event.touches[0].clientX;
})

moveUl.addEventListener('touchmove',function(event){
	moveX=event.touches[0].clientX-startX;
	moveUl.style.transform='translateX('+(moveX+index*width*-1)+'px)';
})

moveUl.addEventListener('touchend',function(event){
	var maxDistance=width/3;
	if(Math.abs(moveX)>maxDistance){
		if(moveX>0){
			index--;
		}else{
			index++;
		}
		moveUl.style.transition='all .3s';
		moveUl.style.transform='translateX('+(index*width*-1)+'px)';
	}else{
		moveUl.style.transition='all .3s';
		moveUl.style.transform='translateX('+(index*width*-1)+'px)';
	}
	timeId=setInterval(function(){
		moveUl.style.transition='all .3s';
		index++;
		moveUl.style.transform='translateX('+index*width*-1+'px)';
	},1000);
})

} 


 