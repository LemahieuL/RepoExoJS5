
var submit = document.getElementById("submit")
var number1 = document.getElementById("firstNumber")
var number2 = document.getElementById("secondNumber")
var reg = /^[0-9,][0-9]+$/g;
submit.addEventListener('click', validation)
function validation(){
  if(number1.value !== "" && number2.value !== ""){
    if(reg.test(number1.value) == false && reg.test(number2.value) == false){
      alert(Math.trunc(number1.value.replace(',','.')) * number2.value.replace(',','.'))
    } else {
      alert("il faut un chiffres à virgule")
    }
} else {
 alert("il manque un chiffre à virgule")
}
}
