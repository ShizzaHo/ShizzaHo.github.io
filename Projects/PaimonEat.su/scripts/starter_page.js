vkBridge.send('VKWebAppInit');
const nnn = vkBridge.send("VKWebAppGetUserInfo");
var rot = 0;

//---

Fname = ""; Lname = "";
ID = "";

//---

window.onload = function() {
    setInterval(rotation_loading, 1);
}

function rotation_loading(){
    rot++;
    $("#loading").css("transform", "rotate(" + rot + "deg)");
}

Promise.resolve(nnn).then(function(value) {
    Fname = value.first_name;
    Lname = value.last_name;
    ID = value.id;

    start();
});

function start(){
    $('.text1').text("Почти готово!");
    $('.text2').text("Добро пожаловать, "+Fname+" "+Lname+"!");
}
