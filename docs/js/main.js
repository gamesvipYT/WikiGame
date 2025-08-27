const menu = document.getElementById("menuJuegos");

menu.addEventListener("change", () => {
  const juego = menu.value;

  if(juego !== "") {
    // Redirige a la página del juego
    window.location.href = "juegos/" + juego;
  }
});