const cardContainer = document.getElementById("#cardsOrganizacion");
document - addEventListener("DOMContentLoaded", Cardsinfo);


async function Cardsinfo() {
    const url = "./js/data-manager/info.json";
    try {
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      pintarCards(respuesta);
    } catch (error) {
      console.log(error);
    }
  }
  function pintarCards(productos) {
    productos.forEach((prod) => {
      const { id, name, country, organization, descripcion, image } = prod;
      cardsOrganizacion.innerHTML += `
      <div class="card" ${id}>
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${name}</h5>
          <p class="card-text">Organizacion: ${organization.name}</p>
          <p class="card-text">${descripcion}</p>
          <div class="card-text text-center"><small class="text-muted text-center map"><iframe src="${country}"></iframe></small></div>
        </div>
      `;
    });
  }
