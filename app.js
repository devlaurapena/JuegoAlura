let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo=10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        console.log('Acertaste el número!');
    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
        } else{
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ("p", "Ya se han mostrado todos los numeros");
    }else{

    }
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;  
        }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secretoooo');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;    
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

/*

function holaMundo(){
    console.log("Hola Mundo");
    return;
}
holaMundo ()
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");

function holaNumero (){
    numeroUsuario=prompt("Dime un numero y lo doblare");
    suma= numeroUsuario * 2;
    console.log("El doble de " +numeroUsuario + " es " + suma);
    return;
}

holaNumero()
function mayorQue(){
    numeroUsuario1=parseInt(prompt("Ingresa un numero"));
    numero= numeroUsuario1;
    numeroUsuario2=parseInt(prompt("Ingresa un numero"));
    numero2= numeroUsuario2;

    if(numero > numero2){
        console.log("el mayor es: "+ numero);
    } else if(numero === numero2){
        console.log("Son iguales");
    } else {
        console.log("el mayor es: "+ numero2);
    }
    return;
}
mayorQue()
function multiplicoPorMi (x){
    multiplicacion = x*x;
    console.log("La multiplicacion por si mismo es " + multiplicacion);
    return;
}
multiplicoPorMi(parseInt(prompt("Ingresa un numero")));
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
  mostrarHolaNombre("ice");

  function imcUsario (peso, altura){
    peso=prompt("Ingresa su peso");
    altura=prompt("Ingresa su altura");
    imc= Math.round(peso/Math.pow(altura,2));
    console.log(`Su IMC es: ${imc}`);
  }
  imcUsario();
  function factorial(numero){
    numero=parseInt(prompt("ingrese el numero"))
    suma=1;
    for (let i= 1; i<=numero;i++){
        console.log(i);
        suma=suma*i;
        console.log(suma);        
    }
    //console.log(`El factorial de ${numero} es ${suma}`);
  }
  factorial();
  function cambio(valor){
    valor= prompt("ingrese el valor en dolares");
    tasa= valor*4.78;
    console.log(`El valor en reales es de ${tasa}`);
  }
  cambio();
  function rect(alto, ancho){
    alto= prompt("ingrese la altura del rectangulo");
    ancho= prompt("ingrese el ancho del rectangulo");
    area= alto * ancho;
    peri=(2*alto) + (2*ancho);
    console.log(`El area del rectangulo es de ${area} y su perimetro es de ${peri}`);
  }
  rect();
  function multi(numero){
    numero= prompt("ingrese numero a multiplicar");
    suma=0;
    for (let i= 1; i<=10;i++){
        //console.log(i);
        suma=numero*i;
        console.log(suma);
    }
}
multi();
 let listaGenerica = [];
 let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
 lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
 
 function lenguajePro(){
    console.log(lenguajesDeProgramacion.toString());
 }
 lenguajePro();
 let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
 lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
 function inverso(){
    for(let i = lenguajesDeProgramacion.length-1;i>=0; i--){
        console.log(i);
        console.log(lenguajesDeProgramacion[i]);
    }
 }
 inverso();

 function promedio(){
    let numeros= [1,2,3,4,5];
    let suma=0;
    for(i=0; i<=numeros.length;i++){
        suma+= numeros[i];
        console.log(suma);
        console.log(parseInt(suma/5)); 
    }   
 }
 promedio();
 function bigSmall (){
    let numero= [1,2,30,215,10,8];
    let mayor=0;
    let menor
    for(let i = 0;i<numero.length; i++){
        if(numero[i]>=mayor){
            mayor= numero[i];
            menor=mayor;
            console.log("este es el numero mayor " +mayor);
        } else{
                menor= numero[i];
                console.log("este es el numero menor" + menor);
            }
            
        }   
}
bigSmall();
function sumaL (){
    a=[-1,2,3,0,5,6];
    b=[2,4,6,8,10,12];
    c=[];
    if(a.length=b.length){
        for(i=0; i<a.length;i++){
            c[i]=a[i]+b[i];
            console.log(c)
        }
    }
}
sumaL();
function cuadraL (){
    b=[2,4,6,8,10,12];
    c=[];
    for(i=0; i<b.length;i++){
            c[i]=Math.pow(b[i],2);
            console.log(c)
        }
    }
    cuadraL();*/


