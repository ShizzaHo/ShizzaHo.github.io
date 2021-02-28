//Скрипт для подключения к базе данных

var firebaseConfig = {
	apiKey: "AIzaSyAe8zxGLYHMcWeX0tSxrayZ7dQ6j1M5CVE",
    authDomain: "dilucwine-f0daa.firebaseapp.com",
    databaseURL: "https://dilucwine-f0daa-default-rtdb.firebaseio.com/",
    projectId: "dilucwine-f0daa",
    storageBucket: "dilucwine-f0daa.appspot.com",
    messagingSenderId: "350341352955",
    appId: "1:350341352955:web:c274d07887764787f3cf5e",
    measurementId: "G-7ZH3QH6RMN"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var global = database.ref('global');

var worker = database.ref('/global/working'); //Работоспособность

var teh = database.ref('/global/technical_reason/technical_works'); //Тех работы код
var teh2 = database.ref('/global/technical_reason/text'); //Тех работы текст