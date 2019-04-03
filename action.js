$("#jobtitle1").click(function(){
    var titlewidth = $("#jobtitle1").width()
    var windowwidth = $(window).width()

    if(titlewidth > windowwidth/2) {
        shrink("#jobtitle1")
        return
    }

    else {
        grow("#jobtitle1")
        return
    }
})
$("#jobtitle2").click(function(){
    var titlewidth = $("#jobtitle2").width()
    var windowwidth = $(window).width()

    if(titlewidth > windowwidth/2) {
        shrink("#jobtitle2")
        return
    }

    else {
        grow("#jobtitle2")
        return
    }
})
$("#jobtitle3").click(function(){
    var titlewidth = $("#jobtitle3").width()
    var windowwidth = $(window).width()

    if(titlewidth > windowwidth/2) {
        shrink("#jobtitle3")
        return
    }

    else {
        grow("#jobtitle3")
        return
    }
})

/*----------------------- helper functions -----------------------------*/
function grow(elem){
    $(elem).animate({
        width: "92%"
    }, 1200)
}

function shrink(elem){
    $(elem).animate({
        width: "30%"
    }, 400)
}

/*------------------- PROJECTS -----------------------*/
$("#doxa").click(function() {
    window.location = "https://github.com/bubble29/doxa";
    return false;
  });

$("#zeppelin").click(function() {
    window.location = "https://github.com/bubble29/zeppelin"; 
    return false;
  });

$("#trilobite").click(function() {
    window.location = "https://github.com/HackTheDeep/trilobitebits_react"; 
    return false;
  });