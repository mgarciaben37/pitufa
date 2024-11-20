function print(msg) {
  console.log(msg);
}

// Elevar a una potencia - función invocada en el click del botón del formulario de potencia
function elevarA() {
  var valor = Number(document.getElementById("ejPotenciaValor").value); // Lee el dato introducido por el usuario para el número
  var potencia = Number(document.getElementById("ejPotenciaPotencia").value); // Lee el dato introducido por el usuario para la potencia
  var result = valor ** potencia; // Eleva el 'numero' a la 'potencia'
  document.getElementById("ejPotenciaResult").innerHTML = result; // Asigna al elemento html el resultado
}

// Tirar un dato de n lados - función invocada en el click del botón de tirar un dado
function tirarDado() {
  var numlados = Number(document.getElementById("dadoLados").value); // Lee el dato introducido por el usuario para el número de lados
  var result = Math.trunc(Math.random() * 1000) % (numlados + 1); // Calcula el módulo (numLados + 1) de generar un número random (0,xxxx) y multiplicarlo por 1000
  document.getElementById("dadoResult").innerHTML = result; // Asigna al elemento html el resultado
}

// Adivinar un número - función invocada en el click del botón del adivinar
function adivinar() {
  var apuestaUser = Number(document.getElementById("adivinaValue").value); // Lee el valor introducido por el usuario para su apuesta
  var randomValue = Math.trunc(Math.random() * 10); // Genera un valor random (0,xxx) y lo multiplicamos por 10 para quedarnos con la parte entera
  print("apuesta: " + apuestaUser);
  print("random: " + randomValue);
  var isMatch = apuestaUser == randomValue; // Guardamos si coinciden ambos datos o no
  print("match: " + isMatch);
  var result;
  if (isMatch) {
    // Rama si coincidencia
    result = "Acertaste!!";
  } else {
    // rama si no coincidencia
    result = "Prueba otra vez...";
  }
  document.getElementById("advinaResult").innerHTML = result; // Asigna al elemento html el resultado
}

function reverseString(value) {
  let size = value.length;
  let valorFinal = "";
  for (let i = size - 1; i >= 0; i--) {
    valorFinal = valorFinal + value[i];
  }

  return valorFinal;
}

function darleLaVuelta() {
  let valor = document.getElementById("reverseValue").value;
  console.log(valor);
  let result = reverseString(valor);
  console.log(result);
  document.getElementById("reverseResult").innerHTML = result;
}
