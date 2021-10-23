/**
 * Trigger system alerts rendered as toasts
 */
(function () {
  'use strict';

  if ($('.toast').length > 0) {
    $('.toast').each((index, el) => {
      let toast = new bootstrap.Toast(el);

      toast.show();
    });
  }
})();
