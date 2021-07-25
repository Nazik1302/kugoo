resizeWin = function(){
	var win_h = $(window).height();

	$('.section_thank').css('height','auto');
	var thank_h = $('.section_thank').outerHeight();
	if(win_h > thank_h){
		$('.section_thank').css('height',win_h + 'px');
	}else{
		$('.section_thank').css('height','auto');
	}

}

$(document).ready(function(){

	resizeWin();
	$(window).on('resize', function(){
		resizeWin();
	})

	$(function() {
	    $(".accordion").accordion({ header: "h3", collapsible: true, active: false, heightStyle: "content"});
  	});

	$(".char-form1").validate({
		focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });

	$(".char-form2").validate({
		focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });
	$(".char-form3").validate({
		focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });

/*
	$('.formm').each(function(){
		$form = $(this);
	    //$form.find('button[type="submit"]').prop('disabled', true);
	    if( $(this).find('input[type="checkbox"]').is(':checked') ) {
	      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', false);
	    } else {
	      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', true);
	    }
	    $form.find('input[type="checkbox"]').click(function(){
	      if( $(this).is(':checked') ) {
	        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', false);
	      } else {
	        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', true);
	      }
	    });
	  });
	$('.forms').each(function(){
	    $form = $(this);
	    //$form.find('button[type="submit"]').prop('disabled', true);
	    if( $(this).find('input[type="checkbox"]').is(':checked') ) {
	      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', false);
	    } else {
	      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', true);
	    }
	    $form.find('input[type="checkbox"]').click(function(){
	      if( $(this).is(':checked') ) {
	        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', false);
	      } else {
	        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', true);
	      }
	    });
	  });
	$('.forme').each(function(){
	    $form = $(this);
	    //$form.find('button[type="submit"]').prop('disabled', true);
	    if( $(this).find('input[type="checkbox"]').is(':checked') ) {
	      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', false);
	    } else {
	      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', true);
	    }
	    $form.find('input[type="checkbox"]').click(function(){
	      if( $(this).is(':checked') ) {
	        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', false);
	      } else {
	        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', true);
	      }
	    });
	  });
	$('.former').each(function(){
	    $form = $(this);
	    //$form.find('button[type="submit"]').prop('disabled', true);
	    if( $(this).find('input[type="checkbox"]').is(':checked') ) {
	      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', false);
	    } else {
	      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', true);
	    }
	    $form.find('input[type="checkbox"]').click(function(){
	      if( $(this).is(':checked') ) {
	        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', false);
	      } else {
	        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', true);
	      }
	    });
	  });

	$('.main-form').each(function(){
	    $form = $(this);
	    //$form.find('button[type="submit"]').prop('disabled', true);
	    if( $(this).find('input[type="checkbox"]').is(':checked') ) {
	      $(this).find('.form-button').find('button[type="submit"]').prop('disabled', false);
	    } else {
	      $(this).find('.form-button').find('button[type="submit"]').prop('disabled', true);
	    }
	    $form.find('input[type="checkbox"]').click(function(){
	      if( $(this).is(':checked') ) {
	        $(this).parents('.form-button').find('button[type="submit"]').prop('disabled', false);
	      } else {
	        $(this).parents('.form-button').find('button[type="submit"]').prop('disabled', true);
	      }
	    });
	  });
*/

	var currentNumber = $('.display').text();
	$('.refresh-1').click(function(){
		$({numberValue: currentNumber}).animate({numberValue: 99}, {
		    duration: 8000,
		    easing: 'linear',
		    step: function() { 
		        $('.display').text(Math.ceil(this.numberValue)); 
		    }
		});
	});
	

	var wow = new WOW(
	{
		boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
		animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
		offset:       50,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
		mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
		live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
		callback:     function(box) {
	  		// функция срабатывает каждый раз при старте анимации
	  		// аргумент box — элемент, для которого была запущена анимация
		},
		scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
	}
	);
	wow.init();


	$('.btnNext').click(function(){
		var ind = $('.nav-tabs > .active').index();
		if ((ind >= 0) && (ind < 5)) {
			$('.nav-tabs > .active').next('li').find('a').trigger('click');
			$('.nav-tabs li').eq(ind).removeClass('active');
			$('.nav-tabs li').eq(ind+1).addClass('active');
		}
	});
	$('.btnPrev').click(function(){
		var ind = $('.nav-tabs > .active').index();
		if ((ind >= 1) && (ind <= 5)) {
			$('.nav-tabs > .active').prev('li').find('a').trigger('click');
			$('.nav-tabs li').eq(ind).removeClass('active');
			$('.nav-tabs li').eq(ind-1).addClass('active');
		}
	});

	$('.nav-tabs li a').click(function(){
		$('.nav-tabs li').removeClass('active');
		$(this).parents('li').addClass('active');
	});

	let flag = 0;
	$('.refresh').click(function(){
		if (flag == 0) {
			$(this).parents('.safety-item').find('.image-1').addClass('visible');
			$(this).find('span').text('Вид сзади');
			flag = 1;
		} else {
			$(this).parents('.safety-item').find('.image-1').removeClass('visible');
			$(this).find('span').text('Вид спереди');
			flag = 0;
		}
		
	});

	let f = 0;
	$('.refresh-1').click(function(){
		if (f == 0) {
			$(this).parents('.safety-item').find('.image-1').addClass('visible');
			$(this).find('span').text('Руль');
			f = 1;
		} else {
			$(this).parents('.safety-item').find('.image-1').removeClass('visible');
			$(this).find('span').text('Дисплей');
			f = 0;
		}	
	});

	let fe = 0;
	$('.refresh-2').click(function(){
		if (fe == 0) {
			$(this).parents('.safety-item').find('.image-2').removeClass('visible');
			$(this).parents('.safety-item').find('.image-1').addClass('visible');
			$(this).find('span').text('Поворотник');
			fe = 1;
		} else if (fe == 1) {
			$(this).parents('.safety-item').find('.image-1').removeClass('visible');
			$(this).parents('.safety-item').find('.image-2').addClass('visible');
			$(this).find('span').text('Переднияя LED-фара');
			fe = 2;
		} else if (fe == 2) {
			$(this).parents('.safety-item').find('.image-1').removeClass('visible');
			$(this).parents('.safety-item').find('.image-2').removeClass('visible');
			$(this).find('span').text('Задний стоп-сигнал');
			fe = 0;
		}
	});


	$('body').on('click','.future-nav a',function(){
	    $('.future-nav a').removeClass('active');
	    $(this).addClass('active');
	    var href = $(this).attr('href');
	    $('.future-tab-pane').removeClass('active').removeClass('in');
	    var id = $(href).addClass('active');
	    setTimeout(function(){
	    	$(href).addClass('in');
	    }, 200);
	    return false;
	});

	$('body').on('click','.ooos-tab-nav a',function(){
	    $('.ooos-tab-nav a').removeClass('active');
	    $(this).addClass('active');
	    var href = $(this).attr('href');
	    $('.team-item.visible').show();
		$('.team-item.hidden').hide();
	    $('.ooos-pane').removeClass('active').removeClass('in');
	    var id = $(href).addClass('active');
	    setTimeout(function(){
	    	$(href).addClass('in');
	    }, 200);
	    return false;
	});

	$('body').on('click','.popup-nav-tabs a',function(){
	    $('.popup-nav-tabs a').removeClass('active');
	    $(this).addClass('active');
	    var href = $(this).attr('href');
	    $('.popup-tab-pane').removeClass('active').removeClass('in');
	    var id = $(href).addClass('active');
	    setTimeout(function(){
	    	$(href).addClass('in');
	    }, 200);
	    return false;
	});

	$('.poddelka').click(function(){
		$('.popup-nav-tabs a').removeClass('active');
		$('.podd').addClass('active');
		$('.popup-tab-pane').removeClass('active').removeClass('in');
		$('#poddelka').addClass('active').addClass('in');
	});

	$('.compl').click(function(){
		$('.popup-nav-tabs a').removeClass('active');
		$('.compl').addClass('active');
		$('.popup-tab-pane').removeClass('active').removeClass('in');
		$('#complect').addClass('active').addClass('in');
	});

	$('.prover').click(function(){
		$('.popup-nav-tabs a').removeClass('active');
		$('.prove').addClass('active');
		$('.popup-tab-pane').removeClass('active').removeClass('in');
		$('#proverka').addClass('active').addClass('in');
	});




	$('.image-popups').magnificPopup({
		type: 'image',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
		beforeOpen: function() {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
				$('.scrolling-block').css('left','-8px');
				$('main').addClass('blured');
			},
		afterClose: function() {
				$('.scrolling-block').css('left','0px');
				
			},
		beforeClose: function() {
				$('main').removeClass('blured');
			}
		},
		closeOnContentClick: true,
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 45,
		slidesPerView: 'auto',
		navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
		},
		breakpoints: {
	    576: {
	      spaceBetween: 0
	    }
	  }
	});

	var show = true;
    var countbox = '.why';
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top - 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 3000
            });
            show = false;
        }
    });


	$('.sert-popup').magnificPopup({
		type: 'image',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
		beforeOpen: function() {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
				$('.scrolling-block').css('left','-8px');
				$('main').addClass('blured');
			},
		afterClose: function() {
				$('.scrolling-block').css('left','0px');
			},
		beforeClose: function() {
			$('main').removeClass('blured');
		}
		},
		closeOnContentClick: true,
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});


	$('.scrolled').click(function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 350);
    });

	/*var $poster = $('.poster'),
  	transformPoster = 'translateX(' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ('+ 0 + 'deg) translateY(' + 0 + 'px)'; //poster transform
  	$poster.css('transform', transformPoster);
  	$poster.css('scale', '1');
	$('.poster').mouseleave(function(){
		var $poster = $('.poster');
		transformPoster = 'translateX(' + 0 + 'px) translateZ(' + 0 + 'px) rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ('+ 0 + 'deg) translateY(' + 0 + 'px)'; //poster transform
	  	$poster.css('transform', transformPoster);
	  	$poster.css('scale', '1');
	  	//$poster.css('transition', 'all .2s');
	});  
	$('.poster').on('mousemove', function(e) {
	  	var w = $('.poster').width(); //window width
	    h = $('.poster').height(); //window height
	    var offsetX = e.offsetX==undefined?e.layerX:e.offsetX;
	  	var offsetY = e.offsetY==undefined?e.layerY:e.offsetY;
	  	centerX =  Math.round(w / 2);
	  	centerY = Math.round(h / 2);
	    offsetPoster = $poster.data('offset');
	    if (offsetX > centerX) {
	    	offsetX -= centerX;
	    } else {
	    	offsetX = centerX - (w - offsetX);
	    }
	    if (offsetY > centerY) {
	    	offsetY -= centerY;
	    } else {
	    	offsetY = centerY - (h - offsetY);
	    }
	    transformPoster = 'translateX(' + offsetX * offsetPoster + 'px) translateZ(' + 0 + 'px) rotateX(' + 0 + 'deg) rotateY(' + offsetX * offsetPoster + 'deg) rotateZ('+ 0 + 'deg) translateY(' + offsetY * offsetPoster + 'px)'; //poster transform
	  	$(this).css('transform', transformPoster);
	  	$(this).css('will-change','transform');
	  	
	});*/

	$(".swiper-slide .join-action").on( "click", function() {
		var tmp = 0;
		if (!$(this).parents('.swiper-slide').find('input').prop( "checked" )){
			$(this).parents('.swiper-slide').find('input').prop( "checked", true );
			$(this).parents('.swiper-slide').find('label').addClass('active');
			$(this).text('Выбрано');
			$('.form-components form .form-input input').addClass('selectedd');

		}
		else{
			$(this).parents('.swiper-slide').find('input').prop( "checked", false );
			$(this).parents('.swiper-slide').find('label').removeClass('active');
			$(this).text('Выбрать акцию');
			$('.form-components form .form-input input').removeClass('selectedd');
		}
		let text ="";
		$('.swiper-slide input').each(function(){
			console.log($(this).prop( "checked" ));
			if (!$(this).parents('.swiper-slide').find('input').prop( "checked" )) {
				$(this).parents('.swiper-slide').find('label').removeClass('active');
			} else {
				text += "<p>";
				text += $(this).parents('.swiper-slide').find('label').find('h3').text();
				text += "</p>";
			}
			if($(this).prop( "checked" )) {
				tmp ++;
				console.log('sss')
			}

		});
		$('.discount-text').html(text);
		$('.hidin').val(text);
		console.log(text);
		if (tmp!=0){
			console.log('eee boy');
		}
		else {
			console.log(':(');
			$('.hidin').val('Акции не выбраны');
			$('.discount-text').html('<p class="pre-text">Вы решили купить Kugoo без скидки или подарка :(</p>');
		}
	});


	$('input[type="tel"]').mask("+38 (999) 999-99-99");
	$('input[type="text"]').mask("9999  99999", {"placeholder": ""});

	$('.form-button button').click(function(){
		aa = $('.prov-input').val();
		aa = aa.replace(/\s{2,}/g, '');
		$('#preloader').fadeIn();
		setTimeout(function(){
			$('#preloader').fadeOut();
			setTimeout(function(){
				if (aa.indexOf('1203') + 1) {
					$('.answer').html('<h4>Поздравляем, ваш Kugoo подлинный!</h4><p>Произведен: Март, 2019 года</p>');
			    	$('.prov-form').trigger("reset");
				}
           else if (aa.indexOf('1506') + 1) {
					$('.answer').html('<h4>Поздравляем, ваш Kugoo подлинный!</h4><p>Произведен: Июль, 2019 года</p>');
			    	$('.prov-form').trigger("reset");
				}
              else{
					$('.answer').html('<h4>Что-то не так, серийного номера <br> <span>' + aa + '</span> нет в базе</h4>');
			   		$('.prov-form').trigger("reset");
				}
			},1000);
		},2000);

		
		
		//console.log(aa);
	});
	

	$(".main-form").validate({
		focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });

    $(".formm").validate({
		focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });
    $(".forms").validate({
		focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });
    $(".forme").validate({
		focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });
    $(".former").validate({
		focusInvalid: false,
        rules: {
            tel: {
                required: true
            }
        },
        messages: {
            tel: {
                required: 'Заполните телефон'
            }
        },
    });


	$('body').on('click','.contacts-tab-nav a',function(){
	    $('.contacts-tab-nav a').removeClass('active');
	    $(this).addClass('active');
	    var href = $(this).attr('href');
	    $('.contacts-tab-pane').removeClass('active').removeClass('in');
	    var id = $(href).addClass('active');
	    setTimeout(function(){
	    	$(href).addClass('in');
	    }, 200);
	    return false;
	});

	if (document.documentElement.clientWidth>576) {
		$('#tab2').each(function(){
			if ($(this).hasClass('active')) {
				setTimeout(function(){
					$(this).find('.tab-image').find('.img-3').removeClass('visible').addClass('unvisible');
					$(this).find('.tab-image').find('.img-3-hid').removeClass('unvisible').addClass('visible');
				},2000);
			}
		});

		$('#tab3').each(function(){
			if ($(this).hasClass('active')) {
				setTimeout(function(){
					$(this).find('.tab-image').find('.img-2').removeClass('visible').addClass('unvisible');
					$(this).find('.tab-image').find('.img-2-hid').removeClass('unvisible').addClass('visible');
				},2000);
			}
		});
		$('.nav-tabs li a').click(function(){
			$('.tab-pane').find('.tab-image').find('.img-2').addClass('visible').removeClass('unvisible');
			$('.tab-pane').find('.tab-image').find('.img-2-hid').addClass('unvisible').removeClass('visible');
			$('.tab-pane').find('.tab-image').find('.img-3').addClass('visible').removeClass('unvisible');
			$('.tab-pane').find('.tab-image').find('.img-3-hid').addClass('unvisible').removeClass('visible');
		});
		$('.amort').click(function(){
			setTimeout(function(){
				$('.tab-pane').find('.tab-image').find('.img-2').removeClass('visible').addClass('unvisible');
				$('.tab-pane').find('.tab-image').find('.img-2-hid').removeClass('unvisible').addClass('visible');
			},2000);
		});
		$('.podnozh').click(function(){
			setTimeout(function(){
				$('.tab-pane').find('.tab-image').find('.img-3').removeClass('visible').addClass('unvisible');
				$('.tab-pane').find('.tab-image').find('.img-3-hid').removeClass('unvisible').addClass('visible');
			},2000);
		});
	}
	

	

	$('.hide-panel').click(function(){
		$(".scrolling-block").fadeOut();
		setTimeout(function(){
			$(".scrolling-block").addClass('hidden-block');
		},500);
		
	});

	$('.other-manager').click(function(){
		$('.manager-one').toggleClass('vis');
		$('.manager-two').toggleClass('viss');
	});

	let flagg = 0;
	$('.visibility-team').click(function(){
		if (flagg == 0) {
			$('.team-item.visible').hide();
			$('.team-item.hidden').show();
			flagg = 1;
		} else {
			$('.team-item.visible').show();
			$('.team-item.hidden').hide();
			flagg = 0;
		}
		
	});


	$('.open-popup').magnificPopup({
	  	//mainClass: 'mfp-fade',
	  	removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
				$('.scrolling-block').css('left','-8px');
				$('main').addClass('blured');


				_hcwp = window._hcwp || [];
				_hcwp.push({widget:"Stream", widget_id: 104125});
				(function() {
				if("HC_LOAD_INIT" in window)return;
				HC_LOAD_INIT = true;
				var lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en").substr(0, 2).toLowerCase();
				var hcc = document.createElement("script"); hcc.type = "text/javascript"; hcc.async = true;
				hcc.src = ("https:" == document.location.protocol ? "https" : "http")+"://w.hypercomments.com/widget/hc/104125/"+lang+"/widget.js";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hcc, s.nextSibling);
				})();
				
			},
			afterClose: function() {
				$('.scrolling-block').css('left','0px');
			},
			beforeClose: function() {
				$('main').removeClass('blured');
				$('.mfp-content').removeClass('mob-pop');
				$('#main-popup').css('flex-shrink','1');
			}
		},
		midClick: true
	});

	$('.popup-close').click(function(){
	    $.magnificPopup.close();
	});

	$('[data-scroll]').mCustomScrollbar();
	if (document.documentElement.clientWidth > 576) {
		$('[data-scrolls]').mCustomScrollbar();
	}

	if (document.documentElement.clientWidth<576) {
		$('.tab-image').find('.img-3').attr('src', 'img/tab-image-2.png');
		$('.tab-image').find('.img-2').attr('src', 'img/tab-image-4.png');
		$('.tab-image').find('.img-4').attr('src', 'img/tab-image-3.png');
		$('.tab-image').find('.img-5').attr('src', 'img/tab-image-5.png');
		$('.tab-image').find('.img-6').attr('src', 'img/tab-image-6.png');
    $('.img-3-hid').hide();
    $('.img-2-hid').hide();
		$('.advantages-tab-content .testimonials-items .btn-area').remove();
		$('.visibility-team').remove();
		$('.mob-none').remove();
		$('.safety-items').slick({
			nextArrow: '<div class="next-arrow"></div>',
  			prevArrow: '<div class="prev-arrow"></div>',
		});

		$('.ooos-items').slick({
			nextArrow: '<div class="next-arrow"></div>',
  			prevArrow: '<div class="prev-arrow"></div>',
		});

		$('.testimonials-items').slick({
			nextArrow: '<div class="next-arrow"></div>',
  			prevArrow: '<div class="prev-arrow"></div>',
		});

		$('.team-items').slick({
			nextArrow: '<div class="next-arrow"></div>',
  			prevArrow: '<div class="prev-arrow"></div>',
		});
		$('.ooos-tab-nav ul li a').click(function(){
			setTimeout(function() {
				$('.ooos-items').slick("getSlick").refresh();
				$('.testimonials-items').slick("getSlick").refresh();
				$('.team-items').slick("getSlick").refresh();
		    },0);
		});

		$('.mobile-popup').click(function(){
			$('.mfp-content').addClass('mob-pop');
			$('#main-popup').css('flex-shrink','0');
		});
		
	}


	$('.open-char').magnificPopup({
	  	//mainClass: 'mfp-fade',
	  	removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
				$('.scrolling-block').css('left','-8px');
				$('main').addClass('blured');				
			},
			afterClose: function() {
				$('.scrolling-block').css('left','0px');
			},
			beforeClose: function() {
				$('main').removeClass('blured');
				$('.mfp-content').removeClass('mob-pop');
				$('#main-popup').css('flex-shrink','1');
			}
		},
		midClick: true
	});

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  infinite: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  infinite: false,
	  focusOnSelect: true
	});


	

	var rellax = new Rellax('.rellax');

	
	

	$('body').on('click', '.play', function() {
		var $video = $('.video iframe'),
			src = $video.attr('src');
 		$('.vid-open').fadeOut();
        $('.video-poster').fadeOut();
        $(this).fadeOut();
		$video.attr('src', src + '&autoplay=1');
	});
	/*var controls = {
        video: $("#youtube-video"),
        playpause: $(".play"),
                     
    };
    //Клик на playpause
    controls.playpause.on('click', function(){
        //Проверка класса кнопки
        if ($(this).hasClass("paused")) {
        	src = video.attr('src');   
 
			video.attr('src', src + '&autoplay=1');
            //Делаем эту кнопку невидимой
            $(this).fadeOut();
            $('.vid-open').fadeOut();
            $('.video-poster').fadeOut();
            //Находим соседа кнопки который в верху (в нашем случае video) и включаем (get(0) необзодим т.к. play() не является функцией jquery, get(0) вернет чистый html документ
            $(this).prev().get(0).play();
            $(this).toggleClass("paused"); 
        }
    });
    controls.video.on('click', function(){
        $(this).next().toggleClass("paused");
        $(this).get(0).pause();
    });*/



});


$(window).scroll(function(event) {
	let h = ($('.header').height()) + ($('.why').height() / 2) - 300;
	wh = $(document).outerHeight();
	wf = $('.footer').outerHeight();
	ww = wh - wf;
	ww = ww - 700;
	if(($(this).scrollTop() > h) && ($(this).scrollTop() < ww)) {
		$(".scrolling-block").fadeOut();
		//return false;
	} else {
		$(".scrolling-block").fadeOut();
	} 
}); 
