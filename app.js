let numSecreto = 0;
let intento = 0;
let ArreglosNumero = [];
let numeroMaximo = 10;

//console.log(numSecreto);
//---------------------------------------------------------------------------------
function NombraObjeto(elemento, texto) {
   let texto1 = document.querySelector(elemento);
   texto1.innerHTML = texto;
   return;

}
//-----------------------------------------------------------------------------------
function VerificarIntento() {
   let numSeleccionado = parseInt(document.getElementById('ValorUsuario').value);
   //console.log(numSecreto);

   if( numSecreto === numSeleccionado){
      NombraObjeto('P',`Acertaste el numero en ${intento} ${intento == 1 ? "vez" : "veces"}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if(numSecreto > numSeleccionado){
         NombraObjeto('P','El numero es mayor');
      } else {
         NombraObjeto('P','El numero es menor');
      }
      intento++;
      VaciarCaja();
   }
   return;

}
//-----------------------------------------------------------------------------------
function VaciarCaja (){
   document.querySelector('#ValorUsuario').value = '' ;
}

//-----------------------------------------------------------------------------------
function GenerarNumeroSecreto() {
   let NumeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   //console.log(NumeroGenerado);
   //console.log(ArreglosNumero);
   
   if(ArreglosNumero.length == numeroMaximo){
      NombraObjeto('p','Ya se sortearon todos los numeros posibles');
   } else {

   if(ArreglosNumero.includes(NumeroGenerado)){
      return GenerarNumeroSecreto();
   } else {
      ArreglosNumero.push(NumeroGenerado);
      return NumeroGenerado;
   }
}
}

//-----------------------------------------------------------------------------------
function CondicionesIndiciales(){
   NombraObjeto('h1','Juego del numero secreto ');
   NombraObjeto('P',`Indica un numero del 1 al ${numeroMaximo} `);
   numSecreto = GenerarNumeroSecreto();
   intento = 1;
}

//-----------------------------------------------------------------------------------
function ReiniciarJuego(){
   VaciarCaja();
   CondicionesIndiciales();
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}

CondicionesIndiciales();
