"user strict";

// Preloader
$(window).on("load", function () {
	$(".preloader").fadeOut(1000);
});

// Menu Click Event
let trigger = $(".header-trigger");
let dropdown = $(".menu");
if (trigger || dropdown) {
	trigger.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown.slideToggle();
			trigger.toggleClass("active");
		});
	});
	dropdown.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(991)) {
			dropdown.slideUp();
			trigger.removeClass("active");
		}
	});
}

$(".menu-close").on("click", function () {
	$(".menu").slideUp();
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
	screenSize = window.innerWidth;
});

$(".menu li a").on("click", function (e) {
	if (parseInt(screenSize) < parseInt(991)) {
		$(this).siblings(".sub-menu").slideToggle();
	}
});

// Sticky Menu
var header = document.querySelector(".header-bottom");
if (header) {
	window.addEventListener("scroll", function () {
		header.classList.toggle("sticky", window.scrollY > 0);
	});
}

// Scroll To Top
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
	if ($(this).scrollTop() < 500) {
		scrollTop.removeClass("active");
	} else {
		scrollTop.addClass("active");
	}
});

//Click event to scroll to top
$(".scrollToTop").on("click", function () {
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		300
	);
	return false;
});

$(".feature-slider").slick({
	fade: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	pauseOnHover: true,
	centerMode: false,
	dots: false,
	arrows: true,
	nextArrow: '<i class="fas fa-angle-right slick-arrow arrow-right"></i>',
	prevArrow: '<i class="fas fa-angle-left slick-arrow arrow-left"></i> ',
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

// Odometer Counter
let counter = $(".counter-item");
if (counter) {
	counter.each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
}

//Faq
$(".faq-item__title").on("click", function (e) {
	var element = $(this).parent(".faq-item");
	if (element.hasClass("open")) {
		element.removeClass("open");
		element.find(".faq-item__content").removeClass("open");
		element.find(".faq-item__content").slideUp(300, "swing");
	} else {
		element.addClass("open");
		element.children(".faq-item__content").slideDown(300, "swing");
		element.siblings(".faq-item").children(".faq-item__content").slideUp(300, "swing");
		element.siblings(".faq-item").removeClass("open");
		element.siblings(".faq-item").find(".faq-item__content").slideUp(300, "swing");
	}
});

$(".video-button").magnificPopup({
	type: "iframe",
	// other options
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".menu li a").each(function () {
	if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
		$(this).addClass("active");
	}
});
