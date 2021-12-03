var arrImg = document.getElementsByTagName("figure");
var imagecontainer = document.querySelector(".picture-group");
var container = document.querySelector(".container");
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!mediaQuery || !mediaQuery.matches) {
	add_animation();
	window.addEventListener("scroll", add_animation);
}

mediaQuery.addEventListener("change", function() {
	if (mediaQuery.matches) {
		window.removeEventListener("scroll", add_animation);
	} 
	else {
		window.addEventListener("scroll", add_animation);
	}
  });


function add_animation(){
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
	var len=arrImg.length;
	for(var i=0;i<len;i++){
        if(window.pageYOffset + window.innerHeight > arrImg[i].offsetTop + 200 ) {　　　　　　　　　　　　
			arrImg[i].style.animation = "key 2s linear 0s forwards";
		}
	}
}

/* top > (arrImg[i].offsetTop - arrImg[i].offsetHeight*1.3) */