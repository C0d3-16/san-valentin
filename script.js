const btnNo = document.querySelector("#btn-no");

function moverAleatoriamente(btn) {
    // Obtener las dimensiones de la pantalla y del botón
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    // Calcular posiciones aleatorias dentro de los límites de la pantalla
    const randomTop = Math.floor(Math.random() * (screenHeight - btnHeight));
    const randomLeft = Math.floor(Math.random() * (screenWidth - btnWidth));

    // Aplicar las nuevas posiciones al botón
    btn.style.position = "absolute";
    btn.style.top = `${randomTop}px`;
    btn.style.left = `${randomLeft}px`;
}

// Evento para dispositivos con mouse (computadoras)
btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});

// Evento para dispositivos táctiles (móviles)
btnNo.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del touch
    moverAleatoriamente(e.target);
});