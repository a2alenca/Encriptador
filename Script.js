document.addEventListener("DOMContentLoaded", function() {
    var botonCodificar = document.querySelector(".btn-codificar");
    var botonDecodificar = document.querySelector(".btn-decodificar");
    var figura = document.querySelector(".container-figura");
    var mensaje = document.querySelector(".container-mensaje");
    var salida = document.querySelector(".textoResultado");
    var entradaTexto = document.querySelector(".cajaEntrada");

    botonCodificar.addEventListener("click", codificar);
    botonDecodificar.addEventListener("click", decodificar);

    function codificar() {
        ocultarElementos();
        var texto = entradaTexto.value;
        var textoCodificado = codificarTexto(texto);
        salida.textContent = textoCodificado;
        entradaTexto.value = textoCodificado;
    }

    function decodificar() {
        ocultarElementos();
        var texto = entradaTexto.value;
        var textoDecodificado = decodificarTexto(texto);
        salida.textContent = textoDecodificado;
        entradaTexto.value = textoDecodificado;
    }

    function ocultarElementos() {
        figura.classList.add("ocultar");
        mensaje.classList.add("ocultar");
    }

    function codificarTexto(texto) {
        const reemplazos = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
        return texto.split('').map(caracter => reemplazos[caracter] || caracter).join('');
    }

    function decodificarTexto(texto) {
        const reemplazos = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };
        const clavesOrdenadas = Object.keys(reemplazos).sort((a, b) => b.length - a.length);
        return clavesOrdenadas.reduce((textoDecodificado, clave) => {
            return textoDecodificado.split(clave).join(reemplazos[clave]);
        }, texto);
    }

    const botonDuplicar = document.querySelector(".btn-duplicar");
    botonDuplicar.addEventListener("click", () => {
        var contenido = salida.textContent;
        navigator.clipboard.writeText(contenido);
        console.log("Texto copiado:", contenido);
    });
});
