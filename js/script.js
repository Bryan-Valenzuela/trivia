//almacena el elemento html y su contenido por el nombre de su id
const trivia = document.getElementById("trivia");
const respuesta = document.querySelectorAll(".respuesta"); //selecciona todos los elementos que coincidan con la clase asignada
const pregunta = document.getElementById("pregunta");
const respuesta_a = document.getElementById("respuesta_a");
const respuesta_b = document.getElementById("respuesta_b");
const respuesta_c = document.getElementById("respuesta_c");
const respuesta_d = document.getElementById("respuesta_d");
const BtnEnviar = document.getElementById("enviar");

let contador = 0;
let puntuacion = 0;

//info de las preguntas y respuestas guardadas localmente en un array
const preguntas = [
    {
        Pregunta: "1. ¿De qué color son las “cajas negras” de los aviones?",
        a: "Negra",
        b: "Roja",
        c: "Naranja",
        d: "Amarilla",
        correcta: "c",
        retro: "Pese a que se las llama cajas negras, suelen ser de color naranja, para poder ser vistas y encontradas más fácilmente en caso de accidente",
    },
    {
        Pregunta: "2. Si en una pecera hay 12 peces y 5 de ellos se ahogan, ¿cuántos peces quedan?",
        a: "5",
        b: "12",
        c: "7",
        d: "Ninguno",
        correcta: "b",
        retro: "Los peces no se ahogan en el agua",
    },
    {
        Pregunta: "3. ¿Qué pasó ayer en París de 6 a 7?",
        a: "Evento de fuegos artificiales",
        b: "No lose rick parece falso",
        c: "Una hora",
        d: "No estuve en paris",
        correcta: "c",
        retro: "¿Cómo podemos saber qué ocurrió si no hemos estado? No es necesario, porque el único dato que necesitamos nos lo da el mismo enunciado: lo que pasó de 6 a 7 fue una hora",
    },
    {
        Pregunta: "4. Si un bebé nace en Colombia, pero a los dos años se va a Ecuador, ¿dónde le crecen los dientes?",
        a: "Colombia",
        b: "En la boca",
        c: "Ecuador",
        d: "Aun no le crecerán los dientes",
        correcta: "b",
        retro: "no es necesario conocer cuándo les crecen los dientes a los niños ni hacer ningún tipo de cálculo. Los dientes le crecen en la boca",
    },
    {
        Pregunta: "5. Estás corriendo en una carrera y adelantas a la persona que está en segundo lugar, ¿en qué posición pasas a estar?",
        a: "Primero",
        b: "Segundo",
        c: "Tercero",
        d: "No lose",
        correcta: "b",
        retro: "Esta pregunta con trampa te puede hacer pensar que pasarías a estar en el primer puesto, pero si adelantas al que va segundo, te quedas en su posición: segundo lugar",
    },
    {
        Pregunta: "6. La palabra París comienza con “P” y termina con “T”, ¿cierto o falso?",
        a: "Cierto",
        b: "Falso",
        c: "No lose rick pare falso",
        d: "Termina en “S”",
        correcta: "a",
        retro: "Es cierto. Lo cierto es que la palabra “París” empieza por la letra “P” y la palabra “termina” empieza por “T” también. Una pregunta capciosa con mucha trampa por la forma en la que está formulada",
    },
    {
        Pregunta: "7. ¿Si un tren eléctrico se mueve hacia el norte a 100 km/h y sopla el viento hacia el oeste a 10 km/h, hacia dónde irá el humo?",
        a: "Noroeste",
        b: "Se queda donde mismo",
        c: "Norte",
        d: "No echa humo",
        correcta: "d",
        retro: "Es un tren eléctrico, con lo cual no echa humo",
    },
    {
        Pregunta: "8. ¿Cuál es la pregunta que nadie puede contestar de manera afirmativa?",
        a: "¿Te caíste?",
        b: "¿Estás dormido?",
        c: "una pregunta en doble sentido",
        d: "¿quién te gusta?",
        correcta: "b",
        retro: "La respuesta es “¿Estás dormido?”, puesto que si realmente estás dormido, no puedes responder a la pregunta",
    },
    {
        Pregunta: "9. ¿En qué mes celebran los rusos la Revolución de Octubre?",
        a: "Noviembre",
        b: "Octubre",
        c: "Diciembre",
        d: "Septiembre",
        correcta: "a",
        retro: "lo cierto es que se celebra en el mes de noviembre. Cuando se produjo la revolución, los rusos utilizaban el calendario juliano, en el cual esa fecha se situaba en octubre",
    },
    {
        Pregunta: "10. Un padre y un hijo van por la carretera, hasta que su auto se estrella en un accidente. El padre muere y el hijo es llevado al hospital para ser operado. Es una operación complicada, por lo que llaman a una eminencia médica de la cirugía para operarlo. Cuando entra en el quirófano dice: No puedo operarlo, es mi hijo. ¿Por qué ocurre esto?",
        a: "Es el abuelo",
        b: "Es el adoptado",
        c: "Es la madre",
        d: "Es el padre",
        correcta: "c",
        retro: "Esta pregunta fue utilizada recientemente para concienciar sobre el machismo imperante en nuestra sociedad. Una de las respuestas a esta pregunta capciosa es que la eminencia médica es la madre del niño, pero muchas personas relacionan “eminencia médica” con un hombre, por lo que no se plantean que esa persona pueda ser la madre",
    },
    {
        Pregunta: "11. A es el padre de B. Pero B no es el hijo de A. ¿Cómo es posible?",
        a: "Es adoptado",
        b: "Es la hija",
        c: "Es el abuelo",
        d: "No lose",
        correcta: "b",
        retro: "Esta es otra pregunta con trampa similar a la anterior. B no puede ser el hijo de A porque en realidad es una niña y es su hija",
    },
    {
        Pregunta: "12. ¿Qué va hacia arriba y hacia abajo, pero sigue estando en el mismo lugar?",
        a: "Las escalera",
        b: "La luna",
        c: "La gravedad",
        d: "Una Pelota",
        correcta: "a",
        retro: "Esta es una pregunta difícil de responder y que da que pensar, pero la respuesta es más fácil de lo que parece: son las escaleras",
    },
    {
        Pregunta: "13. ¿Qué palabra usarías para describir a un hombre que no tiene todos los dedos en una mano?",
        a: "Hombre normal",
        b: "Ectrodactilia",
        c: "Hombre sin dedos en una mano",
        d: "shrek",
        correcta: "a",
        retro: "Esta otra pregunta también te hace pensar, pero tiene trampa por cómo está formulada. La respuesta es que se trata de un hombre normal, puesto que ninguno tiene todos los dedos en una sola mano",
    },
    {
        Pregunta: "14. ¿De qué están hechos los pinceles de pelo de camello?",
        a: "Ardilla, marta, cabra o pelo sintético",
        b: "Pelo de camello",
        c: "Plastico",
        d: "Camello sintético",
        correcta: "a",
        retro: "los pinceles de pelo de camello no están hechos realmente de ese material. Suelen estar fabricados con pelo de ardilla, de marta, de cabra o pueden ser simplemente de pelo sintético",
    },
    {
        Pregunta: "15. ¿Cuántos son los meses del año que tienen 28 días?",
        a: "1",
        b: "4",
        c: "8",
        d: "12",
        correcta: "d",
        retro: "Podría parecer que la respuesta es febrero, que solo tiene 28 días. Pero lo cierto es que en realidad todos los meses llegan a tener los 28 días",
    },
    {
        Pregunta: "16. ¿En qué país se fabrican los sombreros Panamá?",
        a: "Ecuador",
        b: "China",
        c: "Chile",
        d: "Panamá",
        correcta: "a",
        retro: "Esta es otra pregunta capciosa porque nos hace pensar que la respuesta está en el enunciado, pero lo cierto es que este tipo de sombreros se fabrican en Ecuador",
    },
    {
        Pregunta: "17. ¿Qué animal da nombre a las Islas Canarias?",
        a: "Perro",
        b: "Canario",
        c: "Cocodrilo",
        d: "Colibri",
        correcta: "a",
        retro: "Otra pregunta con trampa, puesto que estas islas españolas se dice que reciben el nombre por el término “canis”, que en latín significa perro",
    },
    {
        Pregunta: "18. Un conductor de camión está bajando por una calle en sentido contrario, y por el camino se cruza por lo menos con diez policías. ¿Por qué no lo detienen?",
        a: "Va muy rapido",
        b: "Corren del camionero",
        c: "No lo pueden parar",
        d: "Va a pie",
        correcta: "d",
        retro: "Esta es una pregunta engañosa, puesto que muchos pensarían que un camión circula por una calle en sentido contrario. Pero nadie piensa que el conductor del camión va a pie",
    },
    {
        Pregunta: "19. ¿Por qué un hombre de cuarenta y dos años de edad tan solo ha podido celebrar diez cumpleaños?",
        a: "No le gusta celebrar su cumpleaños",
        b: "Nacio en año bisiesto",
        c: "No tiene Tiempo",
        d: "No lose rick parece falso",
        correcta: "b",
        retro: "La respuesta es que este hombre nació un 29 de febrero de un año bisiesto",
    },
    {
        Pregunta: "20. Antes de que el Monte Everest fuera descubierto, ¿cuál era la montaña más alta del mundo?",
        a: "Monte Everest",
        b: "Annapurna",
        c: "Nanga Parbat",
        d: "Manaslu",
        correcta: "a",
        retro: "La montaña más alta del mundo seguía siendo el Everest, solo que todavía no lo habían descubierto",
    },
    {
        Pregunta: "21. ¿Qué se necesita para encender una vela?",
        a: "Fuego",
        b: "Encendedor",
        c: "Cerillos ",
        d: "Que este apagada",
        correcta: "d",
        retro: "Una vela se puede encender de muchas formas, pero lo que seguro se necesita es que en primer lugar esté apagada",
    },
    {
        Pregunta: "22. Si un avión se estrella en la frontera entre los Estados Unidos y Canadá, ¿dónde entierran a los supervivientes?",
        a: "Estados Unidos",
        b: "No los entierran",
        c: "Canada",
        d: "Los regresan a sus países",
        correcta: "b",
        retro: "Por mucho que pienses cuál puede ser la respuesta, puede que no caigas en que los supervivientes no pueden ser enterrados, puesto que están vivos.",
    },
    {
        Pregunta: "23. ¿En qué te sientas, duermes y te cepillas los dientes?",
        a: "El Baño",
        b: "La recamara",
        c: "Silla, cama y cepillo de dientes",
        d: "En la Casa",
        correcta: "c",
        retro: "Con esta pregunta capciosa puedes pasar un rato pensando que se trata de un solo objeto, pero lo cierto es que su respuesta es: una silla, una cama y un cepillo de dientes",
    },
    {
        Pregunta: "24. Tiene orejas de gato y no es gato, tiene cola de gato y no es gato, tiene ojos de gato y no es gato, ¿entonces qué es?",
        a: "Gato",
        b: "Figura de gato",
        c: "Gata",
        d: "No lose",
        correcta: "c",
        retro: "Se trata nada más y nada menos que de una gata, con aspecto de gato pero que no es un gato",
    },
    {
        Pregunta: "25. ¿Cuál es el día más largo de la semana?",
        a: "Miercoles",
        b: "Lunes",
        c: "Sabado",
        d: "Jueves",
        correcta: "a",
        retro: "En teoría todos los días de la semana tienen la misma duración, pero existe una sola respuesta. Si los ponemos por escrito, el más largo es miércoles, puesto que tiene 9 letras.",
    },
   
];

