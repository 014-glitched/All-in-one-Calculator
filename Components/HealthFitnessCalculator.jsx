import React, { useState } from 'react';



const HealthAndFitnessCalculator = () => {
    const [bmiResult, setBmiResult] = useState('');
    const [bmrResult, setBmrResult] = useState('');
    const [calResult, setCalResult] = useState('');
    const [bfResult, setBfResult] = useState('');
    const [iwResult, setIwResult] = useState('');

    const calculateBMI = () => {
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

        setBmiResult(`BMI: ${bmi.toFixed(2)} (${category})`);
    };

    const calculateBMR = () => {
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

        setBmrResult(`BMR: ${bmr.toFixed(2)} calories/day`);
    };

    const calculateCalories = () => {
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
            default:
                calories = bmr;
                break;
        }

        setCalResult(`Daily Calorie Needs: ${calories.toFixed(2)} calories`);
    };

    const calculateBodyFat = () => {
        const gender = document.getElementById('bf-gender').value;
        const height = parseInt(document.getElementById('bf-height').value);
        const waist = parseFloat(document.getElementById('bf-waist').value / 2.54);
        const neck = parseFloat(document.getElementById('bf-neck').value);
        const hip = gender === 'female' ? parseFloat(document.getElementById('bf-hip').value) : 0;
        let bodyFat;

        if (gender === 'male') {
            bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
        } else {
            bodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
        }

        setBfResult(`Body Fat Percentage: ${bodyFat.toFixed(2)}%`);
    };

    const calculateIdealWeight = () => {
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

        setIwResult(`Ideal Weight Range: ${idealWeightMin.toFixed(2)} - ${idealWeightMax.toFixed(2)} kg`);
    };

    return (
      <div className="container">
      <h1>Health and Fitness Calculator</h1>

      <div className="calculator" id="bmi-calculator">
          <h2>BMI Calculator</h2>
          <label htmlFor="bmi-height">Height (cm):</label>
          <input type="number" id="bmi-height" required />
          <label htmlFor="bmi-weight">Weight (kg):</label>
          <input type="number" id="bmi-weight" required />
          <button onClick={calculateBMI}>Calculate BMI</button>
          <p id="bmi-result">{bmiResult}</p>
      </div>

      <div className="calculator" id="bmr-calculator">
          <h2>BMR Calculator</h2>
          <label htmlFor="bmr-gender">Gender:</label>
          <select id="bmr-gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
          <label htmlFor="bmr-age">Age:</label>
          <input type="number" id="bmr-age" required />
          <label htmlFor="bmr-height">Height (cm):</label>
          <input type="number" id="bmr-height" required />
          <label htmlFor="bmr-weight">Weight (kg):</label>
          <input type="number" id="bmr-weight" required />
          <button onClick={calculateBMR}>Calculate BMR</button>
          <p id="bmr-result">{bmrResult}</p>
      </div>

      <div className="calculator" id="calorie-calculator">
          <h2>Calorie Calculator</h2>
          <label htmlFor="cal-gender">Gender:</label>
          <select id="cal-gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
          <label htmlFor="cal-age">Age:</label>
          <input type="number" id="cal-age" required />
          <label htmlFor="cal-height">Height (cm):</label>
          <input type="number" id="cal-height" required />
          <label htmlFor="cal-weight">Weight (kg):</label>
          <input type="number" id="cal-weight" required />
          <label htmlFor="cal-activity">Activity Level:</label>
          <select id="cal-activity">
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly active</option>
              <option value="moderate">Moderately active</option>
              <option value="active">Active</option>
              <option value="very-active">Very active</option>
          </select>
          <button onClick={calculateCalories}>Calculate Calories</button>
          <p id="cal-result">{calResult}</p>
      </div>

      <div className="calculator" id="body-fat-calculator">
          <h2>Body Fat Calculator</h2>
          <label htmlFor="bf-gender">Gender:</label>
          <select id="bf-gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
          <label htmlFor="bf-height">Height (in inches):</label>
          <input type="number" id="bf-height" required />
          <label htmlFor="bf-waist">Waist (cm):</label>
          <input type="number" id="bf-waist" required />
          <label htmlFor="bf-neck">Neck (cm):</label>
          <input type="number" id="bf-neck" required />
            <label for="bf-hip">Hip (in cm):</label>
            <input type="number" id="bf-hip" required />
            <button onclick={calculateBodyFat}>Calculate Body Fat</button>
            <p id="bf-result">{bfResult}</p>
        </div>

        <div className="calculator" id="ideal-weight-calculator">
            <h2>Ideal Weight Calculator</h2>
            <label for="iw-gender">Gender:</label>
            <select id="iw-gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label for="iw-height">Height (cm):</label>
            <input type="number" id="iw-height" required />
            <label for="iw-age">Age:</label>
            <input type="number" id="iw-age" required />
            <label for="iw-frame">Frame Size:</label>
            <select id="iw-frame">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <button onclick={calculateIdealWeight} >Calculate Ideal Weight</button>
            <p id="iw-result">{iwResult}</p>
        </div>
    </div>
    );
  }

export default HealthAndFitnessCalculator;