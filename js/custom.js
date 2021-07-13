$('.open-popup').click(() => {
  $('.mfp-wrap').show();
  $('.mfp-bg').show();
  $('main').addClass('blured');
});

$('.open-popup-b').click(() => {
  $('.mfp-wrap-b').show();
  $('.mfp-bg').show();
  $('main').addClass('blured');
});

$('.open-popup-w').click(() => {
  $('.mfp-wrap-w').show();
  $('.mfp-bg').show();
  $('main').addClass('blured');
});

$('.popup-close').click(() => {
  $('.mfp-wrap').hide();
  $('.mfp-wrap-b').hide();
  $('.mfp-wrap-w').hide();
  $('.mfp-bg').hide();
  $('main').removeClass('blured');
});
