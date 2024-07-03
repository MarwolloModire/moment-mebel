/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// // Import vendor jQuery plugin example\n// import '~/app/libs/mmenu/dist/mmenu.js'\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var forms = document.querySelectorAll('.feedbackForm');\n  forms.forEach(function (form) {\n    form.addEventListener('submit', function (e) {\n      e.preventDefault(); // Предотвращаем стандартное поведение формы\n\n      // Получаем данные формы\n      var name = form.querySelector('input[name=\"name\"]').value;\n      var phone = form.querySelector('input[name=\"phone\"]').value;\n\n      // Telegram Bot API\n      var botToken = \"7435195975:AAEfOFtFAbErdXvIDXBC3FkMzhkigGWrE-Q\"; // Замените на токен вашего бота\n      var chatId = \"@MomentMebelForms\"; // ID чата или username вашего телеграм пользователя\n\n      // Формируем сообщение\n      var message = 'Вам писал или просил перезвонить\\n' + 'человек по имени: ' + name + '\\n' + 'его телефон: +7 ' + phone;\n\n      // Отправляем данные в Telegram\n      var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(message);\n\n      // Отправка запроса\n      fetch(url).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        if (data.ok) {\n          alert('Ваши данные были переданы нашему сотруднику! Ожидайте звонка в ближайшее время...');\n        } else {\n          alert('Кажется что-то пошло не так, попробуйте еще раз!');\n        }\n      })[\"catch\"](function (error) {\n        console.error('Ошибка:', error);\n        alert('Произошла ошибка при отправке сообщения.');\n      });\n    });\n  });\n});\n\n// Слайд-шоу функции\nvar slideIndex = 0;\nshowSlides();\nfunction showSlides() {\n  var i;\n  var slides = document.getElementsByClassName('mySlides');\n  var dots = document.getElementsByClassName('dot');\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = 'none';\n  }\n  slideIndex++;\n  if (slideIndex > slides.length) {\n    slideIndex = 1;\n  }\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(' active', '');\n  }\n  slides[slideIndex - 1].style.display = 'block';\n  dots[slideIndex - 1].className += ' active';\n  setTimeout(showSlides, 5000); // Измените значение времени, если необходимо\n}\nfunction currentSlide(n) {\n  showSlide(slideIndex = n);\n}\nfunction plusSlides(n) {\n  showSlide(slideIndex += n);\n}\nfunction showSlide(n) {\n  var i;\n  var slides = document.getElementsByClassName('mySlides');\n  var dots = document.getElementsByClassName('dot');\n  if (n > slides.length) {\n    slideIndex = 1;\n  }\n  if (n < 1) {\n    slideIndex = slides.length;\n  }\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = 'none';\n  }\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(' active', '');\n  }\n  slides[slideIndex - 1].style.display = 'block';\n  dots[slideIndex - 1].className += ' active';\n}\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;