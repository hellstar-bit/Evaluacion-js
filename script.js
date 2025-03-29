
function Ejercicio16() {
    for (let i =100; i>0; i--){
        document.write(`${i} <br>`)
}

    
}

function Ejercicio17(){
    function squart(a,b) {
        return a**2
        
    }
    alert(squart(a=prompt("Digite su numero: "),5))   
    }


function Ejercicio18(nombre) {
    nombre=prompt("Digite su nombre: ")
    return alert("hola " + nombre);
}

function Ejercicio19() {
    let n = Math.floor(Math.random() * 100) + 1;
    let i = 5;
    
    while(i > 0) {
        let r = prompt(`Adivina (${i} intentos restantes):`);
        // Convertir la respuesta a número para comparar correctamente
        if(Number(r) === n) {
            alert("¡Ganaste!");
            return;
        }
        i--;
    }
    
    alert(`¡Perdiste! El número era ${n}.`);
}
