const cardContainerDog = document.getElementById("#containerImage");
const modal = document.getElementById("modal");
const flex = document.getElementById("flex");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("close");
document - addEventListener("DOMContentLoaded", CardsDog);

async function CardsDog() {
  const url = "./js/data-manager/dogs.json";
  try {
    const resultado = await fetch(url);
    const respuesta = await resultado.json();
    mostrarCards(respuesta);
  } catch (error) {
    console.log(error);
  }
}
 function mostrarCards(cards) {
  cards.forEach((card) => {
    const { Orgid, name, img, star, category, id, location } = card;
    containerImage.innerHTML += `
    <div class="card-group-dog">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h2 class="card-title";>${name}</h2>
      <p class="card-text"></p>
      <p class="card-text">${star}</p>
      <p class="card-text">${category.location}</p>
      <button onclick="verPerro(${id})" class="btn btn-primary">Adoptar</button>
    </div>
  </div>
      `;
  });
}

function verPerro(id) {
  const modal = document.querySelector(".modal .modal-body");
  modal.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${name}</p>
      <p>Precio: ${id}</p>
      <p>Cantidad :${category}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      `;
}