class Car {
  //Añadir el producto al carrito
  buyProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains("add-car")) {
      const product = e.target.parentElement.parentElement;
      this.readDataProduct(product);
      console.log(product);
    }
  }

  readDataProduct(product) {
    const infoProduct = {
      imagen: product.querySelector("img").src,
      titulo: product.querySelector("h5,.title-food").textContent,
      precio: product.querySelector("price,strong").textContent,
      id: product.querySelector(".add-car").getAttribute("data-id"),
      cantidad: 1,
    };
    //Cuando se seleccione uno igual
    let productsLS;
    productsLS = this.obtainProductsLocalStorage();
    productsLS.forEach(function (productLS) {
      if (productLS.id === infoProduct.id) {
        productsLS = productLS.id;
      }
    });
    if (productsLS === infoProduct.id) {
      ("producto repetido");
    } else {
      this.insertCar(infoProduct);
    }
  }

  insertCar(product) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${product.imagen}" width=100>
      </td>
      <td>${product.titulo}</td>
      <td>${product.precio}</td>
      <td>
        <a href="#" class="delete-product bx bxs-x-circle" data-id="${product.id}"></a>
      </td>
    `;
    productLists.appendChild(row);
    this.saveProductsLocalStorage(product);
  }

  eraseProduct(e) {
    e.preventDefault();
    let product, productID;
    if (e.target.classList.contains("delete-product")) {
      e.target.parentElement.parentElement.remove();
      product = e.target.parentElement.parentElement;
      productID = product.querySelector("a").getAttribute("data-id");
    }
    this.deleteProductLocalStorage(productID);
    this.totalCalculate();
  }

  emptyCar(e) {
    e.preventDefault();
    while (productLists.firstChild) {
      productLists.removeChild(productLists.firstChild);
    }
    this.emptyLocalStorage();
    return false;
  }

  //Guardando en Local Storage
  saveProductsLocalStorage(product) {
    let products;
    products = this.obtainProductsLocalStorage();
    products.push(product);
    localStorage.setItem("productos", JSON.stringify(products));
  }

  obtainProductsLocalStorage() {
    let productLS;

    if (localStorage.getItem("productos") === null) {
      productLS = [];
    } else {
      productLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productLS;
  }

  deleteProductLocalStorage(productID) {
    let productsLS;
    productsLS = this.obtainProductsLocalStorage();
    productsLS.forEach(function (productLS, index) {
      if (productLS.id === productID) {
        productsLS.splice(index, 1);
      }
    });

    localStorage.setItem("productos", JSON.stringify(productsLS));
  }

  readLocalStorage() {
    let productsLS;
    productsLS = this.obtainProductsLocalStorage();
    productsLS.forEach(function (product) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <img src="${product.imagen}" width=100>
        </td>
        <td>${product.titulo}</td>
        <td>${product.precio}</td>
        <td>
          <a href="#" class="delete-product bx bxs-x-circle" data-id="${product.id}"></a>
        </td>
      `;
      productLists.appendChild(row);
    });
  }

  emptyLocalStorage() {
    localStorage.clear();
  }

  orderProcess(e) {
    e.preventDefault();
    if (this.obtainProductsLocalStorage().length === 0) {
      window.alert("No hay productos en el carrito");
    } else {
      location.href = "buy.html";
    }
  }

  totalCalculate() {
    let productLS;
    let total = 0,
      subtotal = 0,
      igv = 0;
    productLS = this.obtainProductsLocalStorage();
    for (let i = 0; i < productLS.length; i++) {
      let element = Number(productLS[i].precio * productLS[i].cantidad);
      total = total + element;
    }
    igv = parseFloat(total * 0.18).toFixed(2);
    subtotal = parseFloat(total - igv).toFixed(2);

    document.getElementById("subtotal").innerHTML = "$" + subtotal;
    document.getElementById("igv").innerHTML = "$" + igv;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
  }

  readLocalStorageShop() {
    let productsLS;
    productsLS = this.obtainProductsLocalStorage();
    productsLS.forEach(function (product) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <img src="${product.imagen}" width=100>
        </td>
        <td>${product.titulo}</td>
        <td>${product.precio}</td>
        <td>
          <input type="number" class="form-control cantidad" min="1" value=${
            product.cantidad
          }>
        </td>
        <td>${product.precio * product.cantidad}</td>
        <td>
          <a href="#" class="delete-product bx bxs-x-circle" style="font-size:30px" data-id="${
            product.id
          }"></a>
        </td>
      `;
      shopLists.appendChild(row);
    });
  }
}
