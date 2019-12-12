$(function() {
  $('#submit').click(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://formspree.io/mkngaozw',
      method: 'POST',
      data: { customer: $('#customer').val(), phone: $('#phone').val() },
      dataType: 'json'
    }).done(function() {
      $('#contact').html(
        '<h5>Дякуємо! Найближчим часом ми вам перетелефонуємо :)</h5>'
      );
    });
  });
});
