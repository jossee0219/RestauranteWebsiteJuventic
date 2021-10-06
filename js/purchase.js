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

  buycar.addEventListener("change", (e) => {
    carInstance.obtainEvent(e);
  });

  buycar.addEventListener("keyup", (e) => {
    carInstance.obtainEvent(e);
  });
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
    let productsLS, product;
    productsLS = JSON.parse(localStorage.getItem("productos"));
    productsLS.forEach(function (productLS, index) {
      product +=
        "\n" +
        JSON.stringify(
          "Plato: " +
            productLS.titulo +
            " Precio: $" +
            productLS.precio +
            " Cantidad: " +
            productLS.cantidad
        );
    }),
      console.log(document.querySelector("#total,p"));
    emailjs
      .send("service_2xj4c8l", "template_fqv6ixm", {
        addressee: document.getElementById("client").value,
        products: product.replace("undefined", ""),
        cc_to: document.getElementById("address").value,
        total_value: document.getElementById("total").value,
      })
      .then(
        function () {
          loadingGif.style.display = "none";
          document.querySelector("#loaders").appendChild(send);
          setTimeout(() => {
            send.remove();
            carInstance.emptyLocalStorage();
            alert(
              "Pedido registrado exitosamente\n Revisa el correo diligenciado, por favor"
            );
            window.location = "menu.html";
          }, 2000);
        },
        function (err) {
          alert(
            "Falló el envío del email\r\n Respuesta:\n " + JSON.stringify(err)
          );
        }
      );
  }
}
