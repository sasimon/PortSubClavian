/* PortSubClavian.js by Stuart Simon for Tactuum
PortSubClavian image map requested by AquaGuard */
$(".list").wrap("<div></div>").each(function(i,e) {
		$(e).prepend('<th class="listNumber">' + (i + 1) + '-</th>');
	});
/* Global variable */
//var mapNode = $("#psc_changer").clone(true);

/* Setup */
$(document).ready(function(e) {
	// Event handlers delegated at start
	$(document).on("click","#step1",function (e) {
		//$("#step1").remove();
		$("#close").remove();
		$("img").attr("src","step1.png");
		$("#psc_changer").append('<area class="close" shape="rect" coords="200,0,280,100" href="#" id="close"/>');
		e.stopPropagation();
	});
	$(document).on("click","#step2",function (e) {
		//$("#step2").remove();
		$("#close").remove();
		$("img").attr("src","step2.png");
		$("#psc_changer").append('<area class="close" shape="rect" coords="50,240,240,320" href="#" id="close" />');
		e.stopPropagation();
	});
	$(document).on("click","#step3",function (e) {
		//$("#step3").remove();
		$("#close").remove();
		$("img").attr("src","step3.png");
		$("#psc_changer").append('<area class="close" shape="rect" coords="50,0,190,100" href="#"  id="close"/>');
		e.stopPropagation();
	});
	$(document).on("click","#step4",function (e) {
		//$("#step4").remove();
		$("#close").remove();
		$("img").attr("src","step4.png");
		$("#psc_changer").append('<area class="close" shape="rect" coords="100,175,250,290" href="#"  id="close"/>');
		e.stopPropagation();
	});
	$(document).on("click",".close",function (e) {
		$(".close").remove();
		$("img").attr("src","default.png");
		//$("#psc_changer").replaceWith(mapNode.clone(true));
	});
	
		
});
	
