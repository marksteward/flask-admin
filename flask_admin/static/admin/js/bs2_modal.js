// fixes "remote modal shows same content every time"
$('.modal').on('hidden', function() {
  $(this).removeData('modal');
});

// FIXME: probably requires monkey patching to fire a load event
$('.modal').on('load', function() {
  // Apply flask-admin form styles after the modal is loaded
  window.faForm.applyGlobalStyles(document);
});
