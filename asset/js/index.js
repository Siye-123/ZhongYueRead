// nav的jquery 
let main = $("#nav-main");
let main_hidden = $("#nav-sec");
main.hover(function(){
    main_hidden.stop(true).slideDown("fast")
},function(){
    main_hidden.slideUp(100)
})