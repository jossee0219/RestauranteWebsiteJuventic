const carInstance = new Car();
const shopLists = document.querySelector("#buy-list tbody");
const buycar = document.getElementById("buy-car");
const purchaseProcessBtn = document.getElementById("process");
const client = document.getElementById("client");
const address = document.getElementById("address");

loadEvent();

function loadEvent() {
  document.addEventListener(
    "DOMContentLoaded",
    carInstance.readLocalStorageShop()
  );

  buycar.addEventListener("click", (e) => carInstance.eraseProduct(e));

  carInstance.totalCalculate();

  purchaseProcessBtn.addEventListener("click", purchaseProcess);
}

function purchaseProcess(e) {
  e.preventDefault();

  if (carInstance.obtainProductsLocalStorage().length === 0) {
    window.alert(
      "No se puede realizar la compra porque no hay productos seleccionados"
    );
    location.href = "menu.html";
  } else if (client.value === "" || address.value === "") {
    window.alert("Por favor, diligencie todos los campos");
  } else {
    const loadingGif = document.querySelector("#load");
    loadingGif.style.display = "block";

    const send = document.createElement("img");
    send.src = "../images/mail.gif";
    send.id = "mailImage";

    setTimeout(() => {
      loadingGif.style.display = "none";
      document.querySelector("#loaders").appendChild(send);
      setTimeout(() => {
        send.remove();
        carInstance.emptyLocalStorage();
        window.location = "menu.html";
      }, 2000);
    }, 3000);
  }
}
