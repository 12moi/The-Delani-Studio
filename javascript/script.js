

// user interface logic

$(document).ready(function(){
  $("#img_1").click(function(){
     $("#content1").css("bold","center");
    $("#img_1").toggle();
      $("#one").toggle();
       $("#one").click(function(){
        $("#one").hide();
        $("#img_1").show();
       });
  });
});
$(document).ready(function(){
  $("#img_2").click(function(){
   $("#content1").css("bold","center");
    $("#img_2").toggle();
      $("#two").toggle();
      $("#two").click(function(){
      $("#two").hide();
      $("#img_2").show();
    });
  });
});
$(document).ready(function(){
  $("#img_3").click(function(){
     $("#content2").css("bold","center");
    $("#img_3").toggle();
      $("#three").toggle();
       $("#three").click(function(){
        $("#three").hide();
        $("#img_3").show();
       });
  });
});




$('#work').mouseover(function () {
  $('#overlay').show();
}).mouseout(function () {
  $('#overlay').hide();
});
$('#work2').mouseover(function () {
  $('#overlay2').show();
}).mouseout(function () {
  $('#overlay2').hide();
});
$('#work3').mouseover(function () {
  $('#overlay3').show();
}).mouseout(function () {
  $('#overlay3').hide();
});
$('#work4').mouseover(function () {
  $('#overlay4').show();
}).mouseout(function () {
  $('#overlay4').hide();
});
$('#work5').mouseover(function () {
  $('#overlay5').show();
}).mouseout(function () {
  $('#overlay5').hide();
});
$('#work6').mouseover(function () {
  $('#overlay6').show();
}).mouseout(function () {
  $('#overlay6').hide();
});
$('#work7').mouseover(function () {
  $('#overlay7').show();
}).mouseout(function () {
  $('#overlay7').hide();
});
$('#work8').mouseover(function () {
  $('#overlay8').show();
}).mouseout(function () {
  $('#overlay8').hide();
});

   
// Business logic

$(document).ready(function(event){
  event.preventDefault();
    $(".myform").submit(function(e){
        e.preventDefault(); 
    })
        var name=$("input#mce-NAME").val();
        var email=$("input#mce-EMAIL").val();
        var message=$("input#comment").val();
    if($("input#mce-NAME").val() && $("input#mce-EMAIL").val()){
        alert((name + ", We have received your message. Thank you for contacting us!"));
    }
    else{
        alert("Please enter your name and email!");
    }
})
    

   