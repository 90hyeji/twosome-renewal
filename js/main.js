// JavaScript Document



$(".mainS ul").bxSlider({
		auto : true,
		controls : false
});


$(".bsmenu ul").bxSlider({
    auto : true,
    maxSlides : 4,
    slideWidth : 228,
    slideMargin : 36,
    pager : false,
    speed : 2000,
    pause : 3000
});

$(".brandstory ul").bxSlider({
    controls : false,
    speed : 2000,
    pause : 3000
});


$(".gnb").mouseenter(function(){
	// #header에 .over가 추가
	$("#header").addClass("over");
	// .sunBg 보임.
	$(".subbg").stop().slideDown(400);	
}).mouseleave(function(){
	//#header에 .over가 삭제
	$("#header").removeClass("over");	
	// .sunBg 안보임.
	$(".subbg").stop().slideUp(400);	
}); 


// 서브메뉴
$(".gnb .d1").mouseenter(function(){
	// 현재 마우스를 올린 .d1에 포함된 .sub가 보여짐.	
	$(this).find(".sub").stop().fadeIn(400);
}).mouseleave(function(){
	$(this).find(".sub").stop().fadeOut(400);
});