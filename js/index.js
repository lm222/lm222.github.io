$(document).ready(function(){

// slider

      images = ['images/hand1.png', 'images/hand2.png', 'images/hand3.png'];


      beginNow = setInterval(forwardImage, 4000);


      function currentImageKey() {
          i = jQuery.inArray($('#slideshow').attr('src'), images);
          return i;
      }


      function forwardImage() {
          currentImageKey();
          if (i < images.length - 1) {
              changeImage(i + 1);
          } else {
              changeImage(0);
          }
      }

      function changeImage(i) {
          $('#slideshow').stop().animate({
              opacity: 0,
          }, 200, function() {
              $('#slideshow').attr('src', images[i]);
              $('#holder img').load(function() {
                  $('#slideshow').stop().animate({
                      opacity: 1,
                  }, 200)
              })
          })
      }

      $('#left-a').click(function() {
          clearInterval(beginNow);
          backwardsImage();
      });

      $('#right-a').click(function() {
        clearInterval(beginNow);
        forwardImage();
      });


      function backwardsImage() {
      currentImageKey();
      if (i == 0) {
        changeImage(images.length - 1);
      } else {
        changeImage(i - 1);
      }
      };

      //animate gif on hover

      $(function(){
        $('.img_wrap').hover(function() {
         $(this).toggleClass('animated', 'static');
      })
      });


      //random word

      // $(function(){
      $('#random-word').text("inspiring");

      $('#word').click(function(){
      $.ajax({
        url: 'http://randomword.setgetgo.com/get.php',
        method: 'GET',
        jsonp: 'callback',
        dataType: 'jsonp',
          success: function(data){
            $('#random-word').text(data["Word"]);
          }
        })
      });
      $('#word').click(function(){
        $(".girl").toggleClass('boy', 'girl');
      })

});

