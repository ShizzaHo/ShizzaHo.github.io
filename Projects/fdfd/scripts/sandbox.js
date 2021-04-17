function sandbox(){
    $('.level_base').removeClass("upd_a");
    $('.level_base').addClass("down_a");
    setInterval(add_bs, 30)
    $('.level_base').show();
}

function add_bs(id, id_max){
    var id = 0;
    var id_max = 50;

    if (id_max != id){
        $('.level_shar').css("width", id+"%");
        id = id + 1;
    }
    else if (id_max == id){
        $('.level_base').removeClass("down_a");
        $('.level_base').addClass("upd_a");
        setTimeout(bs_clear, 999)
    }

}

function bs_clear(){
    $('.level_base').removeClass("upd_a");
    $('.level_base').removeClass("down_a");
    $('.level_base').hide();
}
