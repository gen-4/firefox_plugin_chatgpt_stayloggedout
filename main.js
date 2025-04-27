let target = null;

const clickTarget = () => {
  target = document.querySelector('[data-testid="dismiss-welcome"]');
  if (!target) {
    setTimeout(clickTarget, 200);
  } else {
    target.click();
  }
};

clickTarget();
