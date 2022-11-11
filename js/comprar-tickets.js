const TICKET = 200;

const ESTUDIANTE = 80;
const TRAINEE = 50;
const JUNIOR = 15;

let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#mail");
let cantidad = document.querySelector("#cantidadTickets");
let categoria = document.querySelector("#categoriaSelect");
let resultado = document.querySelector("#totalPago");
let btnBorrar = document.querySelector("#btnBorrar");
let btnCalcular = document.querySelector("#btnResumen");

btnCalcular.addEventListener("click", calcularTotal);
btnBorrar.addEventListener("click", borrar);

function calcularTotal(event) {
  event.preventDefault();
  let descuento = calcularDescuento(categoria.value);

  if (validar() == true){
  resultado.textContent = (TICKET - descuento) * cantidad.value;
  }
}

function calcularDescuento(categoria) {
  switch (categoria) {
    case "0":
      return 0;
    case "1":
      return (TICKET * ESTUDIANTE) / 100;
    case "2":
      return (TICKET * TRAINEE) / 100;
    case "3":
      return (TICKET * JUNIOR) / 100;
    default:
      break;
  }
}

function borrar() {
  nombre.value = "";
  apellido.value = "";
  cantidad.value = "";
  categoria.value = "";
  resultado.textContent = "";
}

function validar(){
  event.preventDefault();

  /*Creo variable booleana*/
  var todoOk = true;

  /*Valido nombre*/
  if (nombre.value.length < 2) {
    alert ('El nombre ingresado no es valido.');
    todoOk = false;
  }

  /*Valido apellido*/
  if (apellido.value.length < 2) {
    alert ('El apellido ingresado no es valido.');
    todoOk = false;
  }

  /*Valido email*/
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  if (!expresion.test(email.value)) {
    alert ('El Email ingresado no es valido.');
    todoOk = false;
  }
  
  /*Valido cantidad*/
  if (isNaN(cantidad.value)) {
    alert ('Ingrese una cantidad valida.');
    todoOk = false;
  }

  /*Valido categoria*/
  if (categoria.value == 0) {
    alert ('Seleccione una categoria.');
    todoOk = false;
  }

  return todoOk;
}