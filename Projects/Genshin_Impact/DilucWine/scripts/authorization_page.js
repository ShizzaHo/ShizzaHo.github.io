window.onload = function(){ 
    $('#loadpage').addClass('loadcomplete');

    $('#game_info').text(game_name + " | Версия игры: " + version);
    document.title = game_name + " " + version;

    $('#loader_info').text("Начинаю загрузку...");

    setTimeout(invisible, 1000, "#loadpage");

    setTimeout(start_1, 1500);
}

function invisible(name){
    $(name).remove()
}

function start_1(){
    $('#loader_info').text("Подключение к базе данных | Получение ответа...");

    worker.orderByChild("working").on("value", function(snap) {
        console.log("Код работоспособности сервера: " + snap.val());
		if(snap.val() == 1)
        {
            $('#loader_info').text("Подключение к базе данных | Ответ получен!");

            teh.orderByChild("technical_works").on("value", function(snap2) {
                console.log("-> Код технических работ: " + snap2.val());

                if( snap2.val() == 1){
                    teh2.orderByChild("text").on("value", function(snap3) {
                        $('#loader_info').text("Сейчас ведутся технические рабготы. Причина: " + snap3.val());
                      });
                  }
              });
        }
        else
        {
            $('#loader_info').text("В данный момент сервер не работает. Попробуйте зайти позже.");
        }
	  });
}