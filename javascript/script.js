


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

$(".front").clickfunction();{
    $(".front").slideDown("1000").hide("1500");
    $("1000").show("1500");
}
$(".back").clickfunction();{
 $(".back").slideUp();
 $(".front").slideDown();
}