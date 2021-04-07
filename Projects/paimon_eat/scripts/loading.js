var rot = 0;

window.onload = function() {
    setInterval(rotation_loading, 1);

    VK.Auth.login();
    check_auth();
}

function rotation_loading(){
    rot++;
    $("#loading").css("transform", "rotate(" + rot + "deg)");
}

function check_auth(){

    VK.Auth.getLoginStatus(function(response) {
        if (response.status == "connected") {
            next_status_1(response.session);
        } else if (response.status == "not_authorized") {
            next_status_2(response.session);
        } else if (response.status == "unknown") {
            next_status_3(response.session);
        }

        console.log("VKOPENAPI | Статус авторизации: " + response.status);
    });

}

function next_status_1(response){ // Авторизован
    $('#text2').text("Добро пожаловать, "+response.user.first_name+"! Мы почти закончили загружать игру...");

    setTimeout(next_status_1_go, 1000);
}

function next_status_1_go(response){ // Авторизован
    window.location.href = "game.html";
}

function next_status_2(response){ // не разрешил доступ приложению
    $('#text').text("Ошибка загрузки...");
    $('#text2').text("Обновите страницу, и попробуйте еще раз...");
    VK.Auth.logout();
    setTimeout(check_auth, 1000);
}

function next_status_3(response){ // Не авторизован
    $('#text').text("Ожидание...");
    $('#text2').text("Вы запретили доступ к вашему аккаунту (или не авторизировались). Вы можете обновить страницу, и попробовать еще раз.");
}