window.onload = function() {
    $(".loader").remove()
    $('.menu').hide();
    setTimeout(game_loaded, 1000)

    $(".page_myaccount").hide();
    //$(".page_paimon").hide();
    $(".page_top").hide()
    $(".page_eventlist").hide()

}

function game_loaded(){
    //$(".page_myaccount").show();
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

function start_page() {
    $(".page_myaccount").show();
    $(".page_paimon").hide();
    $(".page_top").hide()
    $(".page_eventlist").hide()
}