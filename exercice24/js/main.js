$("button").click(function(){
    $("#bg").animate({
        marginLeft : "100px",
    }, 3000, function() { 
      console.log("animation terminée !");
    });
});