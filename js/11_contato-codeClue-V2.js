
var desktop = true;

$(function(){
    checaClasses();
    
    $(window).resize(function(){
        checaClasses();
    })

    $(".whats-lateral").hover(function(){
        $(this).toggleClass("show-whats")
    })

    $(".whats-lateral").click(function(){
        $(this).toggleClass("show-whats")
    })

    $(".hamburguer").click(function(){
        $(".menu-mobile").addClass("show-mobile");
    })

    $(".close").click(function(){
        $(".menu-mobile").removeClass("show-mobile")
    });

    $("nav section li, footer article").click(function(){
        if($(".show-sub").length > 0){
            $(this).find("img").first().removeClass("rotate")
            $(this).children(".sub-menu-mobile").slideUp(function(){
                $(this).removeClass("show-sub");
            });
        }else{
            $(this).find("img").first().addClass("rotate")
            $(this).children(".sub-menu-mobile").slideDown(function(){
                $(this).addClass("show-sub");
            });
        }
    })

})


function checaClasses(){
    if($(window).width() < 992 && desktop == true){
        desktop = false;
        $(".menu-desktop").toggleClass("menu-desktop menu-mobile")
        $(".sub-menu").toggleClass("sub-menu sub-menu-mobile")
        $("footer article ul:not(ul:first)").addClass("sub-menu-mobile")
    }
    if($(window).width() > 991 && desktop == false){
        desktop = true;
        $(".menu-mobile").toggleClass("menu-mobile menu-desktop")
        $(".sub-menu-mobile").toggleClass("sub-menu-mobile sub-menu")
        $(".sub-menu").css({"display":""})
        $("footer article ul").removeClass("sub-menu")
    }
}