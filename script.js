function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Corrigindo o seletor para img
  const img = document.querySelector("#profile img")
  const profile = document.querySelector("#profile")
  // Substituindo a imagem
  if (html.classList.contains("light")) {
    // Se estiver no modo claro, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar2.png")
  } else {
    // Se não estiver no modo claro, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
