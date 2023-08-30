function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de João Vitor sorrindo usando blusa amarela sentando em um restaurante"
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de João Vitor sorrindo usando blusa marrom sentando em um restaurante"
    )
  }
}
