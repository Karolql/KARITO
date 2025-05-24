const noticias = [
  {
    titulo: "Feria del Grano y la Cantera 2025",
    fecha: "9 de mayo de 2025",
    imagen: "../imagenes/participacion feria del grano.jpg",
    contenido: "El viernes 9 de Mayo nos tocó participar en el desfile de la inauguración de la Feria del Grano y la Cantera 2025, agradecemos mucho a los grupos que participaron y representaron a nuestro Colegio, en especial Para Nuestros Reyes del Estudiante 2025 Paola y Mario."
  },
  {
    titulo: "Desfile Dia De Muertos",
    fecha: "1 de Noviembre de 2024",
    imagen: "../imagenes/download (1).png",
    contenido: "El Gran desfile de Día de Muertos de Pedro Escobedo,Qro.,  “La marcha de los difuntos 2022“ que desde hace 28 años organiza nuestro plantel de CECYTEQ, empieza a calentar motores para llenar de fiesta, de tradición, cultura, mágia, color, arte y alegría nuestro querido Pedro Escobedo, con el apoyo de La Casa de la Cultura de nuestro municipio comenzamos a organizar el tan bello evento de Día de muertos. "
  },
  {
    titulo: "Cuidar el entorno digital también es nuestra responsabilidad",
    fecha: "12 de mayo de 2025",
    imagen: "../imagenes/e.jpg",
    contenido: "Hubo bailes, teatro, muestras gastronómicas y más. La comunidad educativa celebró nuestras tradiciones con orgullo."
  }
];

// Render noticias
const contenedor = document.getElementById('contenedor-noticias');
noticias.forEach(noticia => {
  const div = document.createElement('div');
  div.className = 'noticia';
  div.innerHTML = `
    <img src="${noticia.imagen}" alt="${noticia.titulo}" class="img-clickable">
    <div class="noticia-content">
      <h3>${noticia.titulo}</h3>
      <small>${noticia.fecha}</small>
      <p>${noticia.contenido}</p>
    </div>
  `;
  contenedor.appendChild(div);
});

// Lightbox Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-grande");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("cerrar")[0];

// Abrir modal con imagen
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('img-clickable')) {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    captionText.innerHTML = e.target.alt;
  }
});

// Cerrar modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};
