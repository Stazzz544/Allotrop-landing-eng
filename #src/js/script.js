@@include('wow.min.js');
@@include('swiper-bundle.js');
@@include('fullpage.js');//полноэкранный скролл



//функция для подключения webp
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});


//бургер и бургер меню
window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.navigation__flex'),
		menuItem = document.querySelectorAll('.menu_item'),
		burger = document.querySelector('.burger');


	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		menu.classList.toggle('navigation__flex_active');
	});


	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			burger.classList.toggle('burger_active');
			menu.classList.toggle('navigation__flex_active');
		})
	})
});



//fullpage scripts
new fullpage('#fullpage', {
	//options here
	autoScrolling: true,//включает поэкранный скролл
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
	navigation: true,//буллиты навигации справа
	navigationTooltips: ['Главная', 'О планете', 'Миссия', 'Особенности', 'Галерея', 'Дата релиза'],
	dragAndMove: true, //разрешает скролл на мобилах пальцем
	responsiveWidth: 900, //убераем прокрутку на определённом типе экрана
	verticalCentered: false, //Вертикальное центрирование контента в разделах
	fitToSection: false, //нужна ли подстройка разделов под окно просмотра.
	scrollBar:true
});

//WOW.JS activate
new WOW().init();

//tabs
var $tabs = function (target) {
	var
		_elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
		_eventTabsShow,
		_showTab = function (tabsLinkTarget) {
			var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
			tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
			tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
			tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
			// если следующая вкладка равна активной, то завершаем работу
			if (tabsLinkTarget === tabsLinkActive) {
				return;
			}
			// удаляем классы у текущих активных элементов
			if (tabsLinkActive !== null) {
				tabsLinkActive.classList.remove('tabs__link_active');
			}
			if (tabsPaneShow !== null) {
				tabsPaneShow.classList.remove('tabs__pane_show');
			}
			// добавляем классы к элементам (в завимости от выбранной вкладки)
			tabsLinkTarget.classList.add('tabs__link_active');
			tabsPaneTarget.classList.add('tabs__pane_show');
			document.dispatchEvent(_eventTabsShow);
		},
		_switchTabTo = function (tabsLinkIndex) {
			var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
			if (tabsLinks.length > 0) {
				if (tabsLinkIndex > tabsLinks.length) {
					tabsLinkIndex = tabsLinks.length;
				} else if (tabsLinkIndex < 1) {
					tabsLinkIndex = 1;
				}
				_showTab(tabsLinks[tabsLinkIndex - 1]);
			}
		};

	_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

	_elemTabs.addEventListener('click', function (e) {
		var tabsLinkTarget = e.target;
		// завершаем выполнение функции, если кликнули не по ссылке
		if (!tabsLinkTarget.classList.contains('tabs__link')) {
			return;
		}
		// отменяем стандартное действие
		e.preventDefault();
		_showTab(tabsLinkTarget);
	});

	return {
		showTab: function (target) {
			_showTab(target);
		},
		switchTabTo: function (index) {
			_switchTabTo(index);
		}
	}

};

$tabs('.tabs');


//swipers
//text-swiper
var swiper = new Swiper('.swiper-text', {
	loop: true,
	freeMode: false,
	autoplay: {
		delay: 8000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//gallery
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		// when window width is >= 320px
		374: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		720: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		1520: {
			slidesPerView: 5,
			spaceBetween: 20
		},
	}
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs
	}
});


//language button
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

// window.onclick = function(e) {
// 	if (!e.target.matches('.dropbtn')) {
// 	  var myDropdown = document.getElementById("myDropdown");
// 		 if (myDropdown.classList.contains('show')) {
// 			myDropdown.classList.remove('show');
// 		 }
// 	}
//  }