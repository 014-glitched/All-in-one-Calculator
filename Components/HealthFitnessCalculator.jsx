<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
// import React from "react";

// const HealthFitnessCalculator = () => {
//   return (
//     <div>
//       <h2>Health & Fitness Calculator</h2>
//       {/* Add your calculator logic here */}
//     </div>
//   );
// };

// export default HealthFitnessCalculator;



//?

import React, { useState } from 'react';

const HealthFitnessCalculators = () => {
  // State variables for BMI Calculator
  const [bmiHeight, setBMIHeight] = useState('');
  const [bmiWeight, setBMIWeight] = useState('');
  const [bmiCategory, setBMICategory] = useState('');

  // State variables for BMR Calculator
  const [bmrGender, setBMRGender] = useState('male');
  const [bmrAge, setBMRAge] = useState('');
  const [bmrWeight, setBMRWeight] = useState('');
  const [bmrHeight, setBMRHeight] = useState('');
  const [bmrResult, setBMRResult] = useState('');

  // State variables for Calorie Calculator
  const [calGender, setCalGender] = useState('male');
  const [calAge, setCalAge] = useState('');
  const [calWeight, setCalWeight] = useState('');
  const [calHeight, setCalHeight] = useState('');
  const [calActivityLevel, setCalActivityLevel] = useState('sedentary');
  const [caloriesResult, setCaloriesResult] = useState('');

  // State variables for Body Fat Calculator
  const [bodyFatGender, setBodyFatGender] = useState('male');
  const [bodyFatAge, setBodyFatAge] = useState('');
  const [bodyFatWaist, setBodyFatWaist] = useState('');
  const [bodyFatNeck, setBodyFatNeck] = useState('');
  const [bodyFatResult, setBodyFatResult] = useState('');

  // State variables for Ideal Weight Calculator
  const [idealWeightGender, setIdealWeightGender] = useState('male');
  const [idealWeightHeight, setIdealWeightHeight] = useState('');
  const [idealWeightAge, setIdealWeightAge] = useState('');
  const [idealWeightFrameSize, setIdealWeightFrameSize] = useState('medium');
  const [idealWeightResult, setIdealWeightResult] = useState('');

  // BMI Calculator function
  const calculateBMI = () => {
    if (bmiHeight && bmiWeight) {
      const bmi = (bmiWeight / (bmiHeight * bmiHeight)) * 10000;

      let category = '';
      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
      } else if (bmi >= 24.9 && bmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }

      setBMICategory(category);
    }
  };

  // BMR Calculator function
  const calculateBMR = () => {
    if (bmrGender && bmrAge && bmrWeight && bmrHeight) {
      let bmrValue = 0;
      if (bmrGender === 'male') {
        bmrValue = 10 * bmrWeight + 6.25 * bmrHeight - 5 * bmrAge + 5;
      } else {
        bmrValue = 10 * bmrWeight + 6.25 * bmrHeight - 5 * bmrAge - 161;
      }
      setBMRResult(bmrValue.toFixed(2));
    }
  };

  // Calorie Calculator function
  const calculateCalories = () => {
    if (calGender && calAge && calWeight && calHeight && calActivityLevel) {
      let bmrValue = 0;
      if (calGender === 'male') {
        bmrValue = 10 * calWeight + 6.25 * calHeight - 5 * calAge + 5;
      } else {
        bmrValue = 10 * calWeight + 6.25 * calHeight - 5 * calAge - 161;
      }

      let calorieNeeds = 0;
      switch (calActivityLevel) {
        case 'sedentary':
          calorieNeeds = bmrValue * 1.2;
          break;
        case 'lightlyActive':
          calorieNeeds = bmrValue * 1.375;
          break;
        case 'moderatelyActive':
          calorieNeeds = bmrValue * 1.55;
          break;
        case 'veryActive':
          calorieNeeds = bmrValue * 1.725;
          break;
        case 'extraActive':
          calorieNeeds = bmrValue * 1.9;
          break;
        default:
          calorieNeeds = bmrValue * 1.2;
      }

      setCaloriesResult(calorieNeeds.toFixed(2));
    }
  };

  // Body Fat Calculator function
  const calculateBodyFat = () => {
    if (bodyFatGender && bodyFatAge && bodyFatWaist && bodyFatNeck) {
      let bodyFatPercent = 0;
      if (bodyFatGender === 'male') {
        const waistInches = parseFloat(bodyFatWaist) * 2.54;
        const neckInches = parseFloat(bodyFatNeck) * 2.54;
        const factor1 = (waistInches * 0.393) - (neckInches * 0.393);
        const factor2 = (parseFloat(bodyFatAge) * 0.2);
        bodyFatPercent = factor1 - factor2 - 16.2;
      } else {
        const waistInches = parseFloat(bodyFatWaist) * 2.54;
        const neckInches = parseFloat(bodyFatNeck) * 2.54;
        const factor1 = (waistInches * 0.393) - (neckInches * 0.393);
        const factor2 = (parseFloat(bodyFatAge) * 0.2);
        bodyFatPercent = factor1 - factor2 - 5.4;
      }

      setBodyFatResult(bodyFatPercent.toFixed(2));
    }
  };

  // Ideal Weight Calculator function
  const calculateIdealWeight = () => {
    if (idealWeightGender && idealWeightHeight && idealWeightAge && idealWeightFrameSize) {
      let idealWeightLow = 0;
      let idealWeightHigh = 0;
      const heightInches = parseFloat(idealWeightHeight) * 0.3937;

      if (idealWeightGender === 'male') {
        switch (idealWeightFrameSize) {
          case 'small':
            idealWeightLow = (heightInches - 60) * 2.3 + 52;
            idealWeightHigh = (heightInches - 60) * 2.3 + 58;
            break;
          case 'medium':
            idealWeightLow = (heightInches - 60) * 2.3 + 56;
            idealWeightHigh = (heightInches - 60) * 2.3 + 62;
            break;
          case 'large':
            idealWeightLow = (heightInches - 60) * 2.3 + 60;
            idealWeightHigh = (heightInches - 60) * 2.3 + 66;
            break;
          default:
            idealWeightLow = (heightInches - 60) * 2.3 + 56;
            idealWeightHigh = (heightInches - 60) * 2.3 + 62;
        }
      } else {
        switch (idealWeightFrameSize) {
          case 'small':
            idealWeightLow = (heightInches - 60) * 2.3 + 49;
            idealWeightHigh = (heightInches - 60) * 2.3 + 55;
            break;
          case 'medium':
            idealWeightLow = (heightInches - 60) * 2.3 + 53.5;
            idealWeightHigh = (heightInches - 60) * 2.3 + 59.5;
            break;
          case 'large':
            idealWeightLow = (heightInches - 60) * 2.3 + 58;
            idealWeightHigh = (heightInches - 60) * 2.3 + 64;
            break;
          default:
            idealWeightLow = (heightInches - 60) * 2.3 + 53.5;
            idealWeightHigh = (heightInches - 60) * 2.3 + 59.5;
        }
      }

      setIdealWeightResult(`${idealWeightLow.toFixed(2)} - ${idealWeightHigh.toFixed(2)} kg`);
    }
  };

  return (
    <div className="health-fitness-calculators">
      {/* BMI Calculator */}
      <div className="calculator">
        <h2>BMI Calculator</h2>
        <div>
          <label>Height (cm):</label>
          <input type="number" value={bmiHeight} onChange={(e) => setBMIHeight(e.target.value)} />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input type="number" value={bmiWeight} onChange={(e) => setBMIWeight(e.target.value)} />
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmiCategory && <p>Your BMI category is: {bmiCategory}</p>}
      </div>
