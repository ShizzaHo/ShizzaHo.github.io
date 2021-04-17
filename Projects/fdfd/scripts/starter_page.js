vkBridge.send('VKWebAppInit');
const nnn = vkBridge.send("VKWebAppGetUserInfo");

var rot = 0;
var tech = 0; var tech_text = "";

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

    database.ref('/GlobalData/TechText').on("value", function(snap) {
        tech_text = snap.val();
    });

    database.ref('/GlobalData/Technical_Works').on("value", function(snap) {
        tech = snap.val();
        check_base();
    });
}

function check_base(){
    if(tech == 0)
    {
        check_base_2();
    } else if (tech == 1) {
        $('#loading').remove();
        $('.text1').text("Ой-ой! Кажется идут технические работы!");
        $('.text2').text("Текст технических работ: "+tech_text);
    }
}

function check_base_2(){
    database.ref('/UserData/'+ID).on("value", function(snap) {
        if (snap.val() == null){
            $('.text1').text("Регистрируем вас как нового игрока!");
            $('.text2').text("Добро пожаловать, "+Fname+" "+Lname+"!");
            database.ref('/UserData/'+ID).set({
                Name: Fname,
                Level: 1,
                Mora: 1000,
                Primo: 100,
                Score: 0,
                Banned: 0,
                LastName: Lname,
                next_level_score: 10,
                Stats: {
                    Food_eats: 0,
                    Food_eats_yes: 0,
                    Food_eats_no: 0,
                    Food_eats_ivent: 0,
                    MoraUsed: 0,
                    PrimoUsed: 0,
                },
                Special: {
                    first_join: 0,
                }
            })
            setTimeout(check_base_2, 1000);
        }
        else{
            $('.text1').text("Почти готово!");
            $('.text2').text("Добро пожаловать, "+Fname+" "+Lname+"!");
            jointogame();
        }
    });
}

function jointogame(){
    document.location.href = 'gamepage.html';
}