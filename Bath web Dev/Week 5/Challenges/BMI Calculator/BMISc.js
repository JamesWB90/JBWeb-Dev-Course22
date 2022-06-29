function calculateBmi() {
    var h = document.getElementById('h').value;

    var w = document.getElementById('w').value;

    var bmi=w/(h/100*h/100);
                    
     var bmio = (bmi.toFixed(0));

    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
}
if (bmi < 18.5) {
   
    document.getElementById('message').innerHTML = 'You are underweight ' + bmi;

} else if (bmi >= 18.5 && bmi <= 24.9) {
    
    document.getElementById('message').innerHTML = 'You are healthy ' + bmi;
} else {
    
    document.getElementById('message').innerHTML = 'You are overweight ' + bmi;
}








