var question = document.getElementsByClassName("question")[0],
	text = document.getElementsByClassName("text")[0],
	yes = document.getElementsByClassName("yes")[0],
	no = document.getElementsByClassName("no")[0];


//array with questions
var arrayOfQuestions = [
	{
		key: 1,
		question: "Are you ready ?",
		nextYes: 2,
		nextNo: null
	},
	{
		key: 2,
		question: "Ваш пол ?",
		nextYes: 3,
		nextNo: 3,
		props:"Женский",
		props2: "Мужской"
	},
	{
		key: 3,
		question: "била проведина операция ?",
		nextYes: 4,
		nextNo: 5
	},
	{
		key: 4,
		question: "Вид операции",
		nextYes: 6,
		nextNo: 8,
		props: "Лемпектомия",
		props2: "Мастектония"
	},
	{
		key: 5,
		question: "Била биопсия ?",
		nextYes: null,
		nextNo: null,
		props:"ФНА УЗИ",
		props2: "+1"
	},
	{
		key: 6,
		question: "Результат биопсиї ?",
		nextYes: null,
		nextNo: 7,
		props:"Гормонозависимая",
		props2: "Не гормонозависимая"
	},
	{
		key: 7,
		question: "Установленая стадия second column",
		nextYes: null,
		nextNo: null
	},
	{
		key: 8,
		question: "Установленая стадия first column",
		nextYes: null,
		nextNo: null
	}
]


//defoult text!
text.innerHTML = arrayOfQuestions[0].question;

//When click to yes booton 
yes.addEventListener("click", function (e) {
	
	var that = this
	var filter = arrayOfQuestions.filter(function (item) { 
		return item.question == that.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[0].textContent
	})[0]
	var some = arrayOfQuestions.filter(function (item) {
		return item.key == filter.nextYes
	})[0]
	if(some && some.props && some.props2) {
		yes.innerHTML = some.props
		no.innerHTML = some.props2
	} else {
		yes.innerHTML = "yes"
		no.innerHTML = "no"
	}

	if(some) {
		text.innerHTML = some.question;
	} else {
		question.innerHTML = "question is end!"
	}
})

//when click to no button
no.addEventListener("click", function (e) {

	var that = this
	var filter = arrayOfQuestions.filter(function (item) { 
		return item.question == that.previousSibling.previousSibling.childNodes[0].textContent
	})[0]
	var some = arrayOfQuestions.filter(function (item) {
		return item.key == filter.nextNo
	})[0]
	if(some && some.props && some.props2) {
		yes.innerHTML = some.props
		no.innerHTML = some.props2
	} else {
		yes.innerHTML = "yes"
		no.innerHTML = "no"
	}

	if(some) {
		text.innerHTML = some.question;
	} else {
		question.innerHTML = "question is end!"
	}
	
})
