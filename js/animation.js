var arrImg = document.getElementsByTagName("img");

window.onscroll = function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
	var len=arrImg.length;
	for(var i=0;i<len;i++){
        if(top > (arrImg[i].offsetTop - arrImg[i].offsetHeight*1.3)  ) {　　　　　　　　　　　　
			arrImg[i].style.animation = "key 2s linear .2s forwards";
		}
	}
}



