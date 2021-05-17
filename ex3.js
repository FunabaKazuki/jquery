"use strict";
$(function () {
  alert("HELLO WORLD"); //ポップアップで表⽰
  console.log("hello world"); //コンソールに表⽰

  $("#show").on("click", function () {
    $("#nameshow").text("船場");
  });
  $("#show").on("click", function () {
    let targetText = document.getElementById('nameshow');
    if(targetText.style.color=='blue'){
        $("#nameshow").css("color","red");
    }else{
    $("#nameshow").css("color","blue");
    }
  });


  $("#hobby").on("change",function(){
   
    if($("#hobby").val()==1){
        $("#try").css("display","block");
        $("#other").css("display","none");
    }else if($("#hobby").val()==2){
        $("#other").css("display","block");
        $("#try").css("display","none");
    }else if($("#hobby").val()==0){
        $("#other").css("display","none");
        $("#try").css("display","none");
        
    }
  });


});
