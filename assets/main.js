$(function() {
  
    var slideCount =  $(".slider ul li").length;
    var slideWidth =  $(".slider ul li").width();
    var slideHeight =  $(".slider ul li").height();
    var slideUlWidth =  slideCount * slideWidth;
    
    $(".slider").css({"max-width":slideWidth, "height": slideHeight});
    $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
    $(".slider ul li:last-child").prependTo($(".slider ul"));
    
    function moveLeft() {
      $(".slider ul").stop().animate({
        left: + slideWidth
      },100, function() {
        $(".slider ul li:last-child").prependTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    function moveRight() {
      $(".slider ul").stop().animate({
        left: - slideWidth
      },100, function() {
        $(".slider ul li:first-child").appendTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    
    $(".next").on("click",function(){
      moveRight();
    });
    
    $(".prev").on("click",function(){
      moveLeft();
    });
    
    
  });




$(document).ready(function(){
  
  $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
  });
 
  $('.three').click(function(){
      if($('.three').hasClass("active")){
        closeMenu()
      }else{
        openMenu()
      }
});


function openMenu(){
    $('.three').addClass("active");
    $('.drawer-menu').animate(
      {
        width: "20vw",
        height:"100vh"
      },'slow')

   $(".three").animate(
    {
        marginRight : '10vw'
    },'slow')

  $(".first-logo").css({
    display : "none"
  
  })
}
})
function closeMenu() {
  $('.three').removeClass("active")
  $('.drawer-menu').animate(
    {
      width: "0",
      height:"100vh"
    },100)
    $(".first-logo").css({
      display : "flex"
    
    })
    $(".three").animate(
      {
          marginRight : '0vw'
      },'slow')
}

