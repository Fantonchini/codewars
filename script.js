let names = ["Август","Авдей","Аверьян","Агафон","Агей","Адам","Адриан","Аким","Аксён","Александр",
			  "Алексей","Али","Анатолий","Андрей","Анисий","Анисим","Антип","Антон","Ануфрий","Аркадий",
			  "Арон","Арсен","Арсений","Артём","Артемий","Артур","Архип","Афанасий","Бенедикт","Богдан",
			  "Борис","Борислав","Бронислав","Вадим","Валентин","Валерий","Валериан","Валерьян","Василий",
			  "Венедикт","Викентий","Виктор","Вилен","Вилор","Виталий","Владилен","Владимир","Владислав",
			  "Владлен","Влас","Всеволод","Вячеслав","Гавриил","Гаврила","Геннадий","Георгий","Герасим",
			  "Герман","Гертруд","Глеб","Гордей","Григорий","Гурий","Давид","Давыд","Даниил","Данила",
			  "Демид","Демьян","Денис","Димитрий","Диомид","Дмитрий","Дорофей","Евгений","Евдоким","Евсей",
			  "Евстафий","Евстигней","Егор","Елизар","Елисей","Емельян","Еремей","Ермил","Ермолай","Ерофей",
			  "Ефим","Ефимий","Ефрем","Жан","Жерар","Жорес","Захар","Захарий","Зиновий","Иван","Игнат",
			  "Игнатий","Игорь","Измаил","Изот","Иларион","Илья","Ильяс","Иосип","Иосиф","Ипполит","Исаак",
			  "Исак","Исидор","Искандер","Казимир","Калина","Каллиник","Каллистрат","Капитон","Карп",
			  "Касьян","Кирей","Кирила","Кирилл","Клим","Климент","Климентий","Кондрат","Кондратий","Конон",
			  "Константин","Корней","Корнелий","Ксенофонт","Кузьма","Куприян","Лаврентий","Лазарь","Ларион",
			  "Лев","Левон","Леонид","Леон","Леонтий","Лука","Лукьян","Людвиг","Макар","Максим","Марат",
			  "Марк","Маркел","Мартин","Мартын","Матвей","Мефодий","Милослав","Мина","Минай","Мирон",
			  "Митрофан","Михаил","Михей","Модест","Моисей","Мокей","Мстислав","Назар","Наркис","Нарцис",
			  "Наум","Нестер","Нестор","Нефёд","Никандр","Никанор","Никита","Никифор","Никодим","Николай",
			  "Никон","Нил","Нильс","Олег","Онисим","Онуфрий","Орест","Осип","Остап","Отто","Павел","Панкрат",
			  "Панкратий","Пантелей","Пантелеймон","Парфён","Парфений","Пётр","Пимен","Платон","Полиграф",
			  "Поликарп","Порфир","Порфирий","Потап","Прокоп","Прокопий","Прокофий","Прохор","Роберт","Родион",
			  "Роман","Ростислав","Рубен","Руслан","Савастей","Савва","Савватий","Савелий","Самсон","Святослав",
			  "Северьян","Семён","Серафим","Сергей","Сергий","Сидор","Созон","Созонт","Спиридон","Станислав",
			  "Степан","Тарас","Теймураз","Терентий","Тимофей","Тимур","Тихон","Трифон","Трофим","Устин","Фадей",
			  "Федот","Феликс","Фёдор","Федосей","Федосий","Феодосий","Феоктист","Феофан","Филат","Филимон",
			  "Филипп","Фока","Фома","Фрол","Харитон","Харлам","Харламп","Харлампий","Чеслав","Эдгар","Эдгард",
			  "Эдуард","Юлиан","Юлий","Юрий","Яков","Ярослав","Августа","Августина","Авдотья","Авелина","Аврелия",
			  "Аврея","Аврора","Агафья","Агапа","Агапия","Агата","Агафья","Аглая","Агнесса","Агния","Аграфена",
			  "Агриппина","Ада","Аделаида","Аделина","Адель","Адина","Адолия","Адриана","Аза","Азалия","Азелла",
			  "Аида","Аксинья","Акулина","Алевтина","Александра","Александрина","Алексина","Алёна","Алеся","Алина",
			  "Алиса","Алла","Алоиза","Алфея","Альберта","Альбертина","Альбина","Альвина","Альфия","Амалия",
			  "Амата","Анастасия","Анатолия","Ангела","Ангелика","Ангелина","Анджела","Андрея","Андрона",
			  "Андроника","Анета","Анетта","Анжела","Анжелика","Анимаиса","Анисия","Анисья","Анна","Аннета",
			  "Аннетта","Антонида","Антонина","Антония","Анфима","Анфиса","Анфия","Аполлинария","Аполлония",
			  "Апраксия","Апрелия","Апфия","Аргентея","Ариадна","Арина","Ария","Аркадия","Арсения","Артемида",
			  "Артемия","Аста","Астра","Астрид","Ася","Афанасия","Афродита","Аэлита","Аэлла","Ая","Беата",
			  "Беатриса","Белла","Бенедикта","Берта","Бландина","Богдана","Божена","Болеслава","Борислава",
			  "Бояна","Бронислава","Валентина","Валерия","Ванда","Ванесса","Варвара","Васёна","Василида","Василина",
			  "Василиса","Василия","Васса","Вацлава","Велимира","Велислава","Венедикта","Венера","Венцеслава","Вера",
			  "Вероника","Верония","Веселина","Весмира","Вика","Викторина","Виктория","Вилена","Виленина","Вилора",
			  "Вильгельмина","Виола","Виолетта","Вита","Виталика","Виталина","Виталия","Влада","Владилена",
			  "Владимира","Владислава","Владлена","Власта","Воля","Всеслава","Гала","Галата","Галатея","Галея",
			  "Галиана","Галиба","Галиля","Галима","Галина","Галя","Геласия","Гения","Геннадия","Генриетта",
			  "Георгина","Гера","Германа","Гертруда","Глафира","Горислава","Градислава","Грета","Гретта","Дарья",
			  "Дебора","Деина","Декабрина","Денисия","Диана","Дигна","Дина","Динара","Динора","Динэра","Диодора",
			  "Дионина","Дия","Доброгнева","Добромила","Добромира","Доброслава","Доминика","Домна","Домника",
			  "Домникия","Домнина","Донара","Доната","Дора","Дорофея","Доса","Дося","Досифея","Дросида","Дуклида",
			  "Дуня","Дуся","Ева","Евгения","Евдокия","Екатерина","Елена","Елизавета","Ефросинья","Жасмин","Жанна",
			  "Жозефина","Залина","Зара","Зарема","Зарина","Заря","Земфира","Зиглинда","Зигрида","Зина","Зинаида",
			  "Зиновия","Злата","Зоя","Ива","Иванна","Ида","Идея","Иветта","Ивонна","Изабелла","Изида","Изольда",
			  "Илона","Ильина","Инга","Инесса","Инна","Иоанна","Ира","Ираида","Ирена","Ирина","Ирма","Исидора","Ия",
			  "Каздоя","Казимира","Калерия","Калида","Калиса","Каллиникия","Каллиста","Кама","Камилла","Кандида",
			  "Капитолина","Карина","Каролина","Касиния","Келестина","Керкира","Кетевань","Киликия","Кима","Кира",
			  "Кириакия","Кириана","Кирилла","Клавдия","Клара","Клариса","Клементина","Клеопатра","Конкордия",
			  "Констанция","Корнелия","Кристина","Ксанфиппа","Ксения","Купава","Лада","Лариса","Лаура","Ленина",
			  "Леокадия","Леокардия","Леонида","Леонина","Леония","Лиана","Ливия","Лидия","Лилиана","Лилия","Лина",
			  "Лира","Лия","Лолита","Лолия","Луиза","Лукерья","Луна","Любава","Любовь","Любомила","Любомира",
			  "Людмила","Люцина","Люция","Мавра","Магдалина","Майя","Макрина","Максима","Малания","Мальвина",
			  "Маргарита","Мариам","Мариамна","Марианна","Мариетта","Марина","Мариэтта","Мария","Марка","Марксина",
			  "Марлена","Марта","Марфа","Марья","Матрёна","Матрона","Мая","Мелания","Милена","Милица","Милия",
			  "Милослава","Милютина","Мина","Минна","Минодора","Мира","Миропия","Мирослава","Мирра","Митродора",
			  "Михайлина","Михалина","Млада","Модеста","Моика","Моника","Мстислава","Муза","Нада","Надежда","Наина",
			  "Нана","Наталия","Наталья","Нелли","Ника","Нина","Нинель","Нонна","Ноябрина","Оксана","Октябрина",
			  "Олеся","Оливия","Олимпиада","Олимпиодора","Ольга","Офелия","Павлина","Пелагея","Полина","Прасковья",
			  "Раиса","Регина","Рената","Римма","Рита","Роза","Розалия","Сабина","Светлана","Серафима","Сильвия",
			  "Соня","Софья","Станислава","Степанида","Сусанна","Таисия","Тамара","Татьяна","Тереза","Улита",
			  "Ульяна","Устинья","Фаина","Федора","Федосья","Фёкла","Хаврония","Христина","Цвета","Цветана",
			  "Чеслава","Шарлотта","Шушаника","Эвелина","Элеонора","Элла","Эльвира","Эмилия","Эмма","Юдифь","Юлиана",
			  "Юлия","Юния","Юнона","Юрия","Юстина","Ядвига","Яна","Янина","Ярослава","Ясна"]
