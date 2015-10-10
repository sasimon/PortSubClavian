/* PortSubClavian.js by Stuart Simon for Tactuum
PortSubClavian image map requested by AquaGuard */
$(".list").wrap("<div></div>").each(function(i,e) {
		$(e).prepend('<th class="listNumber">' + (i + 1) + '-</th>');
	});
/* Global variable */
var mapNode = $("#psc_changer").clone(true);

/* Setup */
$(document).ready(function(e) {
	// Event handlers delegated at start
	$(document).on("click","#step1",function (e) {
		$("#step1").remove();
		$("img").attr("src","step1.png");
		$("#psc_changer").append('<area class="close" shape="circle" coords="261,11,10" href="#" />');
		e.stopPropagation();
	});
	$(document).on("click","#step2",function (e) {
		$("#step2").remove();
		$("img").attr("src","step2.png");
		$("#psc_changer").append('<area class="close" shape="circle" coords="178,256,10" href="#" />');
		e.stopPropagation();
	});
	$(document).on("click","#step3",function (e) {
		$("#step3").remove();
		$("img").attr("src","step3.png");
		$("#psc_changer").append('<area class="close" shape="circle" coords="175,10,10" href="#" />');
		e.stopPropagation();
	});
	$(document).on("click","#step4",function (e) {
		$("#step4").remove();
		$("img").attr("src","step4.png");
		$("#psc_changer").append('<area class="close" shape="circle" coords="230,193,10" href="#" />');
		e.stopPropagation();
	});
	$(document).on("click",".close",function (e) {
		$(".close").remove();
		$("img").attr("src","default.png");
		$("#psc_changer").replaceWith(mapNode.clone(true));
	});
	
		
});
	
