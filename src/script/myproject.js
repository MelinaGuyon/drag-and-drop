$( document ).ready(function() {

	// DRAG AND DROP
    
   function dnd() {
	    $(".draggable").draggable({

        appendTo: "body",
        helper: "clone"

      });

	    $(".droppable").droppable({
	      activeClass: "waitingDrop", // use this class when I'am dragging
	      hoverClass: "dropping", // use this class when I'm going to drop

        drop: function(event, ui) {

          // pour pouvoir changer son emplacement 
          if( $(ui.helper).hasClass( 'dropped' ) ) {
            $(ui.helper).remove();
          }


          $( "<li>" )  
          .addClass('dropped')
          .addClass('ui-state-default')
          .text( ui.draggable.text() )
          .appendTo( this );

          $('.sortable').sortable();

          $( ".sortable" ).disableSelection();

        }
        
	    });

      $(".delete").droppable({
        accept: ".dropped",
        activeClass: "waitingDrop",

        drop: function (event, ui){
          
          $(ui.draggable).remove();
        }

      }); 

  	}

  dnd();

  $('.middle').click(function(){
      $('.second').toggleClass('second-hidden'); 
  });

   $('.middle2').click(function(){
      $('.second').toggleClass('second-hidden'); 
  });



  //  CANVAS

  $('.button').click(function() {

    $('.pop-up').css({ display : 'block'});
    $('.choice').css({ display : 'block'});

    $('.button').hide();
    
    html2canvas(document.querySelector('.first'), {
      onrendered: function(canvas) {
        $('.pop-up').append('<img class="result" src="'+ canvas.toDataURL() +'" />');
      },
    width: $('.first').width(),
    height: $('.first').height()
    });

    $('.pop-up').css({ margin : '2% auto 50% auto'});

   
  });

  $('.play').click(function(){

    $('.second').toggleClass('second-hidden');
    $('.pop-up').css({ display : 'none'});
    $('.choice').css({ display : 'none'});
    $('.dropped').remove();
    $('.button').show();

  });


  // SCROLLBAR

  (function($){
    $(window).load(function(){
      $(".content").mCustomScrollbar({
        scrollInertia:0,
        contentTouchScroll: false
      });
    });
  })(jQuery);


});