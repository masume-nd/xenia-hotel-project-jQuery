$(document).ready(function () {
  $(function () {
    var slideCount = $(".slider ul li").length;
    var slideWidth = $(".slider ul li").width();
    var slideHeight = $(".slider ul li").height();
    var slideUlWidth = slideCount * slideWidth;

    $(".slider").css({ "max-width": slideWidth, height: slideHeight });
    $(".slider ul").css({ width: slideUlWidth, "margin-left": -slideWidth });
    $(".slider ul li:last-child").prependTo($(".slider ul"));

    function moveLeft() {
      $(".slider ul")
        .stop()
        .animate(
          {
            left: +slideWidth,
          },
          100,
          function () {
            $(".slider ul li:last-child").prependTo($(".slider ul"));
            $(".slider ul").css("left", "");
          }
        );
    }
    $('.homedark').click(function(){
        $('body').css({
          backgroundColor: '#171720'
        })
    });
    function moveRight() {
      $(".slider ul")
        .stop()
        .animate(
          {
            left: -slideWidth,
          },
          100,
          function () {
            $(".slider ul li:first-child").appendTo($(".slider ul"));
            $(".slider ul").css("left", "");
          }
        );
    }

    $(".next").on("click", function () {
      moveRight();
    });

    $(".prev").on("click", function () {
      moveLeft();
    });
  });


    $(".three").click(function () {
      $(".hamburger").toggleClass("is-active");
    });

    $(".three").click(function () {
      if ($(".three").hasClass("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    function openMenu() {
      $(".three").addClass("active");
      $(".drawer-menu").animate(
        {
          width: "25vw",
          height: "100vh",
        },
        "slow"
      );

      $(".three").animate(
        {
          marginRight: "15vw",
        },
        "slow"
      );

      $(".first-logo").css({
        display: "none",
      });

      // $('body').css({
      //   paddingRight :'25vw'
      // })
    }
 
  function closeMenu() {
    $(".three").removeClass("active");
    $(".drawer-menu").animate(
      {
        width: "0",
        height: "100vh",
      },
      100
    );
    $(".first-logo").css({
      display: "flex",
    });
    $(".three").animate(
      {
        marginRight: "0vw",
      },
      "slow"
    );
    // $('body').css({
    //   paddingRight :'-25vw'
    // })
  }

  $.ajax({
    method: "GET",
    URL: 'assets/rooms.json',
    success: ()=>{
       
    }
  })

  $(".button").hover(
    function () {
      $(".text").css("color", "#c5bc58");
      $(".eff").css({
        bottom: "0",
      });
    },
    function () {
      $(".text").css("color", "white");
      $(".eff").css({
        bottom: "-50px",
      });
    }
  );
  const homeMenu = document.getElementById("home");
  $(homeMenu).hover(function () {
    $(".dropdown-content").css("display", "block");
    $("#ep").css("opacity", "1");
  });
  $(".dropdown").mouseleave(() => {
    $(".dropdown-content").css("display", "none");
    $("#ep").css("opacity", ".5");
  });

  $(".moredropbtn").hover(() => {
    $(".moredropdown-content").css("display", "block");
    $("#arrowDown").css("opacity", "1");
    $(".hoverLine").css("width", "33px");
  });
  $(".moredropdown").mouseleave(() => {
    $(".moredropdown-content").css("display", "none");
    $("#arrowDown").css("opacity", ".5");
    $(".hoverLine").css({ width: "0px", transition: "all ease .5s" });
  }); 

  $(".homedark").hover(function () {
    $(".hrDark").css({
      width: "110px",
      transition: "all ease .5s",
      borderBottom: ".5px solid #6fb586",
    });
  });
  $(".homedark").mouseleave(function () {
    $(".hrDark").css({
      width: "0px",
      marginLeft: "0px",
      borderBottom: ".5px solid black ",
      transition: "all ease 2s",
    });
  });
  $(".rooms").hover(() => {
    $(".hoverLineRooms").css({
      width: "40px",
      transition: "all ease .5s",
    });
  });
  $(".rooms").mouseleave(() => {
    $(".hoverLineRooms").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".location").hover(() => {
    $(".hoverLineLocation").css({
      width: "58px",
      transition: "all ease .5s",
    });
  });
  $(".location").mouseleave(() => {
    $(".hoverLineLocation").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".act").hover(() => {
    $(".hoverLineAct").css({
      width: "60px",
      transition: "all ease .5s",
    });
  });
  $(".act").mouseleave(() => {
    $(".hoverLineAct").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".res").hover(() => {
    $(".hoverLineRes").css({
      width: "75px",
      transition: "all ease .5s",
    });
  });
  $(".res").mouseleave(() => {
    $(".hoverLineRes").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".spa").hover(() => {
    $(".hoverLinespa").css({
      width: "22px",
      transition: "all ease .5s",
    });
  });
  $(".spa").mouseleave(() => {
    $(".hoverLinespa").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".contact").hover(() => {
    $(".hoverLineContact").css({
      width: "53px",
      transition: "all ease .5s",
    });
  });
  $(".contact").mouseleave(() => {
    $(".hoverLineContact").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".shop").hover(() => {
    $(".hoverLineShop").css({
      width: "150px",
      transition: "all ease .5s",
    });
  });
  $(".shop").mouseleave(() => {
    $(".hoverLineShop").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".gallery").hover(() => {
    $(".hoverLineGallery").css({
      width: "150px",
      transition: "all ease .5s",
    });
  });
  $(".gallery").mouseleave(() => {
    $(".hoverLineGallery").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".hotel").hover(() => {
    $(".hoverLineHotel").css({
      width: "150px",
      transition: "all ease .5s",
    });
  });
  $(".hotel").mouseleave(() => {
    $(".hoverLineHotel").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".offer").hover(() => {
    $(".hoverLineOffer").css({
      width: "150px",
      transition: "all ease .5s",
    });
  });
  $(".offer").mouseleave(() => {
    $(".hoverLineOffer").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".blog").hover(() => {
    $(".hoverLineBlog").css({
      width: "65px",
      transition: "all ease .5s",
    });
  });
  $(".blog").mouseleave(() => {
    $(".hoverLineBlog").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });

  $(".admin").hover(() => {
    $(".hoverLineAdmin").css({
      width: "150px",
      transition: "all ease .5s",
    });
  });
  $(".admin").mouseleave(() => {
    $(".hoverLineAdmin").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });
  $(".all").hover(() => {
    $(".hoverLineAll").css({
      width: "150px",
      transition: "all ease .5s",
    });
  });
  $(".all").mouseleave(() => {
    $(".hoverLineAll").css({
      width: "0px",
      transition: "all ease .5s",
    });
  });

  $(".button-req").hover(
    function () {
      $(".text-req").css("color", "white");
      $(".eff-req").css({
        bottom: "0",
      });
    },
    function () {
      $(".text-req").css("color", "#6fb586");
      $(".eff-req").css({
        bottom: "-50px",
      });
    }
  );
  $(".buttonShowRooms").hover(
    function () {
      $(".textShowBtn").css("color", "white");
      $(".hiddenBtn").css({
        bottom: "0",
      });
    },
    function () {
      $(".textShowBtn").css("color", "black");
      $(".hiddenBtn").css({
        bottom: "-80px",
      });
    }
  );
});
