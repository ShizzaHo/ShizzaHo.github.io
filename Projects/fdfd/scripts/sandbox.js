var UsersAll;

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

function create_TOP_block(mesto, name, score) {

    $('.topL2').append('<div>' +
        '<div class="top_element_panel">' +
        '<p id="mesto">'+mestoo+' Место '+name+'</p>' +
        '<div class="top_element_panel_info">' +
        '<p id="mesto2">'+score+'</p>' +
        '<p STYLE="color: #b7b7b7; font-family: \'Raleway\', sans-serif; font-size: 10px;">Постоянных посетителей</p>' +
        '</div>' +
        '</div>');

}

var data_users_id = [];
var data_users_name = [];

function TOP_Loading(){
    database.ref('/UserData/').on("child_added", function(snap) {
        var users = snap.val();

        //data_users_id.push(([ users.Score], [users.Name +" "+users.LastName]));
        data_users_id.push(users.Score );
        data_users_name.push([users.Name +" "+users.LastName + "," + users.Score]);

    })

    setTimeout(TOP_Loading_END, 1000);
}

var mestoo = 1;

function TOP_Loading_END(){
    //console.log(data_users_id)

    data_users_id.sort(function(a,b){
        return b - a
    });

    //console.log(data_users_id)
    //console.log(data_users_name)

    //create_TOP_block(mestoo,"null", a)

    for (i = 0; i < data_users_id.length; i++){

        console.log(mestoo)

        var a = data_users_name[i]+"";

        a = a.split(",")[1];

        //console.log(a)

        //console.log(data_users_id[mestoo-1]);


        if (a == data_users_id[mestoo-1]){

            var b = data_users_name[i]+"";

            b = b.split(",")[0];

            create_TOP_block("",b, a)
            //console.log("Сходится");

            if (mestoo < 10){
                mestoo++
                TOP_Loading_END();
                break;
            }
        }

    }
}
