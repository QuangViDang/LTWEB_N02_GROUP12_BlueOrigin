popup = {
    init: function(){
      $('figure').click(function(){
        popup.open($(this));
      });
      
      $(document).on('click', '.popup img', function(){
        return false;
      }).on('click', '.popup, .close', function(){
        popup.close();
      })
    },
    open: function($figure) {
      
      $popup = $('<div class="popup" />').appendTo($('body'));
      $fig = $figure.clone().appendTo($('.popup'));
      $('.close, .download').show();
     
      
      src = $('img', $fig).attr('src');

    $('.popup').addClass('pop');
    },
// Đóng popup khi nút đóng được nhấp
close: function(){
    $('.popup').removeClass('pop');
    $('.close, .download').hide();
    $('.popup').remove()
   
  }
  
}
  popup.init()