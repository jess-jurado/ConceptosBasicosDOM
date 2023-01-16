const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const numero1 = document.querySelector('#calculo1');
const numero2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');



form.addEventListener('submit', sumasion);

function sumasion(event){
    event.preventDefault();
    const sumaTotal = numero1.value + numero2.value;
    pResult.innerHTML = "Resultado : " + sumaTotal;
}










/*
btn.addEventListener('click', calculo);


function calculo(){
    const sumaInputs = numero1.value + numero2.value;
    pResult.append("La suma es " + sumaInputs);
    }



console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});



//const img = document.createElement('img');
//img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML("");
pid.appendChild(img);
*/
