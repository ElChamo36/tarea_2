/* 1.
a. Definir dos constantes (variables) llamadas usuario y password y asignar el valor administrador y 1234 respectivamente
b. Preguntar al usuario que ingresa al sitio a través de dos prompts el usuario y la contraseña del sistema
c. Si el usuario y la contraseña coinciden con las del sistema (variable usuario y password) mostrar en el navegador un mensaje de bienvenida
d. Si no coinciden mostrar usuario o contraseña incorrectos

2. Permitir al usuario ingresar 3 numeros dentro de la plataforma. Mostrar (por consola) una vez terminado el proceso cual es el mayor y cual el menor.


3. Definir una variable del tipo cadena cuyo contenido sea �Hola Mundo�.
Cuando el usuario presiona un botón �Mostrar mensaje�, hacer que se muestre el contenido de la variable por consola.
*/

let usuario = "administrador";
let password = 1234;
let askUsuario = prompt("Escribe tu nombre de usuario");
let askPassword = parseInt(prompt("Escribe tu contraseña"));
if (usuario == askUsuario && password == askPassword){
alert("Bienvenido!!!!")
}else{
    alert("Tu usuario y/o contraseña son incorrectos");
    location.href="./pages/error.html"
}
//--------------------------------------------------------------

function mostrarMsj (divmsj){
    divmsj.addEventListener("click", function(){
        let boton = document.querySelector(".mostrarMensaje");
        tgt = boton;
        console.log ("Hola Mundo")
    })
}




//---------------------------------------------------------------
function mostrarNumGrandeChico(contenedor){
    contenedor.addEventListener("click", function escribirNumUsuario(){
        let num = document.querySelector(".num");
        let num2 = document.querySelector(".numGrande");
        let inicioNum = contenedor.querySelector(".inicioNum");
        tgt = inicioNum;
        let numerosUsuario = [];
        let numerosIngresados1 = parseInt(prompt("Ingresa el primer número"));
        let numerosIngresados2 = parseInt(prompt("Ingresa el segundo número"));
        let numerosIngresados3 = parseInt(prompt("Ingresa el tercer número"));
        
        numerosUsuario.push(numerosIngresados1);
        numerosUsuario.push(numerosIngresados2);
        numerosUsuario.push(numerosIngresados3);
        
        
        numerosUsuario.sort();
        if (numerosUsuario[0] == numerosUsuario[2]){
            num.innerHTML = "Los números son iguales";
            num2.innerHTML = "Los números son iguales";
        }else{
            num.innerHTML = `El número más pequeño es ${numerosUsuario[0]}`
            num2.innerHTML = `El número más grande es ${numerosUsuario[numerosUsuario.length-1]}`
        }
        
    })}

    document.addEventListener("DOMContentLoaded", ()=>{
        let contenedor = document.querySelector('.inicioNum');
        mostrarNumGrandeChico(contenedor);
        let divMsj = document.querySelector(".mostrarMensaje")
        mostrarMsj(divMsj);
    })
    

// función ordenar números obtenidos por inputs-------------------

function ordenNum(){
let tresNumIng = [];
let numInput1 = document.getElementById("primerNum").value;
let numInput2 = document.getElementById("segundoNum").value;
let numInput3 = document.getElementById("tercerNum").value;
tresNumIng.push(numInput1);
tresNumIng.push(numInput2);
tresNumIng.push(numInput3);   
tresNumIng.sort();
    if (tresNumIng[0] == tresNumIng[2]){
        console.log ("Los tres números de los inputs son iguales")
    }else {
        console.log("El número más pequeño que escribiste es: " + tresNumIng[0]);
        console.log("El número más grande que escribiste es: " + tresNumIng[2]);
    }
}
let botonOrdenNum = document.querySelector(".mostrarPorConsola");
botonOrdenNum.addEventListener("click", ordenNum); 