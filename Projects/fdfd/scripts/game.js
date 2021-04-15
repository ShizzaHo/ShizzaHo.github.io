var level = 0;

window.onload = function() {
    $('.paimon_eat_2').hide();
    $('.level_base').hide();
    $(".loader").remove()
    $('.menu').hide();
    setTimeout(game_loaded, 1000)

    //$(".page_myaccount").hide();
    $(".page_paimon").hide();
    $(".page_top").hide()
    $(".page_eventlist").hide()
    $(".page_info").hide()

    charge_page(2)

    debug_food();
}

function game_loaded(){
    $(".page_myaccount").show();
    $(".loader").addClass( "loaderout" );
    setTimeout(game_loaded2, 999)
}

function game_loaded2(){
    $(".loader").remove()
}

function open_menu() {
    $('.menu').show();
    $(".menu").addClass( "menuback_up_a" );
    $(".menu_panel").addClass( "menu_up_a" );
}

function close_menu() {
    //$('.menu').hide();
    $(".menu").addClass( "menuback_down_a" );
    $(".menu_panel").addClass( "menu_down_a" );
    setTimeout(close_menu2, 550)
}

function close_menu2() {
    $(".menu").removeClass( "menuback_down_a" );
    $(".menu_panel").removeClass( "menu_down_a" );
    $(".menu").removeClass( "menuback_up_a" );
    $(".menu_panel").removeClass( "menu_up_a" );
    $('.menu').hide();
}

function charge_page(index){
    if (index == 1){
        $(".page_myaccount").show();
        $(".page_paimon").hide();
        $(".page_top").hide()
        $(".page_eventlist").hide()
        $(".page_info").hide()
    }
    else if (index == 2){
        $(".page_myaccount").hide();
        $(".page_paimon").show();
        $(".page_top").hide()
        $(".page_eventlist").hide()
        $(".page_info").hide()
    }
    else if (index == 3){
        $(".page_myaccount").hide();
        $(".page_paimon").hide();
        $(".page_top").hide()
        $(".page_eventlist").show()
        $(".page_info").hide()
    }
    else if (index == 4){
        $(".page_myaccount").hide();
        $(".page_paimon").hide();
        $(".page_top").show()
        $(".page_eventlist").hide()
        $(".page_info").hide()
    }
    else if (index == 5){
        $(".page_myaccount").hide();
        $(".page_paimon").hide();
        $(".page_top").hide()
        $(".page_eventlist").hide()
        $(".page_info").show()
    }
}

$(function() {
    $(".content_paimon").swipe( { swipeStatus:swipe2} );

    function swipe2(event, phase, direction, distance) {

        if (direction == "left"){
            $("#food_img").css({ "margin-right" : distance*7+"px"});
        }
        if (direction == "right"){
            $("#food_img").css({ "margin-left" : distance*7+"px"});
        }

        if (phase == "cancel"){
            $("#food_img").css({ "margin" : "0px"});
        }
        if (phase == "end"){
            $("#food_img").css({ "margin" : "0px"});
            if(direction == "left"){
                check_food(0)
            }
            else if(direction == "right"){
                check_food(1)
            }
        }
    }

});