//funciones

cargarPreguntas();

function cargarPreguntas() {
    deseleccionar();

    const info = preguntas[contador];

    pregunta.innerText = info.Pregunta;
    respuesta_a.innerText = info.a;
    respuesta_b.innerText = info.b;
    respuesta_c.innerText = info.c;
    respuesta_d.innerText = info.d;
}

function deseleccionar() {
    respuesta.forEach((R) => {
        R.checked = false;
    });
}


function seleccionado() {
    let resp = undefined; //se declara la variable de forma que solo se pueda usar en este metodo 

    respuesta.forEach((R) => {
        if (R.checked) {
            resp = R.id;
        }
    });

    return resp;
}


// esta funcion se activa cuando se acciona el boton
BtnEnviar.addEventListener("click", () => {
    // verificamos la respuesta que fue seleccionada
    const resp = seleccionado();  //guardamos la respuesta seleccionada para compararla

    if (resp) {
        if (resp === preguntas[contador].correcta) {
            puntuacion++;
           
            let retroinfo = preguntas[contador];

            RetroInf = retroinfo.retro;
           
            Swal.fire({
                title:'Felicidades!!',
                text: RetroInf,
                icon:'success',
                confirmButtonText: 'Continuar',
                allowOutsideClick: false ,
            })

        } else {
            let retroinfo = preguntas[contador];

            RetroInf = retroinfo.retro;

            Swal.fire({
                icon: 'error',
                title: 'Incorrecto...',
                text: RetroInf,
                confirmButtonText: 'Continuar',
                allowOutsideClick: false ,
              })
        }

        contador++;
        
        if (contador < preguntas.length) {
            cargarPreguntas();
        } else {

            let p1='¡¡¡Felicidades!!! has respondido ';
            let p2=' preguntas correctamente';
            let puntuacionfinal=p1+puntuacion+'/'+preguntas.length+p2;
            Swal.fire({
                title: '¡¡¡Felicidades!!!',
                text: puntuacionfinal,
                icon:'success',
                confirmButtonText: 'Continuar',
                allowOutsideClick: false ,
            })
            
            trivia.innerHTML = `  <div class="pantalla-reinicio" >
                                    <div class="reinicio">
                                        <h2>Ha terminado la trivia, ¿desea hacerla de nuevo?</h2>
                                    </div>
                                    <div class="boton-reinicio">
                                        <button onclick="location.reload()">Reiniciar</button>
                                    </div>
                                </div>`;

        }
    }
});