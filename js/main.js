let main_dropdown = document.querySelectorAll('.main_dropdown');
if (main_dropdown.length) {
	main_dropdown.forEach(dropdown => {
		let dropdown_btn = dropdown.querySelector('.main_dropdown__btn'),
			dropdown_body = dropdown.querySelector('.main_dropdown__body_wrap'),
			body_btns = dropdown.querySelectorAll('.main_dropdown__body button'),
			dropdown_value = dropdown.querySelector('.main_dropdown__btn_value');
		dropdown_btn.onclick = () => {
			dropdown.classList.toggle('active');
			dropdown_body.style.maxHeight = dropdown_body.style.maxHeight ? null : dropdown_body.scrollHeight + 'px';
		}
		body_btns.forEach(btn => {
			btn.onclick = () => {
				body_btns.forEach(el => {
					if (el != btn) {
						el.classList.remove('active');
					}
				})
				btn.classList.add('active');
				dropdown.classList.toggle('active');
				dropdown_body.style.maxHeight = dropdown_body.style.maxHeight ? null : dropdown_body.scrollHeight + 'px';
				if (dropdown_value) {
					dropdown_value.textContent = btn.textContent;
				}
			}
		})
	})
}

const target = document.querySelector('#myTarget')

document.addEventListener('click', (event) => {

	if (main_dropdown.length) {
		main_dropdown.forEach(dropdown => {
			const withinBoundaries = event.composedPath().includes(dropdown)

			if (dropdown.classList.contains('active') && !withinBoundaries) {
				dropdown.classList.toggle('active');
				let dropdown_body = dropdown.querySelector('.main_dropdown__body_wrap');
				dropdown_body.style.maxHeight = dropdown_body.style.maxHeight ? null : dropdown_body.scrollHeight + 'px';
			}
		})
	}

	// if (withinBoundaries) {
	//   target.innerText = 'Click happened inside element'
	// } else {
	//   target.innerText = 'Click happened **OUTSIDE** element'
	// }
})

let filter_modal = document.querySelector('.filter_modal'),
	filter_open = document.querySelectorAll('.filter_modal__open'),
	filter_close = document.querySelector('.filter_modal__close')
if (filter_open.length) {
	filter_open.forEach(open_btn => {
		open_btn.onclick = () => {
			filter_modal.classList.add('active');
			body.style.overflow = 'hidden'
		}
	})

	filter_close.onclick = () => {
		filter_modal.classList.remove('active');
		body.style.overflow = 'visible'
	}
}

// modal
let modal = document.querySelectorAll('.modal');
let modal1 = document.querySelector('.modal_1');
let modal2 = document.querySelector('.modal_2');
let modal3 = document.querySelector('.modal_3');
let modal4 = document.querySelector('.modal_4');
let modal5 = document.querySelector('.modal_5');
let modal_close = document.querySelectorAll('.modal_close');
let header_btn = document.querySelectorAll('.header_btn');
let modal_1_open = document.querySelectorAll('.modal_1__open');
let modal_2_open = document.querySelectorAll('.modal_2__open');
let modal_3_open = document.querySelectorAll('.modal_3__open');
let modal_4_open = document.querySelectorAll('.modal_4__open');
let modal_5_open = document.querySelectorAll('.modal_5__open');

// header_btn.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     modal.classList.add('active');
//   })
// })

modal_close.forEach(mdl_close => {
	mdl_close.addEventListener('click', () => {
		modal.forEach(mdl => {
			mdl.classList.remove('active');
			body.style.overflow = 'visible';
		})
	})
})

modal_1_open.forEach(mdl_1 => {
	mdl_1.onclick = e => {
		e.preventDefault();
		modal1.classList.add('active');
		body.style.overflow = 'hidden';
	}
})

modal_2_open.forEach(mdl_2 => {
	mdl_2.onclick = e => {
		e.preventDefault();
		modal2.classList.add('active');
		body.style.overflow = 'hidden';
	}
})

modal_3_open.forEach(mdl_3 => {
	mdl_3.onclick = e => {
		e.preventDefault();
		modal3.classList.add('active');
		body.style.overflow = 'hidden';
	}
})

modal_4_open.forEach(mdl_4 => {
	mdl_4.onclick = e => {
		e.preventDefault();
		modal4.classList.add('active');
		body.style.overflow = 'hidden';
	}
})

modal_5_open.forEach(mdl_5 => {
	mdl_5.onclick = e => {
		e.preventDefault();
		modal5.classList.add('active');
		body.style.overflow = 'hidden';
	}
})

// modal


// strong_relationships__swiper
try {
	// strong_relationships__swiper
	const strong_relationships__swiper = new Swiper('.strong_relationships__swiper', {
		slidesPerView: 8,
		spaceBetween: 24,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		speed: 900,
		breakpoints: {
			1500: {
				slidesPerView: 8,
				spaceBetween: 24,
			},
			992:{ 
				slidesPerView: 5,
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 12,
			},
			0: {
				slidesPerView: 2.3,
				spaceBetween: 12,
				// loop: false,
				centeredSlides: true,
			}
		}
	});
} catch (error) {

}

// 
try {
	const strong_relationships__swiper = new Swiper('.unique_opportunities__swiper', {
		slidesPerView: 3,
		spaceBetween: 24,
		speed: 900,
		navigation: {
			nextEl: ".swiper-next-btn",
			prevEl: ".swiper-prev-btn",
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 24,	
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 12,
			},
			0: {
				slidesPerView: 1.2,
				spaceBetween: 12,
			},
		}
	});
} catch (error) {
	
}
const $input = document.querySelectorAll('input[type="tel"]');
if ($input.length) {
	$input.forEach(inp => {
		IMask(inp, { mask: '+{7}(000) 000-00-00' });
		t = true;
		inp.oninput = e => {
			let inp_text = e.target.value;
			if (t) {
				console.log(inp_text.length);
				if (inp_text.length == 4) {
					inp.value = inp_text.slice(0, -2);
				}
				t = false;
			}

			if (!inp_text.length) {
				t = true;
			}
		}
	})
}


// burger 
let burger = document.querySelector('.burger');
let mobile_menu = document.querySelector('.mobile_menu');
let mobile_menu_bg = document.querySelector('.mobile_menu_bg');
let mobile_menu_btn = document.querySelector('.mobile_menu_btn');

burger.addEventListener('click', () => {
	mobile_menu.classList.add('active');
	mobile_menu_bg.classList.add('active');
})

mobile_menu_btn.addEventListener('click', () => {
	mobile_menu.classList.remove('active');
	mobile_menu_bg.classList.remove('active');
})

mobile_menu_bg.addEventListener('click', () => {
	mobile_menu.classList.remove('active');
	mobile_menu_bg.classList.remove('active');
})
// burger 