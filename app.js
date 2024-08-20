
function esValido(texto) {
    for (let i = 0; i < texto.length; i++) {
        const codigo = texto.charCodeAt(i);
        // Verificar si está fuera del rango de letras minúsculas
        if (codigo < 97 || codigo > 122) { // Código ASCII: 'a' = 97, 'z' = 122
            return false; // Si se encuentra un carácter no válido
        }
    }
    return true;
}

function encriptar() {
    const texto = document.getElementById("input-text").value;

    if (!esValido(texto)) {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acentos.");
        return;
    }

    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "a":
                textoEncriptado += "ai";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += texto[i];
        }
    }

    document.getElementById("output-text").value = textoEncriptado;
    mostrarBotonCopiar();
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto;

    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    document.getElementById("output-text").value = textoDesencriptado;

    mostrarBotonCopiar();
}

// Función para copiar el texto al portapapeles
function copiar() {
    const texto = document.getElementById("output-text").value;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Error al copiar el texto: " + err);
    });
}

function mostrarBotonCopiar() {
    const outputText = document.getElementById("output-text").value;
    const copyBtn = document.getElementById("copy-btn");
    copyBtn.style.display = outputText ? "block" : "none";
}


// Asociando las funciones a los botones
document.getElementById("encrypt-btn").onclick = encriptar;
document.getElementById("decrypt-btn").onclick = desencriptar;
document.getElementById("copy-btn").onclick = copiar;

mostrarBotonCopiar();