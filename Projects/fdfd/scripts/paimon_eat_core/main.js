var food_type = null;
var food_id = null;
var food_event_id = null;

/*
Type = 0 - Не съедобно. 1 - Съедобно.
 */

function debug_food(){
    generation_food()
}

function generation_food(){

    $('.paimon_eat').show();
    $('.paimon_eat_2').hide();
    $('.level_nexter').hide();

    var rand_iv = Math.floor((Math.random() * 100) + 1);
    var rand = Math.floor((Math.random() * 12) + 1);

    console.log(rand_iv)

    $('.paimon').attr("src","styles/images/paimon_1.png");
    $('#paimon_text').text("Съедобно ли это?");

    if(rand_iv > 10){

        if(rand == 1){
            $('#food_img').attr("src","styles/images/food/apple.png");
            $('#food_name').text("Яблоко");

            food_type = 1;
            food_id = 1;
            food_event_id = null;
        }
        else if(rand == 2){
            $('#food_img').attr("src","styles/images/food/zakatnik.png");
            $('#food_name').text("Закатник");

            food_type = 1;
            food_id = 2;
            food_event_id = null;
        }
        else if(rand == 3){
            $('#food_img').attr("src","styles/images/food/shashlik.png");
            $('#food_name').text("Шашлычок");

            food_type = 1;
            food_id = 3;
            food_event_id = null;
        }
        else if(rand == 4){ // Хуевая
            $('#food_img').attr("src","styles/images/bad_food/nephrite.png");
            $('#food_name').text("Незрелый нефрит");

            food_type = 0;
            food_id = 4;
            food_event_id = null;
        }
        else if(rand == 5){
            $('#food_img').attr("src","styles/images/food/shashlik2.png");
            $('#food_name').text("Рыбный шашлычок");

            food_type = 1;
            food_id = 5;
            food_event_id = null;
        }
        else if(rand == 6){
            $('#food_img').attr("src","styles/images/food/egg.png");
            $('#food_name').text("Яичница");

            food_type = 1;
            food_id = 6;
            food_event_id = null;
        }
        else if(rand == 7){
            $('#food_img').attr("src","styles/images/food/fisher_sandwich.png");
            $('#food_name').text("Рыбацкий бутерброд");

            food_type = 1;
            food_id = 7;
            food_event_id = null;
        }
        else if(rand == 8){
            $('#food_img').attr("src","styles/images/food/blini.png");
            $('#food_name').text("Блинчики");

            food_type = 1;
            food_id = 8;
            food_event_id = null;
        }
        else if(rand == 9){
            $('#food_img').attr("src","styles/images/food/chiken.png");
            $('#food_name').text("Цыплёнок");

            food_type = 1;
            food_id = 9;
            food_event_id = null;
        }
        else if(rand == 10){
            $('#food_img').attr("src","styles/images/food/soup.png");
            $('#food_name').text("Овощной суп");

            food_type = 1;
            food_id = 10;
            food_event_id = null;
        }
        else if(rand == 11){ // Хуевая
            $('#food_img').attr("src","styles/images/bad_food/storm_seed.png");
            $('#food_name').text("Семя урагана");

            food_type = 0;
            food_id = 11;
            food_event_id = null;
        }
        else if(rand == 12){ // Хуевая
            $('#food_img').attr("src","styles/images/bad_food/pereth.png");
            $('#food_name').text("Перец");

            food_type = 0;
            food_id = 12;
            food_event_id = null;
        }
    } else {
        var rand_iv_2 = Math.floor((Math.random() * 100) + 1);

        if (rand_iv_2 > 10){
            $('#food_img').attr("src","styles/images/event_food/Timmie.png");
            $('#food_name').text("Тимми");

            food_type = 2;
            food_id = null;
            food_event_id = 1;
        }
        else if (rand_iv_2 > 5){
            $('#food_img').attr("src","styles/images/pr.png");
            $('#food_name').text("Примогемы");

            food_type = 2;
            food_id = null;
            food_event_id = 2;
        }
    }
}

