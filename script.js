let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC() {
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value/100;
  let resultado = document.getElementById('resultado');
  
  if(altura !== "" && peso !== "") {
        let imc = (peso / (altura * altura)).toFixed(1);
        let mensagem = "";
  
    if(imc < 18.5){
    mensagem = "abaixo do peso."
      }else if(imc < 25){
        mensagem = "peso ideal."
      }else if (imc < 30){
        mensagem = "sobre peso."
      }else if (imc <35){
        mensagem = "obesidade Grau I"
      }else if (imc < 40){
        mensagem = "obesidade Grau II"
      }else{
        mensagem = "obesidade Grau III"
      }
    resultado.textContent = "O seu IMC é: " +imc + ".  "+ "Você está com " +mensagem;
  
    }else{
    resultado.textContent ="Por favor, preencha todos os campos."
  }
    
}
   
botaoCalcular.addEventListener('click', calculandoIMC);