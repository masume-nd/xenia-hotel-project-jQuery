$(document).ready(function () {
   $(function () {
    let slideCount = $(".slider ul li").length;
    let slideWidth = $(".slider ul li").width();
    let slideHeight = $(".slider ul li").height();
    let slideUlWidth = slideCount * slideWidth;
      
      $(".slider").css({ "max-width": slideWidth, height: slideHeight });
      $(".slider ul").css({ width: slideUlWidth, "margin-left": -slideWidth}); 
      $(".slider ul li:last-child").prependTo($(".slider ul"));

      // console.log($(".slider ul li:last-child"));
      // let currentLi = $(".slider ul:first-child");
     // currentLi.toggleClass('active')

      function moveLeft() {
         // let currentLi = $(".slider ul:first-child");
         // currentLi.toggleClass('active');
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
      const intervalFun =  setInterval(moveRight,6000)

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
    
      // $('.firstImg').mouseenter(
      //    function(){
      //       $(this).addClass('active').siblings('.firstImg').removeClass('active');
      // })
      // $('.firstImg').mouseleave(
      //    function(){
      //       $(this).removeClass('active')
      // })
      // $('.secondImg').hover(
      //    function(){
      //       $(this).addClass('active')
      // })
      // $('.secondImg').mouseleave(
      //    function(){
      //       $(this).removeClass('active')
      // })
      // $('.thirdImg').hover(
      //    function(){
      //       $(this).addClass('active')
      // })
      // $('.thirdImg').mouseleave(
      //    function(){
      //       $(this).removeClass('active')
      // })


      $('.slider-image').mouseenter(()=>{
            clearInterval(intervalFun)
         }
      )
   


//****************************************************************************
      
      $(".next").on("click", function () {
         moveRight();
         console.log($(".UL-slider"));
         $('.UL-slider li').each(function(){
            $(this).addClass('active').siblings().removeClass('active');
            // console.log($(this).hasClass());
            if($(".UL-slider li").hasClass('active')){
               console.log($("hello"));
               $('.slider-txt').animate({
                  marginTop : "300px",
               },'slow')    
            }
         });
      })

      
   //    $(".prev").on("click", function () {
   //       $('.UL-slider li').each(function(){
   //          $(this).addClass('active').siblings().removeClass('active');
   //          moveLeft();
   //    });
   //    if($('.UL-slider li').hasClass('active')){
   //       $('.slider-txt').animate({
   //          marginTop : "300px",
   //       },'slow')    
   //    }
   // })

      // if($('.slider-image').hasClass('.active')){
      //    alert('hello')

         // $('.firstImg > .slider-txt').animate({
         //       marginTop : "300px",
         // },'slow')
         
         // $('.secondImg > .slider-txt').animate({
         //    marginTop : "300px"
         // },'slow')   

         // $('.thirdImg > .slider-txt').animate({
         //    marginTop : "300px"
         // },'slow')

      $(".homedark").click(function () {
         $("body").css({
            backgroundColor: "#171720",
         });
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
         borderBottom: ".5px solid black",
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
   $('#arrival-date').datepicker();
   $('.button-req').click((e) => {
     let reqArrivalDate = new Date($('#arrival-date').val()).getTime(); 
     let reqDepartureDate= new Date( $('#departure-date').val()).getTime(); 
     let numBeds= $('#numOfBed').val(); 
     $.ajax({
         method: "GET",
         url: "assets/rooms.json",
         success: (rooms) => {
           
            rooms.map(Room => {
            let tr = $('<tr></tr>');  
            let from = $('<td></td>').text(Room.from);
            let to = $('<td></td>').text(Room.to);
            let room = $('<td></td>').text(Room.room);
            let bed = $('<td></td>').text(Room.bed);
            tr.append(from,to,room,bed);
            $('.table-body').append(tr);
            $('.modal-container').css({
               display:'block'
            })
            let arrivalDate = new Date(Room.from).getTime();
            let departureDate = new Date(Room.to).getTime();
               if(arrivalDate <= reqArrivalDate && departureDate >= reqDepartureDate && numBeds == Room.bed){
                  room.css({
                     backgroundColor: "yellow"
                  })
                  from.css({
                     backgroundColor: "yellow"
                  })
                  to.css({
                     backgroundColor: "yellow"
                  })
                  bed.css({
                     backgroundColor: "yellow"
                  })
               } 
          })
         //  avilableRooms.map(item =>{
         //    console.log(item);
         //    item.style.backgroundColor = "red"  
         //  })
         
          
         },
      })
   })
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides((slideIndex += n));
}

function currentSlide(n) {
   showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
   if (n > slides.length) {
      slideIndex = 1;
   }
   if (n < 1) {
      slideIndex = slides.length;
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
}

//second carousel
let slideIndexNumber = 1;
// showLastSlider(slideIndexNumber);

// function plusTheSlides(number) {
//    showLastSlider((slideIndexNumber += n));
// }

// function currentSlides(number) {
//    showLastSlider((slideIndexNumber = number));
// }

// function showLastSlider(number) {
//   let index;
//   let slidesAndText = document.getElementsByClassName("textImg trans");
//   let Dots = document.getElementsByClassName("otherdot");
//    if (number > slidesAndText.length) {
//       slidesAndText = 1;
//    }
//    if (number < 1) {
//       slideIndexNumber = slidesAndText.length;
//    }
//    for (index = 0; index < slidesAndText.length; index++) {
//       slidesAndText[index].style.display = "none";
//    }
//    for (index = 0; index < Dots.length; index++) {
//       Dots[index].className = Dots[index].className.replace(" active", "");
//    }
//    slidesAndText[slideIndexNumber - 1].style.display = "block";
//    Dots[slideIndexNumber - 1].className += " active";
// }

