let tabs = document.querySelectorAll('.tab'),
    body = document.querySelector('body');
if (tabs.length) {
  tabs.forEach(tab => {
    let tab_btns = tab.querySelectorAll('button');
    let tab_items = tab.querySelectorAll('.tab_item');
    tab_btns.forEach((tab_btn, btn_idx) => {
      tab_btn.onclick = () => {
        if (!tab_items[btn_idx].classList.contains('active')) {
          tab_items.forEach((tab_item, item_idx) => {
            
            tab_item.classList.remove('active');
            // if (tab_item.classList.contains('active')) {
            //   tab_item.classList.add('end-active')
            //   setTimeout(() => {
            //     tab_item.classList.remove('end-active')
            //   }, 200);
            // }
          })
          tab_items[btn_idx].classList.add('active')
          // setTimeout(() => {
          // }, 200);
        }
        tab_btns.forEach(item => {
          item.classList.remove('active')
        })
        tab_btn.classList.add('active')
      }
    })
  })
}

let swiper1 = new Swiper(".repair_homeSwiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".repair-button-next",
    prevEl: ".repair-button-prev",
  },
});

let swiper2 = new Swiper(".examples_workSwiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".examples_work-next",
    prevEl: ".examples_work-prev",
  },
});

let selecting_swiper = document.querySelector('.selecting__swiper');
if (selecting_swiper) {
  let selectingSwiper = new Swiper(selecting_swiper, {
    slidesPerView: 1,
    spaceBetween: 10,
    allowTouchMove: false,
    effect: 'fade',
  })

  document.querySelectorAll('.selecting__swiper .swiper-slide').forEach((el, idx) => {
    let btns = el.querySelectorAll('button');
    btns.forEach(btn => {
      btn.onclick = () => {
        selectingSwiper.slideNext();
      }
    })
  })
}

let services_swiper = document.querySelector('.services__swiper');
if (services_swiper) {
  let servicesSwiper = new Swiper (services_swiper, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 5000
    // },
    effect: 'fade',
    navigation: {
      nextEl: '.services_btns__next',
      prevEl: '.services_btns__prev',
    }
  })
}

let swiper3 = new Swiper(".examples_Swiper", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".examples_Swiper-next",
    prevEl: ".examples_Swiper-prev",
  },
});

let swiper4 = new Swiper(".complex_layouts_Swiper", {
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".complex_layouts_next",
    prevEl: ".complex_layouts_prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    840: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  },
});

let swiper6 = new Swiper(".complex_layouts_two_Swiper", {
  spaceBetween: 25,
  navigation: {
    nextEl: ".complex_layouts_two_next",
    prevEl: ".complex_layouts_two_prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    840: {
      spaceBetween: 35,
      slidesPerView: 2,
    },
  },
});

let swiper5 = new Swiper(".quizSwiper", {
  spaceBetween: 10,
  allowTouchMove: false,
  speed: 0,
  effect: 'fade',
});

let migration_tab_btns = document.querySelectorAll('.migration_in_btns button');
if (migration_tab_btns.length) {
  migration_tab_btns.forEach((btn, btn_id) => {
    btn.onclick = () => {
      migration_tab_btns.forEach((el, idx) => {
        el.classList.remove('active')
        if (btn_id > idx) {
          el.classList.add('disable_btn')
        } else {
          el.classList.remove('disable_btn')
        }
      })
      swiper5.slideTo(btn_id);
      btn.classList.add('active')
    }
  })
}

let quiz_fraction_current = document.querySelector('.quiz-fraction .current');
let quiz_fraction_len = document.querySelector('.quiz-fraction .len');

// function makeFraction() {
//   quiz_fraction_current.textContent = swiper2.activeIndex + 1
//   quiz_fraction_len.textContent = swiper2.slides.length
// }

// if (swiper2) {
  
//   makeFraction()

//   swiper2.on('slideChange', () => {
//     makeFraction()
//   })
// }

const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}


let init = false;
let quick_search = document.querySelector('.quick_search');
let quickSwiper;

function swiperCard1() {
  let w = this.window.innerWidth;
  if (w <= 768) {
    if (!init) {
      init = true;
      quickSwiper = new Swiper ('.quick_search .swiper', {
        slidesPerView: 1,
        spaceBetween: 36,
        navigation: {
          nextEl: ".quick_search .swiper_btns__next",
          prevEl: ".quick_search .swiper_btns__prev",
        }
      });
    }
  } else if (init) {
    quickSwiper.destroy();
    init = false;
  }
}

