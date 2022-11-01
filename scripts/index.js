(function () {
  "use strict";

  const $elem = (selector) => document.querySelector(selector);

  const init = () => {
    $elem("#btnClickMe").addEventListener("click", () =>
      console.log("Clicking")
    );
  };

  window.addEventListener("load", () => {
    init();
  });
})();