<<<<<<< Updated upstream

      {/* BMR Calculator */}
      <div className="calculator">
        <h2>BMR Calculator</h2>
        <div>
          <label>Gender:</label>
          <select value={bmrGender} onChange={(e) => setBMRGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age (years):</label>
          <input type="number" value={bmrAge} onChange={(e) => setBMRAge(e.target.value)} />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input type="number" value={bmrWeight} onChange={(e) => setBMRWeight(e.target.value)} />
        </div>
        <div>
          <label>Height (cm):</label>
          <input type="number" value={bmrHeight} onChange={(e) => setBMRHeight(e.target.value)} />
        </div>
        <button onClick={calculateBMR}>Calculate BMR</button>
        {bmrResult && <p>Your Basal Metabolic Rate (BMR) is: {bmrResult} calories/day</p>}
      </div>

      {/* Calorie Calculator */}
      <div className="calculator">
        <h2>Calorie Calculator</h2>
        <div>
          <label>Gender:</label>
          <select value={calGender} onChange={(e) => setCalGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age (years):</label>
          <input type="number" value={calAge} onChange={(e) => setCalAge(e.target.value)} />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input type="number" value={calWeight} onChange={(e) => setCalWeight(e.target.value)} />
        </div>
        <div>
          <label>Height (cm):</label>
          <input type="number" value={calHeight} onChange={(e) => setCalHeight(e.target.value)} />
        </div>
        <div>
          <label>Activity Level:</label>
          <select value={calActivityLevel} onChange={(e) => setCalActivityLevel(e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
        </div>
        <button onClick={calculateCalories}>Calculate Daily Calories</button>
        {caloriesResult && <p>Your daily calorie needs are: {caloriesResult} calories/day</p>}
      </div>

      {/* Body Fat Calculator */}
      <div className="calculator">
        <h2>Body Fat Calculator</h2>
        <div>
          <label>Gender:</label>
          <select value={bodyFatGender} onChange={(e) => setBodyFatGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age (years):</label>
          <input type="number" value={bodyFatAge} onChange={(e) => setBodyFatAge(e.target.value)} />
        </div>
        <div>
          <label>Waist (cm):</label>
          <input type="number" value={bodyFatWaist} onChange={(e) => setBodyFatWaist(e.target.value)} />
        </div>
        <div>
          <label>Neck (cm):</label>
          <input type="number" value={bodyFatNeck} onChange={(e) => setBodyFatNeck(e.target.value)} />
        </div>
        <button onClick={calculateBodyFat}>Calculate Body Fat Percentage</button>
        {bodyFatResult && <p>Your body fat percentage is: {bodyFatResult}%</p>}
      </div>

      {/* Ideal Weight Calculator */}
      <div className="calculator">
        <h2>Ideal Weight Calculator</h2>
        <div>
          <label>Gender:</label>
          <select value={idealWeightGender} onChange={(e) => setIdealWeightGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Height (cm):</label>
          <input type="number" value={idealWeightHeight} onChange={(e) => setIdealWeightHeight(e.target.value)} />
        </div>
        <div>
          <label>Age (years):</label>
          <input type="number" value={idealWeightAge} onChange={(e) => setIdealWeightAge(e.target.value)} />
        </div>
        <div>
          <label>Frame Size:</label>
          <select value={idealWeightFrameSize} onChange={(e) => setIdealWeightFrameSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button onClick={calculateIdealWeight}>Calculate Ideal Weight</button>
        {idealWeightResult && <p>Your ideal weight range is: {idealWeightResult} kg</p>}
      </div>
>>>>>>> Stashed changes
    </div>
    );
  }

<<<<<<< Updated upstream
export default HealthAndFitnessCalculator;
=======
export default HealthFitnessCalculators;
>>>>>>> Stashed changes
=======

      {/* BMR Calculator */}
      <div className="calculator">
        <h2>BMR Calculator</h2>
        <div>
          <label>Gender:</label>
          <select value={bmrGender} onChange={(e) => setBMRGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age (years):</label>
          <input type="number" value={bmrAge} onChange={(e) => setBMRAge(e.target.value)} />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input type="number" value={bmrWeight} onChange={(e) => setBMRWeight(e.target.value)} />
        </div>
        <div>
          <label>Height (cm):</label>
          <input type="number" value={bmrHeight} onChange={(e) => setBMRHeight(e.target.value)} />
        </div>
        <button onClick={calculateBMR}>Calculate BMR</button>
        {bmrResult && <p>Your Basal Metabolic Rate (BMR) is: {bmrResult} calories/day</p>}
      </div>

      {/* Calorie Calculator */}
      <div className="calculator">
        <h2>Calorie Calculator</h2>
        <div>
          <label>Gender:</label>
          <select value={calGender} onChange={(e) => setCalGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age (years):</label>
          <input type="number" value={calAge} onChange={(e) => setCalAge(e.target.value)} />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input type="number" value={calWeight} onChange={(e) => setCalWeight(e.target.value)} />
        </div>
        <div>
          <label>Height (cm):</label>
          <input type="number" value={calHeight} onChange={(e) => setCalHeight(e.target.value)} />
        </div>
        <div>
          <label>Activity Level:</label>
          <select value={calActivityLevel} onChange={(e) => setCalActivityLevel(e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
        </div>
        <button onClick={calculateCalories}>Calculate Daily Calories</button>
        {caloriesResult && <p>Your daily calorie needs are: {caloriesResult} calories/day</p>}
      </div>

      {/* Body Fat Calculator */}
      <div className="calculator">
        <h2>Body Fat Calculator</h2>
        <div>
          <label>Gender:</label>
          <select value={bodyFatGender} onChange={(e) => setBodyFatGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age (years):</label>
          <input type="number" value={bodyFatAge} onChange={(e) => setBodyFatAge(e.target.value)} />
        </div>
        <div>
          <label>Waist (cm):</label>
          <input type="number" value={bodyFatWaist} onChange={(e) => setBodyFatWaist(e.target.value)} />
        </div>
        <div>
          <label>Neck (cm):</label>
          <input type="number" value={bodyFatNeck} onChange={(e) => setBodyFatNeck(e.target.value)} />
        </div>
        <button onClick={calculateBodyFat}>Calculate Body Fat Percentage</button>
        {bodyFatResult && <p>Your body fat percentage is: {bodyFatResult}%</p>}
      </div>

      {/* Ideal Weight Calculator */}
      <div className="calculator">
        <h2>Ideal Weight Calculator</h2>
        <div>
          <label>Gender:</label>
          <select value={idealWeightGender} onChange={(e) => setIdealWeightGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Height (cm):</label>
          <input type="number" value={idealWeightHeight} onChange={(e) => setIdealWeightHeight(e.target.value)} />
        </div>
        <div>
          <label>Age (years):</label>
          <input type="number" value={idealWeightAge} onChange={(e) => setIdealWeightAge(e.target.value)} />
        </div>
        <div>
          <label>Frame Size:</label>
          <select value={idealWeightFrameSize} onChange={(e) => setIdealWeightFrameSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button onClick={calculateIdealWeight}>Calculate Ideal Weight</button>
        {idealWeightResult && <p>Your ideal weight range is: {idealWeightResult} kg</p>}
      </div>
    </div>
  );
};

export default HealthFitnessCalculators;
>>>>>>> Stashed changes
