/* loding */
$(window).on('load',function() {
    $('#status').fadeOut();
	$('#loding').delay(500).fadeOut('slow');
});
/*progress bar */
$(function(){
	$("#progress_bar_element").waypoint(function(){
		$(".progress-bar").each(function(){
		$(this).animate({
			width:$(this).attr("aria-valuenow")+"%"
		},1000);
	});
		this.destroy();
	},{
		offset:'bottom-in-view'
	});
});
/* blog scrool*/ 
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
		900:{
            items:1
        },
        1200:{
            items:2
        }
    }
});
// nav scrool
$(function(){
	showHidenac();
	$(window).scroll(function(){
		showHidenac();
	});
	function showHidenac(){
		if($(window).scrollTop()>50){
			$("nav").addClass("white-nav-top");
		} else{
			$("nav").removeClass("white-nav-top");
		}  
	}
});
$(function(){
	$("a.Smooth-scroll").click(function(event){
		event.preventDefault();
		var section_id=$(this).attr("href");
		$("html,body").animate({
			scrollTop: $(section_id).offset().top -60
		},1250, "easeInOutExpo");
	});
});
//mobile menu
 $(function(){
	//show mobile menu
	 $("#mobile-nav-open-btn").click(function(){
		$("#mobile-nav").css("height","100%");
	 });
	 //hide
	 $("#mobile-nav-close-btn , #mobile-nav a").click(function(){
		$("#mobile-nav").css("height","0%");
	 });
 });
//animation
$(function(){
	new WOW().init();
});

$(window).on('load',function(){
	$("#home-heading-1").addClass("animated fadeInDown");
	$("#down-arrow i").addClass("animated fadeInDown infinite");
	$("#home-btn").addClass("animated zoomIn");	
});











