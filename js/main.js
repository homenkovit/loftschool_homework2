//SIDEBAR

jQuery( document ).ready(function( $ ) {

  $('.sidebar__main_a').on('click', function(e) {

    var $this = $(this);

    if ( $this.siblings('.sidebar__sub_ul').length === 0 ) return;
    e.preventDefault();

    if( $this.hasClass('sidebar__main-active') ) {
      $this.siblings().slideUp();
      $this.removeClass('sidebar__main-active');
    }
    else {
      $this.siblings().slideDown();
      $this.addClass('sidebar__main-active');
    }
  });
});