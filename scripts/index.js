(function () {
  "use strict";

  const $elem = (selector) => document.querySelector(selector);

  const CssUtils = {
    addClass: (elem, className) => elem.classList.add(className),
    removeClass: (elem, className) => elem.classList.remove(className),
  };

  let modalOverlay, messageContent;

  const wireEvents = () => {
    $elem("#btnClickMe").addEventListener("click", () => {
      CssUtils.removeClass(modalOverlay, "modal-overlay--hidden");
      messageContent.innerHTML = "";
    });

    $elem(".js-btnYes").addEventListener("click", () => {
      CssUtils.addClass(modalOverlay, "modal-overlay--hidden");
      messageContent.innerHTML = `You just clicked "Yes"`;
    });

    $elem(".js-btnCancel").addEventListener("click", () => {
      CssUtils.addClass(modalOverlay, "modal-overlay--hidden");
      messageContent.innerHTML = `You just clicked "Cancel"`;
    });
  };

  const init = () => {
    modalOverlay = $elem(".js-modalOverlay");
    messageContent = $elem(".js-message");

    wireEvents();
  };

  window.addEventListener("load", () => {
    init();
  });
})();
