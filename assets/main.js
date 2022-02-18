$(document).ready(function () {
   
   $('body').scroll(function(){
      alert("hi")
      $('.return-to-top').css({
         display:"block"
      })
   })
   $(function () {
      let slideCount = $(".slider ul li").length;
      let slideWidth = $(".slider ul li").width();
      let slideHeight = $(".slider ul li").height();
      let slideUlWidth = slideCount * slideWidth;
         
      $(".slider").css({ "max-width": slideWidth, height: slideHeight });
      $(".slider ul").css({ width: slideUlWidth, "margin-left": -slideWidth}); 
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
            $('.slider-txt').css({
               marginTop : "610px",
            })
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
            $('.slider-txt').css({
               marginTop : "610px",
            }) 
      }

      $('.slider-image').mouseenter(()=>{
            clearInterval(intervalFun)
         }
      )
   


//****************************************************************************
      $('.UL-slider li').each(function(){
         $(this).addClass('active').siblings().removeClass('active');
         if($(".UL-slider li").hasClass('active')){
            $('.slider-txt').animate({
               marginTop : "200px",
            },'slow')    
         }
      });

      $(".next").on("click", function () {
         moveRight();
         $('.UL-slider li').each(function(){
            $(this).addClass('active').siblings().removeClass('active');
         });
            if($(".firstImg").hasClass('active')){
               $('.slider-txt').animate({
                  marginTop : "200px",
               },'slow')
               
            }
            else if($(".secondImg").hasClass('active')){
               $('.slider-txt').animate({
                  marginTop : "200px",
               },'slow') 
                

            }else if($(".thirdImg").hasClass('active')){
               $('.slider-txt').css({
                  marginTop : "200px",
               }) 
               $('.slider-txt').fadeToggle("slow"); 
                 
            }
         
      }) 
      $(".prev").on("click", function () {
         moveLeft();
         $('.UL-slider li').each(function(){
            $(this).addClass('active').siblings().removeClass('active');
         });  
            if($(".firstImg").hasClass('active')){
               $('.slider-txt').animate({
                  marginTop : "200px",
               },'slow')
               
            }
            else if($(".secondImg").hasClass('active')){
               $('.slider-txt').animate({
                  marginTop : "200px",
               },'slow') 
                

            }else if($(".thirdImg").hasClass('active')){
               $('.slider-txt').css({
                  marginTop : "200px",
               }) 
               $('.slider-txt').fadeIn(3000); 
                 
            }

        
   })

      $(".homedark").click(function () {
         $("body").css({
            backgroundColor: "#171720" ,
         });
      });
      $(".homelight").click(function () {
         $("body").css({
            backgroundColor: "#f4f4f4" ,
         });
      });
   });

   $(".mainBtn").hover(
      function () {
        $(".maintag").css("color", "black");
        $(".hiddenPart").css({
          bottom: "0",
        });
      },
      function () {
        $(".maintag").css("color", "white");
        $(".hiddenPart").css({
          bottom: "-40px",
        });
      }
    );
    $(".mainBtn2").hover(
      function () {
        $(".maintag2").css("color", "black");
        $(".hiddenPart2").css({
          bottom: "0",
        });
      },
      function () {
        $(".maintag2").css("color", "white");
        $(".hiddenPart2").css({
          bottom: "-40px",
        });
      }
    );
    $(".mainBtn3").hover(
      function () {
        $(".maintag3").css("color", "black");
        $(".hiddenPart3").css({
          bottom: "0",
        });
      },
      function () {
        $(".maintag3").css("color", "white");
        $(".hiddenPart3").css({
          bottom: "-40px",
        });
      }
    );

   $(".three").click(function () {
      $(".hamburger").toggleClass("is-active");
   });

   $(".three").click(function () {
      if ($(".three").hasClass("Active")) {
         closeMenu();
      } else {
         openMenu();
      }
   });


   function openMenu() {
      $(".three").addClass("Active");
      $(".drawer-menu").animate(
         {
            width: "25vw",
            height: "100%",
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

      $('body').css({
        position : "fixed"

      })
   }

   function closeMenu() {
      $(".three").removeClass("Active");
      $(".drawer-menu").animate(
         {
            width: "0",
            height: "100%",
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
      $('body').css({
         position : "relative"
       })
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
      $("#ep").css("visibility", "visible");
   });
   $(".dropdown").mouseleave(() => {
      $(".dropdown-content").css("display", "none");
      $("#ep").css("visibility", "hidden");
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
   $(".reserve").hover(() => {
      $(".hoverLineReserve").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".reserve").mouseleave(() => {
      $(".hoverLineReserve").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
  
    $(".grid").hover(() => {
      $(".hoverLineGrid").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".grid").mouseleave(() => {
      $(".hoverLineGrid").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".roomLi").hover(() => {
      $(".hoverLineLi").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".roomLi").mouseleave(() => {
      $(".hoverLineLi").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".blog").hover(() => {
      $(".hoverLineMasonry").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".blog").mouseleave(() => {
      $(".hoverLineMasonry").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
  
    $(".test").hover(() => {
      $(".hoverLineTest").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".test").mouseleave(() => {
      $(".hoverLineTest").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".shortCods").hover(() => {
      $(".hoverLineShort").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".shortCods").mouseleave(() => {
      $(".hoverLineShort").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".sliderRoom").hover(() => {
      $(".hoverLineSlider").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".sliderRoom").mouseleave(() => {
      $(".hoverLineSlider").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".sevice").hover(() => {
      $(".hoverLineRService").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".sevice").mouseleave(() => {
      $(".hoverLineRService").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".view").hover(() => {
      $(".hoverLineView").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".view").mouseleave(() => {
      $(".hoverLineView").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
  
    $(".singleView").hover(() => {
      $(".hoverLineSingleView").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".singleView").mouseleave(() => {
      $(".hoverLineSingleView").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".singleroom").hover(() => {
      $(".hoverLineSingle").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".singleroom").mouseleave(() => {
      $(".hoverLineSingle").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".post").hover(() => {
      $(".hoverLinePost").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".post").mouseleave(() => {
      $(".hoverLinePost").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".Fullscreen").hover(() => {
      $(".hoverLineFull").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".Fullscreen").mouseleave(() => {
      $(".hoverLineFull").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".err").hover(() => {
      $(".hoverLineErr").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".err").mouseleave(() => {
      $(".hoverLineErr").css({
        width: "0px",
        transition: "all ease .5s",
      });
    });
    $(".theme").hover(() => {
      $(".hoverLineTheme").css({
        width: "150px",
        transition: "all ease .5s",
      });
    });
    $(".theme").mouseleave(() => {
      $(".hoverLineTheme").css({
        width: "0px",
        transition: "all ease .5s",
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
            bottom: "-40px",
         });
      }
   );
   $('#arrival-date').datepicker();
   $('#departure-date').datepicker();

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
         },
      })
   })
});
$(".close-modal").click(function(){
   $(".modal-container").empty()
   location.reload();
})
let slideIndex = 1;
let interval_slides = setInterval(showSlides,1000)
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
showLastSlider(slideIndexNumber);

function plusTheSlides(number) {
   showLastSlider((slideIndexNumber += n));
}

function currentSlides(number) {
   showLastSlider((slideIndexNumber = number));
}

function showLastSlider(number) {
  let index;
  let slidesAndText = document.getElementsByClassName("textImg trans");
  let Dots = document.getElementsByClassName("otherdot");
   if (number > slidesAndText.length) {
      slidesAndText = 1;
   }
   if (number < 1) {
      slideIndexNumber = slidesAndText.length;
   }
   for (index = 0; index < slidesAndText.length; index++) {
      slidesAndText[index].style.display = "none";
   }
   for (index = 0; index < Dots.length; index++) {
      Dots[index].className = Dots[index].className.replace(" active", "");
   }
   slidesAndText[slideIndexNumber - 1].style.display = "block";
   Dots[slideIndexNumber - 1].className += " active";
}

