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
//  let targetText = document.getElementById('nameshow');
 // if(targetText.style.color=='blue'){
 //   $("#show").on("click", function () {
 //      $("#nameshow").css("color","red");
 //     }); 
 // }

});
