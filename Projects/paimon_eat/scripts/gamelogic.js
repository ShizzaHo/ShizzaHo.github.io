window.onload = function() {
    VK.Auth.login();
    VK.Auth.getLoginStatus(function(response) {
        if (response.status == "connected") {

            console.log("VKOPENAPI | Статус авторизации: " + response.status);
            start(response.session);

        } else {
            window.location.href = "index.html";
        }
    });
}

function start(response){
    $('#fullname').text(response.user.first_name);
    $('#id').text(response.user.id);
}