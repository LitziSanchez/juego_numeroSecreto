function juego(){

let numeroUsuario = 0 ;
let intentos = 1;
let maximosIntentos = 3;

let limite = parseInt(prompt("Indica el final del rango"));
let numeroSecreto = Math.floor(Math.random()*limite)+1;
console.log(limite);
console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt(`Ingresa un numero entre 1 y ${limite} :`));
    console.log('NUMERO INGRESADO ES:'+ numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //acertamos, la condicion se cumplio
        alert(`Acertaste el numero: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); //usando operador ternario
        document.getElementById("resultado").innerHTML="Felicidades!"
        document.getElementById("mensaje").innerHTML="Descubriste el número secreto"
        break;
    } else {
        if (numeroUsuario > numeroSecreto){
            alert("el numero secreto es menor")
        } else {
            alert("el numero secreto es mayor")
        }
        //incorrecto
        intentos++;
        //palabraIntento = "intentos";
        if (intentos > maximosIntentos){
            alert(`MAXIMO DE ${maximosIntentos} INTENTOS`);
            document.getElementById("resultado").innerHTML="Lo siento, perdiste"
            document.getElementById("mensaje").innerHTML="Suerte a la proxima"
            document.getElementById("btn").innerHTML="Volver a jugar"

            break;
        }
}
}

}