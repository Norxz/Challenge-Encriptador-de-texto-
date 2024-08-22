function esValido(texto) {
    // Verifica si el texto contiene solo letras minúsculas sin acentos
    return /^[a-z\s]+$/.test(texto);
}

function encriptar() {
    const texto = document.getElementById("input-text").value;

    if (!esValido(texto)) {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acentos.");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = textoEncriptado;
    mostrarBotonCopiar();
    ocultarMuñecoYTexto();
}

function desencriptar() {
    const texto = document.getElementById("input-text").value;

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = textoDesencriptado;
    mostrarBotonCopiar();
    ocultarMuñecoYTexto();
}

function ocultarMuñecoYTexto() {
    const tarjetaContenedor = document.querySelector(".tarjeta-contenedor");
    tarjetaContenedor.style.display = "none";
}

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
    copyBtn.style.display = outputText ? "inline-block" : "none";
}



// Asociando las funciones a los botones
document.getElementById("encrypt-btn").addEventListener("click", encriptar);
document.getElementById("decrypt-btn").addEventListener("click", desencriptar);
document.getElementById("copy-btn").addEventListener("click", copiar);

// Inicializar el estado del botón "Copiar"
mostrarBotonCopiar();