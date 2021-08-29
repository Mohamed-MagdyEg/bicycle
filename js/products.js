$(document).ready(function(){
    $("#specif").click(function(){
        $("#specif").css({"backgroundColor":"black","color":"white"});
        $("#desc").css({"backgroundColor":"white","color":"black"});
        $(".descontain,.descontain2").css({"display":"none"});
        $(".descontain3,.descontain4").css({"display":"flex"});
    })
    $("#desc").click(function(){
        $("#desc").css({"backgroundColor":"black","color":"white"})
        $("#specif").css({"backgroundColor":"white","color":"black"})
        $(".descontain,.descontain2").css({"display":"flex"});
        $(".descontain3,.descontain4").css({"display":"none"});
    })
    $("#menu").click(function(){
        $(".topleft").slideToggle(700).css({"display":"flex"});
        
    })
    $("#close").click(function(){
        $(".topleft").slideUp(700);
    })
    
    var addbtn= document.querySelectorAll("#plus");
    subbtn=document.querySelectorAll("#sub");
   
    
})
var inp= document.getElementById("inp").value;
function addd(){
    
    inp++;     
    document.getElementById("inp").value = inp;
}    
function sub(){
    document.getElementById("inp").value = inp;
    inp--;
    if(inp <1){
        inp=1;
    }     
    
}    
$("#products").click(function(){
    window.open("products.html")
  })
  $("#home").click(function(){
    window.open("bike.html")
  })
  $("#contact").click(function(){
    $("html,body").animate({
        scrollTop:$(".contact").offset().top
    },2000);
});