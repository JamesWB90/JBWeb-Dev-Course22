function calculateBmi() {
    let h = document.getElementById('h').value;
    let w = document.getElementById('w').value;
    let bmi = w / (h / 100 * h / 100);
    const bmio = (bmi.toFixed(0));

    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
}
if (bmi < 18.5) {
    document.getElementById('message').innerHTML = 'You are underweight ' + bmi;
} else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('message').innerHTML = 'You are healthy ' + bmi;
} else {
    document.getElementById('message').innerHTML = 'You are overweight ' + bmi;
}








