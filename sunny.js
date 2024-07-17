// BMI Calculator
function calculateBMI() {
    const height = parseFloat(document.getElementById('bmi-height').value) / 100;
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-result').textContent = `BMI: ${bmi.toFixed(2)} (${category})`;
}

// BMR Calculator
function calculateBMR() {
    const gender = document.getElementById('bmr-gender').value;
    const age = parseInt(document.getElementById('bmr-age').value);
    const height = parseFloat(document.getElementById('bmr-height').value);
    const weight = parseFloat(document.getElementById('bmr-weight').value);
    let bmr;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    document.getElementById('bmr-result').textContent = `BMR: ${bmr.toFixed(2)} calories/day`;
}

// Calorie Calculator
function calculateCalories() {
    const gender = document.getElementById('cal-gender').value;
    const age = parseInt(document.getElementById('cal-age').value);
    const height = parseFloat(document.getElementById('cal-height').value);
    const weight = parseFloat(document.getElementById('cal-weight').value);
    const activity = document.getElementById('cal-activity').value;
    let bmr, calories;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    switch (activity) {
        case 'sedentary':
            calories = bmr * 1.2;
            break;
        case 'light':
            calories = bmr * 1.375;
            break;
        case 'moderate':
            calories = bmr * 1.55;
            break;
        case 'active':
            calories = bmr * 1.725;
            break;
        case 'very-active':
            calories = bmr * 1.9;
            break;
    }

    document.getElementById('cal-result').textContent = `Daily Calorie Needs: ${calories.toFixed(2)} calories`;
}

// Body Fat Calculator
function calculateBodyFat() {
    const gender = document.getElementById('bf-gender').value;
    const height = parseInt(document.getElementById('bf-height').value);
    const waist = parseFloat(document.getElementById('bf-waist').value/2.54);
    const neck = parseFloat(document.getElementById('bf-neck').value);
    const hip = gender === 'female' ? parseFloat(document.getElementById('bf-hip').value) : 0;
    let bodyFat;

    if (gender === 'male') {
        bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
        bodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
    }

    document.getElementById('bf-result').textContent = `Body Fat Percentage: ${bodyFat.toFixed(2)}%`;
}

// Ideal Weight Calculator
function calculateIdealWeight() {
    const gender = document.getElementById('iw-gender').value;
    const height = parseFloat(document.getElementById('iw-height').value);
    const age = parseInt(document.getElementById('iw-age').value);
    const frame = document.getElementById('iw-frame').value;
    let idealWeightMin, idealWeightMax;

    if (gender === 'male') {
        idealWeightMin = 50 + 0.91 * (height - 152.4);
        idealWeightMax = idealWeightMin + 10;
    } else {
        idealWeightMin = 45.5 + 0.91 * (height - 152.4);
        idealWeightMax = idealWeightMin + 10;
    }

    if (frame === 'small') {
        idealWeightMin -= 10;
        idealWeightMax -= 10;
    } else if (frame === 'large') {
        idealWeightMin += 10;
        idealWeightMax += 10;
    }

    document.getElementById('iw-result').textContent = `Ideal Weight Range: ${idealWeightMin.toFixed(2)} - ${idealWeightMax.toFixed(2)} kg`;
}