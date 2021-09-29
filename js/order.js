const carInstance = new Car();
const buycar = document.getElementById("buy-car");
const products = document.getElementById("list-products");
const productLists = document.querySelector("#car-list tbody");
const eraseCarBtn = document.getElementById("empty-car");
const orderProcessBtn = document.getElementById("buy-process");

loadEvent();

function loadEvent() {
  products.addEventListener("click", (e) => {
    carInstance.buyProduct(e);
  });

  buycar.addEventListener("click", (e) => {
    carInstance.eraseProduct(e);
  });

  eraseCarBtn.addEventListener("click", (e) => {
    carInstance.emptyCar(e);
  });

  document.addEventListener("DOMContentLoaded", carInstance.readLocalStorage());

  orderProcessBtn.addEventListener("click", (e) => carInstance.orderProcess(e));

  buycar.addEventListener("change", (e) => {
    carInstance.obtainEvent(e);
  });

  buycar.addEventListener("keyup", (e) => {
    carInstance.obtainEvent(e);
  });
}
