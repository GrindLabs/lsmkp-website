/**
 * Disable form submit input after clicked
 */
(function () {
  'use strict';

  if ($('form').length > 0) {
    $('form input[type="submit"]').prop('disabled', false);
  }

  $('form').on('submit', () => {
    $('form input[type="submit"]').prop('disabled', true);
  });
})();
