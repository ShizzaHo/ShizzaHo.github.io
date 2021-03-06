

//  Обозначающие переменные
var app_version = "1.0.2.1 - Verti Ver.";
var name_app = "HuTao Hope";
var title_final = name_app +" "+ app_version;
//  ---

//	База данных

var firebaseConfig = {
	apiKey: "AIzaSyA_vtxJpROOLhsrl6tyLDvGnojejfSHndc",
	authDomain: "hutaohope.firebaseapp.com",
	databaseURL: "https://hutaohope-default-rtdb.firebaseio.com",
	projectId: "hutaohope",
	storageBucket: "hutaohope.appspot.com",
	messagingSenderId: "885387475487",
	appId: "1:885387475487:web:6a0900cc8d0ae2dac1332a",
	measurementId: "G-YGEMLV0VD1"
  };

  firebase.initializeApp(firebaseConfig);

  var dbn = firebase.database();
  var numb = dbn.ref('pomolilos/venti');

  //console.log(dbn);
  //console.log(numb);

//	---


var alls = 0; // Локальное кольво молитв
var first_start = new Boolean(false); // Проверка загрузки странциы [ Костыль :) ]
var timer = 0;

function add(){
	//  Добавляем
	alls = alls+1;
	
	//	Сохраняем значение в бд
	numb.set({value: alls});
	
	//  Вызываем обновление
	update();

	// Блокируем кнопку
	locked_button();

	timer = 2;
	timerid = setInterval(timer_update, 1000)

	$('#timer').addClass('fadein');
}

function update(){
	//  Получаем количество молитв из бд
	numb.on("child_added", function(snap) {
		//console.log(snap.val())
		alls = snap.val();
		$('#allsed').text(alls + " Раз");
		if (first_start == false)
		{
			$('#add_but').prop("disabled", false);
			start_alls();
			first_start = true;
		}
		snap.forEach(function(childSnapshot) {
		  var key = childSnapshot.key();
		  var childData = childSnapshot.val();
		});
	  });

	//  Проверка таймера

	if(timer > 0){ 
		$('#timer').text("Помолиться снова можно будет через: "+ timer +" секунды");
	}
	else{
		//$('#timer').text("");
	}
	  
}

function locked_button()  { //Лок молитвы
	$('#add_but').prop("disabled", true);
	$('#add_but').text("Помолиться!");
	
	setTimeout(unlocked_button, 2000);
}

function unlocked_button()  { //Анлок молитвы
	$('#add_but').prop("disabled", false);
	$('#add_but').text("Помолиться!");
}

function start_alls() { //показываем кольво молитв
	$('#allsed').addClass('alll');
	$('#text_god').addClass('alll');
}

window.onload = function(){ // Функция при старте страницы 
	update(); // Обновляем 
	document.title = title_final; // Обновим титл страницы
	
}

$(document).ready(function() {
    $('#info').hide();
});

function timer_update(){
	timer = timer-1;
	
	if(timer > 0){ 
		$('#timer').text("Помолиться снова можно будет через: "+ timer + " секунды");
	}
	else if (timer = 1){
		clearInterval(timerid);

		$('#timer').removeClass("fadein");

		timer = 0;

		$('#timer').text("");
	}
}

function timer_reset(){

}

function close_info(){
	$('#info').addClass('info_close');

	setTimeout(info_c, 1000);
}

function info_c(){
	$('#info').hide();
	$('#info').removeClass("info_close");
	$('#info').removeClass("info");
}

function info_v(){
	$('#info').addClass('info');
	$('#info').show();
}

setInterval(update, 1)
