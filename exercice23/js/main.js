$("button").click(function(){
    $("#square").animate({
        // position : "relative",
        right : 0,
        bottom : 0,
    }, 3000, function() { 
      console.log("animation terminée !");
    });
});