// Declaración de las principales variables

const numeros = document.querySelectorAll('.numero');
const info = document.querySelector('#dato');
const borrarButton = document.querySelector('#borrar');
const enviarButton = document.querySelector('.enviar');
const datoIngresar = document.querySelector('#ingresar');
const solveButton = document.querySelector('#resolver');
const resul = document.querySelector('#resul');
const modal = document.getElementById('ejemplo1');
const partes = document.querySelectorAll('.partes');

//Variables de función
let dato = "";
let contador = 1;
let figura = "triangulo";

// Datos ingresado
// Triangulo
const alturaTrian = document.querySelector('#altura_trian');
const baseTrian = document.querySelector('#base_trian');
const ladoTrian = document.querySelector('#lado_trian')

//Circulo
const radioCir = document.querySelector("#radio_cir");

//Cuadrado
const ladoCuad = document.querySelector('#lado_cuad');

//Regtangulo
const alturaReg = document.querySelector('#alto_reg');
const anchoReg = document.querySelector('#ancho_reg');


// Audios
const risas = new Audio('./audios/kids-saying-yay-sound-effect_3.mp3');

//opciones
const figuras = document.querySelectorAll('.div_figuras');
const trianMenu = document.querySelector('#triangulo');


//Elementos menu
const menuOption = document.querySelectorAll('.menu_element');

//contenedores 
const cuadraContenedor = document.querySelector('.contenedor_cuadrado');
const triangContenedor = document.querySelector('.contenedor_trinagulo');
const circuContendor = document.querySelector('.contenedor_circulo');
const regContenedor = document.querySelector('.contenedor_regtangulo');



//Se encarga de la funcionalidad del teclado
numeros.forEach(numero => {
    numero.addEventListener('click',()=>{
        
        if (info.innerHTML.length >= 6){
            alert("El numero es demasiado grande :(")
        }else{
            info.innerHTML += numero.innerHTML;
        }

    });
});

//Se encarga de borrar los dígitos
borrarButton.addEventListener('click',()=>{
   let data = info.innerHTML;
   
   if (data.length <= 0){

       alert("El numero es muy corto :(")
   
    } else{

       data = data.slice(0,-1);
       info.innerHTML = data;
   
    }
    
});

//Este se encarga de asignar los valores a sus respectivas partes
enviarButton.addEventListener('click',()=>{
    //Validaciones
    if (info.innerHTML.length <= 0){
        alert("El campo esta vació :(");
    }else if (figura == "triangulo"){

        if (contador > 3 && !validar()){
            
            alert("Aun hay campos vacíos :(, haga click en los campos vacíos para llenarlos")
        
        }else if (contador > 3){
            
            alert("Todos los campos a sido llenado :(");
        
        }else{
            //Funcionalidad
            if (contador == 1){
                
                let alturaArray = alturaTrian.innerHTML.split(':');
                alturaTrian.innerHTML = `${alturaArray[0]}:${info.innerHTML}`;
                
                datoIngresar.innerHTML = "Base:";
                contador += 1;
                info.innerHTML = "";
            
            }else if(contador == 2){
                
                let baseArray = baseTrian.innerHTML.split(':');
                baseTrian.innerHTML = `${baseArray[0]}:${info.innerHTML}`;

                datoIngresar.innerHTML = "Lado:";
                contador += 1;
                info.innerHTML = "";
            
            }else if (contador == 3){
                
                let ladoArray = ladoTrian.innerHTML.split(':');
                ladoTrian.innerHTML = `${ladoArray[0]}:${info.innerHTML}`;

                contador += 1;
                info.innerHTML = "";
            
            }
        }
    }else if(figura == "circulo"){
        if (contador > 1){
            alert("Todos los campos han sido llenado :(");
        }else{
            if (contador == 1){
                let radioArray = radioCir.innerHTML.split(":");
                radioCir.innerHTML = `${radioArray[0]}:${info.innerHTML}`;

                contador += 1;
                info.innerHTML = "";
            }
        }
    }else if(figura == "cuadrado"){
        
        if (contador > 1){
        
            alert("Todos los campos han sido llenado :(");
        
        }else{
        
            if (contador == 1){
                let ladoArray = ladoCuad.innerHTML.split(":");
                ladoCuad.innerHTML = `${ladoArray[0]}:${info.innerHTML}`;

                contador += 1;
                info.innerHTML = "";
            }
        
        }
    }else if(figura == "regtangulo"){

        if (contador > 2 && !validar()){
            
            alert("Aun hay campos vacíos, haga click en los campos vacíos para llenarlos")
        
        }else if(contador > 2){
            alert("Todos los campos han sido llenados :(")
        }else{
            if(contador == 1){
                let anchoArray = anchoReg.innerHTML.split(':');
                anchoReg.innerHTML = `${anchoArray[0]}:${info.innerHTML}`;

                contador += 1;
                info.innerHTML = "";
                datoIngresar.innerHTML = "Alto:";
            }else if(contador == 2){
                let altoArray = alturaReg.innerHTML.split(':');
                alturaReg.innerHTML = `${altoArray[0]}:${info.innerHTML}`;

                contador += 1;
                info.innerHTML = ""
            }
        }

    }
});

