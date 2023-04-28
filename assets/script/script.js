function converter() {
  const texto = document.getElementById("texto").value;
  document.getElementById("copy-btn").style.display = "block";

  let bionico = "";

  for (let i = 0; i < texto.length; i++) {
    if (/[Aa]/.test(texto[i])) {
      bionico += '<span>a</span>';
    } else if (/[Ee]/.test(texto[i])) {
      bionico += '<span>e</span>';
    } else if (/[Ii]/.test(texto[i])) {
      bionico += '<span>i</span>';
    } else if (/[Oo]/.test(texto[i])) {
      bionico += '<span>o</span>';
    } else if (/[Ss]/.test(texto[i])) {
      bionico += '<span>s</span>';
    } else if (/[Tt]/.test(texto[i])) {
      bionico += '<span>t</span>';
    } else {
      bionico += texto[i];
    }
  }

  document.getElementById("bionico").innerHTML = bionico;
  document.querySelector(".resultado").style.display = "block";
}

let isTextCopied = false;

function copiar() {
  var bionico = document.getElementById("bionico");
  var range = document.createRange();
  range.selectNodeContents(bionico);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  isTextCopied = true;
}

window.onload = function () {
  var copiedMessage = document.querySelector(".copied-message");
  if (isTextCopied) {
    copiedMessage.style.display = "block";
    setTimeout(() => {
      copiedMessage.style.display = "none";
    }, 2000);
  } else {
    copiedMessage.style.display = "none";
  }
}

function bionicReading() {
  const texto = document.getElementById("texto").value.toLowerCase();
  const frequenciaVogais = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const letra = texto.charAt(i);
    if (frequenciaVogais.hasOwnProperty(letra)) {
      frequenciaVogais[letra]++;
    }
  }

  for (let i = 0; i < texto.length; i++) {
    const letra = texto.charAt(i);
    if (frequenciaVogais[letra] > 0) {
      resultado += '<span>' + letra + '</span>';
      frequenciaVogais[letra] = 0;
    } else {
      resultado += letra;
    }
  }

  document.getElementById("bionico").innerHTML = resultado;
  document.querySelector(".resultado").style.display = "block";
}


// Limpar campos
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  const input = document.getElementById("texto");
  const output = document.getElementById("bionico");
  input.value = "";
  output.textContent = "";
});

// Copiar para área de transferência
const copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", () => {
  copiar();
  alert("O texto foi copiado para a área de transferência.");
});