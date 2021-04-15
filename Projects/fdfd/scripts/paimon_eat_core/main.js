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

    var rand = Math.floor((Math.random() * 4) + 1);

    $('.paimon').attr("src","styles/images/paimon_1.png");
    $('#paimon_text').text("Съедобно ли это?");

    if(rand == 1){
        $('#food_img').attr("src","styles/images/food/apple.png");
        $('#food_name').text("Яблоко");

        food_type = 1;
        food_id = 1;
        food_event_id = null;
    }
    if(rand == 2){
        $('#food_img').attr("src","styles/images/food/zakatnik.png");
        $('#food_name').text("Закатник");

        food_type = 1;
        food_id = 2;
        food_event_id = null;
    }
    if(rand == 3){
        $('#food_img').attr("src","styles/images/food/shashlik.png");
        $('#food_name').text("Шашлычок");

        food_type = 1;
        food_id = 3;
        food_event_id = null;
    }
    if(rand == 4){
        $('#food_img').attr("src","styles/images/pr.png");
        $('#food_name').text("Шлак");

        food_type = 0;
        food_id = 4;
        food_event_id = null;
    }
}

function check_food(check){
    if (check == 1){
        if (food_type == 1){
            $('.paimon').attr("src","styles/images/paimon_2.png");
            $('#paimon_text').text("Еще как съедобно!");
        }
        else if (food_type == 0){
            $('.paimon').attr("src","styles/images/paimon_3.png");
            $('#paimon_text').text("Эй, Чем это ты решил накормить Паймон?");
        }
    }
    else if (check == 0){
        if (food_type == 1){
            $('.paimon').attr("src","styles/images/paimon_3.png");
            $('#paimon_text').text("Кажется, ты что-то перепутал...");
        }
        else if (food_type == 0){
            $('.paimon').attr("src","styles/images/paimon_4.png");
            $('#paimon_text').text("Да, лучше не есть это...");
        }
    }

    setTimeout(generation_food, 1000)
}

