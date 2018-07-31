$(document).ready(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */

	
	$('form').submit(function(e){
		e.preventDefault();
		var query = $(this).serializeArray();
		$.ajax({
				type: 'POST',
				url: '/order',
				data: query,
				success: function(res){
					var json;
					try{
						json = jQuery.parseJSON(res);
						alert(json.one);
					}
					catch(res){
						alert('ERROR 1');
					}
			},
			error: function(res){
					alert('ERROR 2');
			}
		});
	});
	
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

	/* sliders */

$('.gallery').slick({
  dots: false,
  infinite: true,
  speed: 200,
  fade: false,
  cssEase: 'linear'
}); 
    
$('.reviews').slick({
  dots: false,
  infinite: true,
  speed: 200,
  fade: false,
  cssEase: 'linear'
});    

  
$(".item1").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item2").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item3").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item4").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item5").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item6").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item6").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item7").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item8").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

$(".item9").magnificPopup({
  type : 'image',
  gallery : {
      enabled : true //true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });


});
