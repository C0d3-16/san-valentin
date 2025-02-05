const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    const randomTop = Math.floor(Math.random() * (screenHeight - btnHeight));
    const randomLeft = Math.floor(Math.random() * (screenWidth - btnWidth));

    btn.style.position = "absolute";
    btn.style.top = `${randomTop}px`;
    btn.style.left = `${randomLeft}px`;
}

btnNo.addEventListener("mouseenter", (e) => moverAleatoriamente(e.target));
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverAleatoriamente(e.target);
});
