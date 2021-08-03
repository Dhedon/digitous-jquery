$("button").click(function(){
    // $("#square").css("width","500px");
    $("#square").animate({
        width: '+=500px'
    }, 3000, function() { 
        console.log("animation terminée !");
    });
});