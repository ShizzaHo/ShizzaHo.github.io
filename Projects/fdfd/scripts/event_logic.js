function check_event(type, id){

    if(id == 1){

        if (type == 1){

            $('.paimon_eat').hide();

            $('.paimon').attr("src","styles/images/paimon_3.png");
            $('#food_fin_img').attr("src","styles/images/noting.png");
            $('#paimon_text').text("Я НЕ ХОЧУ ЭТО ЕСТЬ!");

            $('.paimon_eat_2').show();

        }
        else if (type == 0){
            $('.paimon').attr("src","styles/images/paimon_4.png");
            $('#food_fin_img').attr("src","styles/images/yesing.png");
            $('#paimon_text').text("Тимми? Что он тут делает?");

            $('.paimon_eat_2').show();
        }

    }

    if(id == 2){

        if (type == 1){

            $('.paimon_eat').hide();

            $('.paimon').attr("src","styles/images/paimon_3.png");
            $('#food_fin_img').attr("src","styles/images/noting.png");
            $('#paimon_text').text("Что-о-о-о?!");

            $('.paimon_eat_2').show();

        }
        else if (type == 0){
            $('.paimon').attr("src","styles/images/paimon_4.png");
            $('#food_fin_img').attr("src","styles/images/yesing.png");
            $('#paimon_text').text("Давай лучше заберем их себе? (+10 примогемов)");

            database.ref('/UserData/'+ID+"/Primo").set( Primo + 10 );

            $('.paimon_eat_2').show();
        }

    }

    setTimeout(generation_food, 1000)
}