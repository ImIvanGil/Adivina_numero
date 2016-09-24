    // Variables Globales para Nodos DOM
    var cuenta, limite, max, maximo, numero;


    function modal() {
        modal = document.getElementById('myModal');
        modal.style.display = "block";

    }

    function validar() {
        limite = document.getElementById("limite");
        max = document.getElementById("max");
        intentos = max.value;
        numero = limite.value;
        
        if(validacion(numero) && validacion(intentos) && numero>0 && intentos>0 && numero!=null && intentos!=null){
            init();intentos
        }else{
            alert('Ingresa un numero positivo');
        }

    }

    function init() {
        cuenta = 0;
        modal.style.display = "none";
        btn = document.getElementById("myBtn");
        span = document.getElementsByClassName("close")[0];

        
        oculto = Math.floor(Math.random() * (numero) + 1);
        valor = document.getElementById("num");
        fondo = document.getElementById("fondo");
        display = document.getElementById("txt");
        imagen = document.getElementById("imagen");
        gameover = document.getElementById("gameover");
        completo = document.getElementById("completo");
        respuestas = document.getElementById("respuestas").innerHTML;
        valor.focus();
        valor.value = ""; // RESET
    }

    function print(str) {
        nodo = document.createTextNode(str);
        display.replaceChild(nodo, display.firstChild);
    }

    function validacion(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function reload() {
        location.reload();
    }

    function procesa(num) {
        if (cuenta <= intentos-1) {
            if (validacion(num) && num>0 && num!=null) {
                if (num < oculto) {
                    print(cuenta + ') Anota núm. MAYOR ');
                    respuestas += "<br>" + num + " - El numero que buscas es mayor";

                } else if (num > oculto) {
                    print(cuenta + ') Anota núm. menor ');
                    respuestas += "<br>" + num + " - El numero que buscas es inferior";
                } else {
                    print('GANASTE!!');
                    fondo.style.backgroundColor = "#000044";
                    imagen.src = "ganaste.gif";
                    completo.play();
                    setTimeout(reload, 10000);
                }
                cuenta++;
                valor.value = ""; // RESET
                valor.focus();
            } else {
                respuestas += "<br><span class='error'>" + num + " - Tiene que ser un valor entre 1 y "+ numero +"</span>";
            }
        } else {
            print(cuenta + ') P E R D I S T E');
            alert('El numero que estabas buscando era: ' + oculto);
            gameover.play();
            setTimeout(reload, 10000);
        }
        // ponemos nuevamente todas las respuestas
        document.getElementById("respuestas").innerHTML = respuestas;
    }