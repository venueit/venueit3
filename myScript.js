window.onload = function(){
/*==============Плэй Видио=================*/
	var video = document.getElementsByTagName('video')[0],
	play = document.getElementById('play');	
	play.onclick = function(){
		video.play();
		play.style.opacity = 0;
	}

/*=============Бутерброд Меню===============*/

	var byterbrod = document.getElementById('byterbrod');
	var span = document.getElementById('span');
	var nav = document.getElementById('navigaciya');
	byterbrod.addEventListener('click',function(e){
		e = e || window.event;
		e.target;
		var style = getComputedStyle(nav);
		console.log(document.body.clientWidth)
		if(style.height == '30px'){
			nav.style.height = 260 +'px';
		}else{
			nav.style.height = '';
		};
		console.log(e)
	},false);
/*==================Скролл к якорю=====================*/
	var scrolMemory = 0;
	window.onscroll = function(){
		scrolMemory = window.pageYOffset || document.documentElement.scrollTop;
	}
	var menu = document.getElementById('menu');
	var offsetTopPx,
	scrollTOBY = 50;
	var timerId2;
	menu.addEventListener('click', function(e){
		e = e || window.event;
		e.target;
		var section = document.getElementsByTagName('section');
		if(e.target.hasAttribute('href')){
			e.preventDefault();
			for(var i = 0; i < section.length; i++){
				if(section[i].id == e.target.getAttribute('href')){
					offsetTopPx = section[i].offsetTop;
					if(scrolMemory < offsetTopPx){
							timerId2 = setInterval(function(){
							window.scrollBy(0, scrollTOBY);
							delayEto();
						},10);
					};
				};
			};
		};
	},false);
	function delayEto(){
		if(scrolMemory >= offsetTopPx - 50){
			clearInterval(timerId2);
			console.log('aa')
		};
	}
}
	




/*if(scrolMemory < offsetTopPx){
						var timerId2 = setInterval(function(){
							window.scrollBy(0, scrollTOBY);
						},50);
					}else{
						clearInterval(timerId2);
						console.log('aa')
					};*/