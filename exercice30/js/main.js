$('.form-control').keyup(function(e){
    if(e.key==='enter')
        {if($(".form-control").val().length>5) $(".form-control").addClass("is-valid")
        else $(".form-control").addClass("is-invalid")}
})