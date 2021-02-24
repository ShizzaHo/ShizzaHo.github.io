

//  Обозначающие переменные
var app_version = "1.0";
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
  var numb = dbn.ref('pomolilos');

  //console.log(dbn);
  //console.log(numb);

//	---


var alls = 0; // Локальное кольво молитв
var first_start = new Boolean(false); // Проверка загрузки странциы [ Костыль :) ]

function add(){
	//  Добавляем
	alls = alls+1;
	
	//	Сохраняем значение в бд
	numb.set({value: alls});
	
	//  Вызываем обновление
	update();

	// Блокируем кнопку
	locked_button();
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

	//  Обновляем текст
	 
}

function locked_button()  { //Лок молитвы
	$('#add_but').prop("disabled", true);
	$('#add_but').text("Перезарядка молитвы! (3 секунды)");
	setTimeout(unlocked_button, 3000);
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

setInterval(update, 100)