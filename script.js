
$(function(){
	$('.menu-adaptive').on('click', function(){

   $('.menu-list').slideToggle(300, function(){

   	      if($(this).css('display') === 'none'){
   	      	$(this).removeAttr('style');
   	      }
   });

	});
});