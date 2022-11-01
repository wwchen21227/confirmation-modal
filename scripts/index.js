const CssUtils = {
  addClass: (elem, className) => elem.classList.add(className),
  removeClass: (elem, className) => elem.classList.remove(className),
};

const $elem = (selector) => document.querySelector(selector);

const ActionType = {
  Yes: "Yes",
  Cancel: "Cancel",
};

function confirmationModal(message, btnOpen, onActionClicked) {
  const overlayHiddenCssClass = "modal-overlay--hidden";

  const overlayId = "js-modalOverlay-" + Date.now();

  this.modalOverlay = null;
  this.btnOpen = btnOpen;
  this.message = message;
  this.onActionClicked = onActionClicked;

  const buildModal = (overlayId) => {
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay", "modal-overlay--hidden", overlayId);
    overlay.innerHTML = `<div class="modal">
            <div class="modal-content">${this.message}</div>
            <div class="modal-actions">
                <button type="button" class="js-btnYes">Yes</button>
                <button type="button" class="js-btnCancel">Cancel</button>
            </div>
        </div>`;

    document.body.appendChild(overlay);
  };

  const bindEvents = (overlayId) => {
    this.modalOverlay = document.querySelector(`.${overlayId}`);

    this.modalOverlay
      .querySelector(".js-btnYes")
      .addEventListener("click", () => {
        this.onActionClicked({ actionType: ActionType.Yes });

        console.log(this.modalOverlay.classList);
        CssUtils.addClass(this.modalOverlay, overlayHiddenCssClass);
      });

    this.modalOverlay
      .querySelector(".js-btnCancel")
      .addEventListener("click", () => {
        this.onActionClicked({ actionType: ActionType.Cancel });

        CssUtils.addClass(this.modalOverlay, overlayHiddenCssClass);
      });

    this.btnOpen.addEventListener("click", () => {
      CssUtils.removeClass(this.modalOverlay, overlayHiddenCssClass);
    });
  };

  buildModal(overlayId);

  bindEvents(overlayId);
}

(function () {
  "use strict";

  const init = () => {
    const messageContent = $elem(".js-message");
    const btnOpenModal = $elem("#btnClickMe");
    const btnOpenModal2 = $elem("#btnClickMe2");

    new confirmationModal(
      "Are you sure you want to continue?",
      btnOpenModal,
      ({ actionType }) => {
        messageContent.innerHTML = `You just clicked "${actionType}"`;
      }
    );

    new confirmationModal(
      "Are you sure you want to continue?",
      btnOpenModal2,
      ({ actionType }) => {
        messageContent.innerHTML = `Btn 2 You just clicked "${actionType}"`;
      }
    );
  };

  window.addEventListener("load", () => {
    init();
  });
})();
