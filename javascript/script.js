



$(document).ready(function(){
    $("#work1").mouseover(function(){
      $(".overlay").show();
    }).mouseout(function(){
      $(".overlay").hide();
    });
  });




$(document).ready(function() {
    $("#development1").click(function() {
    //  $("#design2").css("bold","center");
      $("#development1").toggle('');
      $("#development2").show('');
      
    });
  });
  $("#development2").click(function(){
    $("#development2").hide('');
    $("#development1").toggle('');
  });
  


$(document).ready(function(){
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
    

   