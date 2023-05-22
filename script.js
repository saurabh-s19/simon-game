var randomcolorarray=["red","green","blue","yellow"];
var userinput=[];
var randomArray=[];

var started=false;
var level=0;

$(document).keypress(function(){
   if(!started){
    $("h1").text("LEVEL "+level);
    nextSequence();
    started=true;
   }
});

function checkAnswer(index){
 if(randomArray[index]===userinput[index]){
    console.log("success");
    setTimeout(function(){
        nextSequence();
    },1000);
    
 }
 else{
    console.log("fail");
    playSound("wrong");
 }

}


$(".btn").click(function(){
  var inputByUser=$(this).attr("id");
  userinput.push(inputByUser);
  animatePress(inputByUser);
  playSound(inputByUser);

  checkAnswer(userinput.length-1);
});




function nextSequence(){
    level++;
    $("h1").text("LEVEL "+ level);
  var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColour=randomcolorarray[randomNumber];

 
   randomArray.push(randomChosenColour);
   $("#" +randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
   
}

 function playSound(key){
 var audio=new Audio("sounds/"+key+".mp3");
 audio.play();
}

function animatePress(name){
    $("#"+name).addClass("pressed");
    setTimeout(function(){
        $("#"+name).removeClass("pressed");  
    },100);

}