partes.forEach(element =>{
    element.addEventListener('click',(e)=>{
        let textArray = e.target.innerHTML.split(':');
        info.innerHTML = textArray[1]
        datoIngresar.innerHTML = `${textArray[0]}:`;
        if(e.target.id == "base_trian" || e.target.id == "alto_reg"){
            contador = 2;
        }else if(e.target.id == "lado_trian"){
            contador = 3;
        }else{
            contador = 1;
        }
    });
});


//Se encarga de validad que los campos estén llenos
function validar(){

    if (figura == "triangulo"){
        const altura = alturaTrian.innerHTML.split(":")[1];
        const base = baseTrian.innerHTML.split(':')[1];
        const lado = ladoTrian.innerHTML.split(':')[1];
        if (altura == "" || base == "" || lado == "") return false;
    }else if(figura == "circulo"){
        const radio = radioCir.innerHTML.split(':')[1];
        if (radio == "") return false;

    }else if (figura == "cuadrado"){
        const lado = ladoCuad.innerHTML.split(':')[1];
        if (lado == "") return false;
    }else if(figura == "regtangulo"){
        const altura = alturaReg.innerHTML.split(':')[1];
        const ancho = anchoReg.innerHTML.split(':')[1];
        if(altura == "" || ancho == "") return false;
    }
    return true;
    
}


//Saca el perimetro del triangulo
function perimetroTrian(){
    const altura = parseFloat(alturaTrian.innerHTML.split(":")[1]);
    const base = parseFloat(baseTrian.innerHTML.split(':')[1]);
    const lado = parseFloat(ladoTrian.innerHTML.split(':')[1]);
    return altura + base + lado;
}

function perimetroCir(){
    let radio = parseFloat(radioCir.innerHTML.split(':')[1]);
    return 2 * Math.PI * radio;
}

function perimetroCuad(){
    let lado = parseFloat(ladoCuad.innerHTML.split(':')[1]);
    return lado + lado + lado + lado;
}

function perimetroReg(){
    let altura = parseFloat(alturaReg.innerHTML.split(':')[1]);
    let ancho = parseFloat(anchoReg.innerHTML.split(':')[1]);
    return altura + ancho + altura + ancho;
}


//Saca el area
function areaTrian(){
    const altura = parseFloat(alturaTrian.innerHTML.split(":")[1]);
    const base = parseFloat(baseTrian.innerHTML.split(':')[1]);
    return base * altura / 2;
}

function areaCir(){
    let radio = parseFloat(radioCir.innerHTML.split(':')[1]);
    return Math.PI * radio ** 2;
}

function areaCuad(){
    let lado = parseFloat(ladoCuad.innerHTML.split(':')[1]);
    return lado * lado;
}

function areaReg(){
    let altura = parseFloat(alturaReg.innerHTML.split(':')[1]);
    let ancho = parseFloat(anchoReg.innerHTML.split(':')[1]);
    return altura * ancho;
}   

//Detiene el confeti
const stop = () => {
    setTimeout(function() {
        // Se utiliza la función stop del modulo confetti para detener el confeti
        confetti.stop();
    }, 2000);
}

// Resuelve las operaciones solicitadas y las envía el modal
solveButton.addEventListener('click',()=>{
    
    if (validar()){
        let peri;
        let are;    
        if (figura == "triangulo"){
            peri = perimetroTrian();
            are = areaTrian();
        }else if(figura == "circulo"){
            peri = perimetroCir().toFixed(2);
            are = areaCir().toFixed(2);
        }else if(figura == "cuadrado"){
            are = areaCuad();
            peri = perimetroCuad();
        }else if(figura == "regtangulo"){
            are = areaReg();
            peri = perimetroReg();
        }

        resul.innerHTML = `El perímetro del ${figura} es de: ${peri} y el area es: ${are}`;
        risas.play();
        confetti.start()
        stop();
        modal.style.display='block';

    }else{
        
        alert("Algunos campos están vacíos");
    
    }
});


menuOption.forEach(element =>{
    element.addEventListener('click',(e)=>{
        contador = 1;
        figura =  e.target.id;
        info.innerHTML = "";
        figuras.forEach(figura =>{
            figura.classList.remove('visible');
        });
        new Audio(`./audios/${e.target.id}.mp3`).play();
        //hacer funcion para limpiar los campos
        partes.forEach(elemento =>{
            elemento.innerHTML = `${elemento.innerHTML.split(':')[0]}:`;
        });
        
        if(e.target.id == "triangulo"){
            triangContenedor.classList.add('visible');
            datoIngresar.innerHTML = "Altura:";
        }else if (e.target.id == "circulo"){
            circuContendor.classList.add('visible');
            datoIngresar.innerHTML = "Radio:";
        }else if(e.target.id == "cuadrado"){
            datoIngresar.innerHTML = "Lado:";
            cuadraContenedor.classList.add('visible');
        }else if(e.target.id == "regtangulo"){
            regContenedor.classList.add('visible');
            datoIngresar.innerHTML = "Ancho:";
        }
    });
});