if (quick_search) {
  swiperCard1();
}

window.addEventListener('resize', function () {
  if (quick_search) {
    swiperCard1();
  }
})

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

let main_ranges = document.querySelectorAll('.main_range');

if (main_ranges.length) {
  main_ranges.forEach(mainRange => {
    const rangeInput = mainRange.querySelectorAll(".main_range__inp input"),
          range = mainRange.querySelector(".main_range__progress"),
          priceInput = mainRange.querySelectorAll('.main_range__result .result_btn span');
    let priceGap = 1000;
    let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    
    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
    
        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].textContent = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(minVal);
          priceInput[1].textContent = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(maxVal);
          range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });
  })
}

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

let about_home = document.querySelector('.about_home')
if (about_home) {
  let aboutHome = new Swiper (about_home, {
    slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.about_home__btn_next',
      prevEl: '.about_home__btn_prev',
    }
  })
}

let rangeContainer = document.querySelectorAll('.range-slider-container'),
    estate_cost = document.querySelector('.estate_cost'),
    initial_payment_val = document.querySelector('.initial_payment_val'),
    initial_payment_deg = document.querySelector('.initial_payment_deg'),
    monthly_payment = document.querySelector('.monthly_payment'),
    interest_rate_annoul = document.querySelector('.interest_rate_annoul'),
    term = document.querySelector('.term'),
    kredit_price = document.querySelector('.kredit_price'),
    required_income = document.querySelector('.required_income');

if (rangeContainer.length) {
  rangeContainer.forEach((rangeEl, idx) => {
    const rangeSlider = rangeEl.querySelector('.range-slider'),
          rangeValueBar = rangeEl.querySelector('.range-value-bar'),
          rangeValue = rangeEl.querySelector('.range-value .value'),
          rangeRation= rangeEl.querySelector('.range-value .degree'),
          minValue = rangeEl.querySelector('.range-slider').min,
          maxValue = rangeEl.querySelector('.range-slider').max;

    rangeValueBar.style.width = (rangeSlider.value - minValue) * 100 / (maxValue - minValue) + '%'
    if (idx == 0) {
      rangeValue.textContent = formatNumber(rangeSlider.value)
    } else if (idx == 1) {
      initialPayment();
      rangeRation.textContent = rangeSlider.value + ' %'
    } else {
      rangeValue.textContent = rangeSlider.value + ' лет'
    }

    makeMonthlyPayment();
    
    rangeSlider.oninput = () => {
      rangeValueBar.style.width = (rangeSlider.value - minValue) * 100 / (maxValue - minValue) + '%'
      if (idx == 0) {
        rangeValue.textContent = formatNumber(rangeSlider.value)
      } else if (idx == 1) {
        rangeRation.textContent = rangeSlider.value + ' %'
      } else {
        rangeValue.textContent = rangeSlider.value + ' лет'
      }
      initialPayment();
      makeMonthlyPayment();
    }
  })
}

function initialPayment() {
  initial_payment_val.textContent = formatNumber(estate_cost.value * initial_payment_deg.value / 100);
}

function makeMonthlyPayment() {
  let MONTHLY_RATE = Number(interest_rate_annoul.innerHTML.replace(",", ".")) / 12 / 100,
      TOTAL_RATE = Math.pow((1 + MONTHLY_RATE), (term.value * 12)),
      monthlyPayment = ((estate_cost.value) - (estate_cost.value * initial_payment_deg.value / 100)) * MONTHLY_RATE * TOTAL_RATE / (TOTAL_RATE - 1);
      // Необходимый_доход = monthlyPayment * 3
  monthly_payment.textContent = formatNumber2(monthlyPayment);
  kredit_price.textContent = formatNumber((estate_cost.value) - (estate_cost.value * initial_payment_deg.value / 100));
  required_income.textContent = formatNumber2(monthlyPayment * 3);
}

function formatNumber(num) {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(num)
}
function formatNumber2(num) {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 2 }).format(num)
}

const $input = document.querySelectorAll('input[type="tel"]');
if ($input.length) {
  $input.forEach(inp => {
    IMask(inp, {mask: '+{7}(000) 000-00-00'});
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