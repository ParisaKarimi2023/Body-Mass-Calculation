var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
var submit = document.getElementById("submit");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
//================================================
function validateForm(){
    if(age.value ==='' || height.value ==='' || weight.value ==='' || (male.checked === false && female.checked === false)){
        alert("Please enter all of the fields");
    }
    else{
        countBmi();
    }
}

//================================================
function countBmi(){
    var p = [age.value, height.value, weight.value];
    if(male.checked){
        p.push("male");
    }
    else if(female.checked){
        p.push("female");
    }
    form.reset();
    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
    var result = '';
    if(bmi < 18.5){
        result = 'underweight';
    }
    else if(18.5 <= bmi && bmi <= 24.9){
        result = 'Normal';
    }
    else if(25 <= bmi && bmi <= 29.9){
        result = 'Overweight';
    }
    else if(30 <= bmi && bmi <= 34.9){
        result = 'Fat';
    }
    else if(35 <= bmi){
        result = 'Very Fat';
    }

    h1.innerHTML = result;
    h2.innerHTML = "Body Mass Calculation : " + parseFloat(bmi).toFixed(2);
}
submit.addEventListener("click", validateForm);