function check_food(check){

    $('.paimon_eat').hide();

    if(1 == 0){
        /*tmpp = 0;

        database.ref('/UserData/'+ID+"/Level").set( Level + 1 );

        if(Level == 2)
            tmpp = 50;
        else if(Level == 3)
            tmpp = 100;
        else if(Level == 4)
            tmpp = 150;
        else if(Level == 5)
            tmpp = 200;
        else if(Level == 6)
            tmpp = 300;
        else if(Level == 7)
            tmpp = 500;
        else if(Level == 8)
            tmpp = 700;
        else if(Level == 9)
            tmpp = 800;
        else if(Level == 10)
            tmpp = 1000;

        database.ref('/UserData/' + ID + "/next_level_score").set(tmpp);

        $('.level_nexter').show();

        $('.paimon').attr("src","styles/images/paimon_4.png");
        $('#arrow_level').attr("src","styles/images/level_up.png");
        $('#paimon_text').text("Ты получил новый уровень!");
        $('#message_level').text(Level + " Уровень!");

        $('.paimon_eat_2').hide();*/
    }

    if (check == 1){
        if (food_type == 1){
            $('.paimon').attr("src","styles/images/paimon_2.png");
            $('#food_fin_img').attr("src","styles/images/yesing.png");
            $('#paimon_text').text("Еще как съедобно!");

            database.ref('/UserData/'+ID+"/Score").set( Score + 1 );
            database.ref('/UserData/'+ID+"/Stats/Food_eats").set( Stats.Food_eats + 1 );
            database.ref('/UserData/'+ID+"/Stats/Food_eats_yes").set( Stats.Food_eats_yes + 1 );

            $('.paimon_eat_2').show();

        }
        else if (food_type == 0){
            $('.paimon').attr("src","styles/images/paimon_3.png");
            $('#food_fin_img').attr("src","styles/images/noting.png");
            $('#paimon_text').text("Эй, Чем это ты решил накормить Паймон?");

            database.ref('/UserData/'+ID+"/Score").set( Score - 1 );
            database.ref('/UserData/'+ID+"/Stats/Food_eats").set( Stats.Food_eats + 1 );
            database.ref('/UserData/'+ID+"/Stats/Food_eats_no").set( Stats.Food_eats_no + 1 );

            $('.paimon_eat_2').show();
        }

        if (food_type == 2){
            check_event(1, food_event_id)
        }

    }
    else if (check == 0){
        if (food_type == 1){
            $('.paimon').attr("src","styles/images/paimon_3.png");
            $('#food_fin_img').attr("src","styles/images/noting.png");
            $('#paimon_text').text("Кажется, ты что-то перепутал...");

            database.ref('/UserData/'+ID+"/Score").set( Score - 1 );
            database.ref('/UserData/'+ID+"/Stats/Food_eats").set( Stats.Food_eats + 1 );
            database.ref('/UserData/'+ID+"/Stats/Food_eats_no").set( Stats.Food_eats_no + 1 );

            $('.paimon_eat_2').show();
        }
        else if (food_type == 0){
            $('.paimon').attr("src","styles/images/paimon_4.png");
            $('#food_fin_img').attr("src","styles/images/yesing.png");
            $('#paimon_text').text("Да, лучше не есть это...");

            database.ref('/UserData/'+ID+"/Score").set( Score + 1 );
            database.ref('/UserData/'+ID+"/Stats/Food_eats").set( Stats.Food_eats + 1 );
            database.ref('/UserData/'+ID+"/Stats/Food_eats_yes").set( Stats.Food_eats_yes + 1 );

            $('.paimon_eat_2').show();
        }

        if (food_type == 2){
            check_event(0, food_event_id)
        }

    }

    setTimeout(generation_food, 1000)
}

