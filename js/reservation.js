const serviceID = "default_service";
const templateID = "template_6mr32th";
/** Cumpleaños */
let btn_cumple = document.getElementById("button_cumple");

document
  .getElementById("form_cumple")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn_cumple.value = "Reservando...";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn_cumple.value = "Reservar";
        alert("Reservado!");
      },
      (err) => {
        btn_cumple.value = "Reservar";
        alert(JSON.stringify(err));
      }
    );
  });
/** Despedidas */
let btn_despe = document.getElementById("button_despe");

document
  .getElementById("form_despe")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn_despe.value = "Reservando...";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn_despe.value = "Reservar";
        alert("Reservado!");
      },
      (err) => {
        btn_.value = "Reservar";
        alert(JSON.stringify(err));
      }
    );
  });
/** Cena amigos */
let btn_cena_ami = document.getElementById("button_cena_ami");

document
  .getElementById("form_cena_ami")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn_cena_ami.value = "Reservando...";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn_cena_ami.value = "Reservar";
        alert("Reservado!");
      },
      (err) => {
        btn_cena_ami.value = "Reservar";
        alert(JSON.stringify(err));
      }
    );
  });
/** Fiesta Infatil */
let btn_fiesta_infa = document.getElementById("button_fiesta_infa");

document
  .getElementById("form_fiesta_infa")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn_fiesta_infa.value = "Reservando...";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn_fiesta_infa.value = "Reservar";
        alert("Reservado!");
      },
      (err) => {
        btn_fiesta_infa.value = "Reservar";
        alert(JSON.stringify(err));
      }
    );
  });
/** Declaraciones */
let btn_decla = document.getElementById("button_decla");

document
  .getElementById("form_decla")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn_decla.value = "Reservando...";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn_decla.value = "Reservar";
        alert("Reservado!");
      },
      (err) => {
        btn_decla.value = "Reservar";
        alert(JSON.stringify(err));
      }
    );
  });
/** Aniversario */
let btn_ani = document.getElementById("button_ani");

document
  .getElementById("form_ani")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn_ani.value = "Reservando...";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn_ani.value = "Reservar";
        alert("Reservado!");
      },
      (err) => {
        btn_ani.value = "Reservar";
        alert(JSON.stringify(err));
      }
    );
  });
