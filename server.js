/**
 * Created by Александр on 27.03.2014.
 */


//Подключение базы данных со словарём
//(расширение можно не указывать)
var db = require('db');
//инициализация словаря
db.connect();

//Подключение библиотеки index из папки user
var User = require('user');

//инициализация новых объектов
var vasya = new User("Вася");
var petya = new User("Петя");

//вызов метода
vasya.hello(petya);