const palindrome = str => {
	return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}
const pluck = (array, keyField) => {
	return array.map(a => a[keyField])
}
const whatMyType = variable => {
	if (Array.isArray(variable)) {
		return 'array'
	} else if (!!variable && 
			   typeof(variable) === 'object' && 
			   (!isNaN(variable.length) || !isNaN(variable.size)) &&
			   !variable.hasOwnProperty('push')) {
		return 'array-like'
	} else if (variable === null) {
		return 'null'
	} else return typeof(variable)
}
const pushName = function() {
	let nodes = document.querySelectorAll('li')
	let result = []
	let parent = nodes[0].parentNode
	for (let i = 0; i < nodes.length; i++) {
		nodes[i].style.color = ""
		result.push(parent.removeChild(nodes[i]))
	}
	let added = document.createElement('li')
	added.innerHTML = names[Math.floor(Math.random()*names.length)]
	added.style.color = 'green'
	result.push(added)
	result.sort(function(a,b) {
		let textA = a.textContent
		let textB = b.textContent
		return (textA > textB) ? 1 : -1
	}).forEach(a => {parent.appendChild(a)})
}
const revert = () => {
	let nodes = document.querySelectorAll('li')
	let result = []
	let parent = nodes[0].parentNode
	for (let i = 0; i < nodes.length; i++) {
		result.push(parent.removeChild(nodes[i]))
	}
	result.reverse().forEach(a => {parent.appendChild(a)})
}
let buttons = document.querySelectorAll('button')
let timer
const start = () => {buttons[0].disabled = 'true'; timer = setInterval(pushName,1000); return timer}
const stop = () => {clearInterval(timer); buttons[0].disabled = ''}
buttons[0].onclick = start
buttons[1].onclick = stop
buttons[2].onclick = revert






