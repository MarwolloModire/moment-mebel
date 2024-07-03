// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', function () {
	var forms = document.querySelectorAll('.feedbackForm')

	forms.forEach(function (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault() // Предотвращаем стандартное поведение формы

			// Получаем данные формы
			var name = form.querySelector('input[name="name"]').value
			var phone = form.querySelector('input[name="phone"]').value

			// Telegram Bot API
			var botToken = process.env.BOT_TOKEN // Замените на токен вашего бота
			var chatId = process.env.CHAT_ID // ID чата или username вашего телеграм пользователя

			// Формируем сообщение
			var message =
				'Вам писал или просил перезвонить\n' +
				'человек по имени: ' +
				name +
				'\n' +
				'его телефон: +7' +
				phone

			// Отправляем данные в Telegram
			var url =
				'https://api.telegram.org/bot' +
				botToken +
				'/sendMessage?chat_id=' +
				chatId +
				'&text=' +
				encodeURIComponent(message)

			// Отправка запроса
			fetch(url)
				.then(response => response.json())
				.then(data => {
					if (data.ok) {
						alert(
							'Ваши данные были переданы нашему сотруднику! Ожидайте звонка в ближайшее время...'
						)
					} else {
						alert('Кажется что-то пошло не так, попробуйте еще раз!')
					}
				})
				.catch(error => {
					console.error('Ошибка:', error)
					alert('Произошла ошибка при отправке сообщения.')
				})
		})
	})
})

// Слайд-шоу функции
var slideIndex = 0
showSlides()

function showSlides() {
	var i
	var slides = document.getElementsByClassName('mySlides')
	var dots = document.getElementsByClassName('dot')
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	slideIndex++
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '')
	}
	slides[slideIndex - 1].style.display = 'block'
	dots[slideIndex - 1].className += ' active'
	setTimeout(showSlides, 5000) // Измените значение времени, если необходимо
}

function currentSlide(n) {
	showSlide((slideIndex = n))
}

function plusSlides(n) {
	showSlide((slideIndex += n))
}

function showSlide(n) {
	var i
	var slides = document.getElementsByClassName('mySlides')
	var dots = document.getElementsByClassName('dot')
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '')
	}
	slides[slideIndex - 1].style.display = 'block'
	dots[slideIndex - 1].className += ' active'
}
