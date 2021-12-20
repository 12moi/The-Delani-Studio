


// function show() {
//     var x = document.getElementById("front");
//     if (x.style.display === "none") {
//       x.style.display = "back";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function show1() {
//     var x = document.getElementById("front");
//     if (x.style.display === "none") {
//       x.style.display = "back";
//     } else {
//       x.style.display = "none";
//     }
//   }

$(document).ready(function(){
    $("#work1").mouseover(function(){
        $("#overlay").show();
    }).mouseout(function(){
        $("#overlay").hide();
    })
})

$(document).ready(function() {
    $("#design1").click(function() {
      $("#design1").slideDown('').hide('');
      $("#design2").show('');
    });
  });
  $("#design2").click(function(){
    $("#design2").slideUp('');
    $("#design1").slideDown('');
  });
