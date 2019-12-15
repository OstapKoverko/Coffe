$(function() {
  $('#submit').click(function(e) {
    let c1 = '',
      c2 = '',
      c3 = '',
      c4 = '',
      c5 = '',
      c6 = '',
      c7 = '',
      c8 = '',
      c9 = '',
      c10 = '',
      c11 = '',
      c12 = '',
      c13 = '',
      c14 = '';

    if ($('#Check1').is(':checked')) {
      c1 = $('#Check1').val();
    }
    if ($('#Check2').is(':checked')) {
      c2 = $('#Check2').val();
    }
    if ($('#Check3').is(':checked')) {
      c3 = $('#Check3').val();
    }
    if ($('#Check4').is(':checked')) {
      c4 = $('#Check4').val();
    }
    if ($('#Check5').is(':checked')) {
      c5 = $('#Check5').val();
    }
    if ($('#Check6').is(':checked')) {
      c6 = $('#Check6').val();
    }
    if ($('#Check7').is(':checked')) {
      c7 = $('#Check7').val();
    }
    if ($('#Check8').is(':checked')) {
      c8 = $('#Check8').val();
    }
    if ($('#Check9').is(':checked')) {
      c9 = $('#Check9').val();
    }
    if ($('#Check10').is(':checked')) {
      c10 = $('#Check10').val();
    }
    if ($('#Check11').is(':checked')) {
      c11 = $('#Check11').val();
    }
    if ($('#Check12').is(':checked')) {
      c12 = $('#Check12').val();
    }
    if ($('#Check13').is(':checked')) {
      c13 = $('#Check13').val();
    }
    if ($('#Check14').is(':checked')) {
      c14 = $('#Check14').val();
    }
    e.preventDefault();
    $.ajax({
      url: 'https://formspree.io/mkngaozw',
      method: 'POST',
      data: {
        Покупець: $('#customer').val(),
        Телефон: $('#phone').val(),
        Місто: $('#city').val(),
        'Відділення нової пошти': $('#new-post').val(),
        Замовлення:
          c1 +
          '  ' +
          c2 +
          '  ' +
          c3 +
          '  ' +
          c4 +
          '  ' +
          c5 +
          ' ' +
          c6 +
          '  ' +
          c7 +
          '  ' +
          c8 +
          '  ' +
          c9 +
          '  ' +
          c10 +
          '  ' +
          c11 +
          '  ' +
          c12 +
          '  ' +
          c13 +
          '  ' +
          c14
      },
      dataType: 'json'
    }).done(function() {
      $('#contact').html(
        '<h5>Дякуємо! Найближчим часом ми вам перетелефонуємо :)</h5>'
      );
    });
  });
});
