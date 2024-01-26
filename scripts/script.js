function procesar(type) {
  const texto = document.getElementById("texto").value.toLowerCase();
  let opcion = type;
  let resultado = "";

  if (texto === "") {
    return;
  }
  if (opcion === "encriptar") {
    resultado = encriptar(texto);
  } else if (opcion === "desencriptar") {
    resultado = desencriptar(texto);
  }

  document.getElementById("resultado").innerText = resultado;
}

function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function copiarResultado() {
  const resultado = document.getElementById("resultado").innerText;
  const textarea = document.createElement("textarea");
  textarea.value = resultado;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("¡Texto copiado al portapapeles!");
}
