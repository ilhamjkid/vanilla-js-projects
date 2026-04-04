const btnRippleEffect = document.querySelector(".button-ripple-effect__btn");

btnRippleEffect.addEventListener("click", (e) => {
  const userClickedPositionX = e.clientX;
  const userClickedPositionY = e.clientY;
  const buttonPositionX = btnRippleEffect.getBoundingClientRect().x;
  const buttonPositionY = btnRippleEffect.getBoundingClientRect().y;
  const ripplePositionLeft = `${userClickedPositionX - buttonPositionX}px`;
  const ripplePositionTop = `${userClickedPositionY - buttonPositionY}px`;
  const ripple = document.createElement("span");
  ripple.classList.add("button-ripple-effect__ripple-btn");
  ripple.style.left = ripplePositionLeft;
  ripple.style.top = ripplePositionTop;
  btnRippleEffect.append(ripple);
  setTimeout(() => ripple.remove(), 500);
});
