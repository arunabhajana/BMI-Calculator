function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = document.getElementById('result');

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        result.textContent = `Your BMI is ${bmi}`;
    } else {
        result.textContent = 'Please enter both weight and height';
    }
}
