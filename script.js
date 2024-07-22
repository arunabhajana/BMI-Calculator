const bmiCutoffs = {
    male: {
        2: 16.5,
        3: 15.8,
        4: 15.6,
        5: 15.5,
        6: 15.4,
        7: 15.3,
        8: 15.2,
        9: 15.2,
        10: 15.3,
        11: 15.4,
        12: 15.6,
        13: 15.8,
        14: 16.0,
        15: 16.2,
        16: 16.4,
        17: 16.6,
        18: 16.8
    },
    female: {
        2: 16.5,
        3: 15.7,
        4: 15.4,
        5: 15.3,
        6: 15.2,
        7: 15.1,
        8: 15.1,
        9: 15.1,
        10: 15.2,
        11: 15.4,
        12: 15.6,
        13: 15.9,
        14: 16.2,
        15: 16.4,
        16: 16.5,
        17: 16.7,
        18: 16.8
    }
};

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const result = document.getElementById('result');

    if (weight && height && age && gender) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        const bmiCutoff = bmiCutoffs[gender][age] || 18.5;  // Default to 18.5 if age is not in the dataset

        let status = '';

        if (bmi < 18.5) {
            status = 'underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = 'normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = 'overweight';
        } else {
            status = 'obese';
        }

        let malnourished = '';
        if (bmi < bmiCutoff) {
            malnourished = ' and you are malnourished';
        }

        result.textContent = `Your BMI is ${bmi}, you are ${status}${malnourished}`;
    } else {
        result.textContent = 'Please enter weight, height, age, and gender';
    }
}
