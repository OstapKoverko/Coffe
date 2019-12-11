$(function() {
  $('#submit').click(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://formspree.io/mkngaozw',
      method: 'POST',
      data: { email: $('#customer').val(), message: $('#phone').val() },
      dataType: 'json'
    }).done(function() {
      $('#contact').html('<h4>Дякую! Я невдовзі Вам відповім!</h4>');
    });
  });
});

// $('#exampleModal').on('show.bs.modal', function(event) {
//   // var button = $(event.relatedTarget); // Button that triggered the modal
//   // var recipient = button.data('whatever'); // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this);
//   // modal.find('.modal-title').text('Ваше замовлення:');
//   // modal.find('.modal-body input').val(recipient);
// });
