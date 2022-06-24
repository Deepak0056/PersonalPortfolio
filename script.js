$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    // smooth scrolling

//     $('a[href*="#"]').on('click',function(e){
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop : $($(this).attr('href')).offset.top,
//         },
//         500,
//        'linear'
//         );
//      });
  });









// console.log("Welcome to my first JS Work");
// let a= document;
// a= document.all;

// a=document.images;
// a=document.scripts;




// console.log(a);
// // $(document).ready(function(){
//     $('#menu').click(function(){
//         alert("button is clicked.");
//         // $(this).toggleClass('fa-times');
//         // $('header').toggleClass('toggle');
//     });

//     // $(window).on('scroll load', function(){
//     //     $('#menu').removeClass('fa-times');
//     //     $('header').removeClass('toggle');
//     // });

// });

