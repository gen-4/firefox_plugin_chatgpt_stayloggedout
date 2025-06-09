let target = null;

const clickTarget = () => {
  target = document.querySelector('[data-testid="dismiss-welcome"]');

  if (!target) {
    target = document.querySelector('[data-testid="modal-no-auth-rate-limit"] a[href="#"]');
  }
  if (!target) {
    setTimeout(clickTarget, 200);
  } else {
    target.click();
  }
};

clickTarget();
