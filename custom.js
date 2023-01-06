
jQuery(document).ready(function(){

  jQuery(".main-menu .bar").click(function(){

      jQuery(".main-menu ul").slideToggle();
   });

  jQuery(window).resize(function(){

     var screenWidth= jQuery(window).width();
     if(screenWidth> 767){
     	jQuery(".main-menu ul").show();
     }
     else{
     	jQuery(".main-menu ul").hide();
     }
   });

    jQuery(".main-menu ul li").click(

    	function(){
      jQuery(this).children("ul").slideToggle(500, "easeOutQuad");
    });
 
    jQuery(".main-menu ul ul").parent("li").children("a").append( ' <i class="fa fa-angle-down"></i>');


   jQuery(".main-menu ul").find("logo").css('text-align','right');
   
   
   jQuery('.sk1').pieChart({
	     barColor: '#16BEA3',
		 lineWidth: 13,
		 size: '150',
	   
   }); 
   jQuery('.sk2').pieChart({
	     barColor: '#e74c3c',
		 lineWidth: 13,
		 size: '150', 
   });
		 jQuery('.sk3').pieChart({
	     barColor: '#f1c40f',
		 lineWidth: 13,
		 size: '150',
	   
   });
   
    jQuery('.sk4').pieChart({
	     barColor: '#d35400',
		 lineWidth: 13,
		 size: '150',
	   
   });
   
   var mixingExist =  mixitup('.portfolio-detials');
   
	   $('.carousel').carousel({
	  interval: 2000
	});

});
   

