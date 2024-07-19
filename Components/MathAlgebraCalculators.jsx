// import React from "react";

// const MathAlgebraCalculators = () => {
//   return (
//     <div>
//       <h2>Math & Algebra Calculators</h2>
//       {/* Add your calculator logic here */}
//     </div>
//   );
// };



// old code 

// import React, { useState } from 'react';
// import * as math from 'mathjs';

// const MathAlgebraCalculators = () => {
//   const [complex, setComplex] = useState({ real1: '', imaginary1: '', real2: '', imaginary2: '' });
//   const [complexResult, setComplexResult] = useState('');
//   const [booleanExpression, setBooleanExpression] = useState('');
//   const [booleanResult, setBooleanResult] = useState('');
//   const [rationalFunction, setRationalFunction] = useState('');
//   const [partialResult, setPartialResult] = useState('');
//   const [inequality, setInequality] = useState('');
//   const [inequalityResult, setInequalityResult] = useState('');
//   const [pipeDiameter, setPipeDiameter] = useState('');
//   const [velocity, setVelocity] = useState('');
//   const [flowRate, setFlowRate] = useState('');
//   const [force, setForce] = useState('');
//   const [time, setTime] = useState('');
//   const [impulse, setImpulse] = useState('');
//   const [number, setNumber] = useState('');
//   const [factorizationResult, setFactorizationResult] = useState('');
//   const [originalValue, setOriginalValue] = useState('');
//   const [percentageChange, setPercentageChange] = useState('');
//   const [percentageResult, setPercentageResult] = useState('');
//   const [base, setBase] = useState('');
//   const [exponent, setExponent] = useState('');
//   const [expoResult, setExpoResult] = useState('');
//   const [cube, setCube] = useState('');
//   const [cubeResult, setCubeResult] = useState('');
//   const [cubeRoot, setCubeRoot] = useState('');
//   const [rootResult, setRootResult] = useState('');

//   const handleComplexChange = (e) => setComplex({ ...complex, [e.target.id]: e.target.value });
//   const handleInequalityChange = (e) => setInequality(e.target.value);
//   const handleNumberChange = (e) => setNumber(e.target.value);

//   const addComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = real1 + real2;
//     const imaginaryResult = imaginary1 + imaginary2;

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const subtractComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = real1 - real2;
//     const imaginaryResult = imaginary1 - imaginary2;

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const multiplyComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = (real1 * real2) - (imaginary1 * imaginary2);
//     const imaginaryResult = (real1 * imaginary2) + (imaginary1 * real2);

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const simplifyBoolean = () => {
//     let expression = booleanExpression;

//     expression = expression.replace(/\btrue\b/gi, 'true')
//                            .replace(/\bfalse\b/gi, 'false')
//                            .replace(/\band\b/gi, '&&')
//                            .replace(/\bor\b/gi, '||')
//                            .replace(/\bnot\b/gi, '!');

//     try {
//       let simplifiedValue = eval(expression);
//       setBooleanResult(`Simplified Value: ${simplifiedValue}`);
//     } catch (e) {
//       setBooleanResult('Error: Invalid expression');
//     }
//   };

//   const doDecompose = () => {
//     if (!rationalFunction) {
//       alert('Please enter a rational function.');
//       return;
//     }

//     try {
//       let parsedFunction = math.parse(rationalFunction);
//       let simplifiedFunction = math.simplify(parsedFunction);
//       let partialFractions = partialFractionDecomposition(simplifiedFunction);

//       let result = '';
//       partialFractions.forEach((fraction, index) => {
//         result += `Partial Fraction ${index + 1}: ${fraction.toString()}\n`;
//       });

//       setPartialResult(result);
//     } catch (error) {
//       alert('An error occurred while decomposing the function.');
//     }
//   };

//   const partialFractionDecomposition = (expr) => {
//     let fractions = [];
//     let numerator = expr.numerator;
//     let denominator = expr.denominator;

//     let factoredDenominator = math.factor(denominator);
//     let terms = factoredDenominator.split('*');

//     terms.forEach((term) => {
//       let partialFraction = math.divide(numerator, term);
//       fractions.push(partialFraction);
//     });

//     return fractions;
//   };

//   const calculateInequality = () => {
//     const parts = inequality.split(" ");
//     if (parts.length !== 5) {
//       alert("Invalid inequality format. Please use 'ax + b > c' format.");
//       return;
//     }

//     const a = parseFloat(parts[0]);
//     const xSign = parts[1];
//     const b = parseFloat(parts[2]);
//     const operator = parts[3];
//     const c = parseFloat(parts[4]);

//     if (isNaN(a) || isNaN(b) || isNaN(c) || xSign !== '+' || operator !== '>') {
//       alert("Invalid inequality format. Please use 'ax + b > c' format.");
//       return;
//     }

//     let solutionSet = a > 0 ? `Solution set for ${inequality}: x > ${(c - b) / a}` : `Solution set for ${inequality}: x < ${(c - b) / a}`;
//     setInequalityResult(solutionSet);
//   };

//   const calculateFlowRate = () => {
//     const diameter = parseFloat(pipeDiameter);
//     const velocityValue = parseFloat(velocity);

//     const radius = diameter / 2;
//     const area = Math.PI * radius ** 2;
//     const flowRateValue = area * velocityValue;

//     setFlowRate(flowRateValue.toFixed(4));
//   };

//   const calculateImpulse = () => {
//     const impulseValue = force * time;
//     setImpulse(`Impulse (I) = ${impulseValue.toFixed(2)} Ns`);
//   };

//   const factorize = () => {
//     let num = parseInt(number);
//     let originalNumber = num;
//     let factors = [];

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       while (num % i === 0) {
//         factors.push(i);
//         num /= i;
//       }
//     }

//     if (num > 1) factors.push(num);
//     setFactorizationResult(`Prime factors of ${originalNumber} are: ${factors.join(', ')}`);
//   };

//   const calculatePercentage = () => {
//     const original = parseFloat(originalValue);
//     const percentage = parseFloat(percentageChange);

//     const newValue = original + (original * (percentage / 100));
//     setPercentageResult(`New Value: ${newValue}`);
//   };

//   const calculateExponential = () => {
//     const baseValue = parseFloat(base);
//     const exponentValue = parseFloat(exponent);

//     if (!isNaN(baseValue) && !isNaN(exponentValue)) {
//       const result = Math.pow(baseValue, exponentValue);
//       setExpoResult(result);
//     } else {
//       setExpoResult('Invalid input');
//     }
//   };

//   const calculateCube = () => {
//     if (cube === '') {
//       alert('Please enter an integer.');
//       return;
//     }

//     const result = Math.pow(cube, 3);
//     setCubeResult(`The cube of ${cube} is ${result}.`);
//   };

//   const calculateCubeRoot = () => {
//     if (cubeRoot === '') {
//       alert('Please enter an integer.');
//       return;
//     }

//     const result = Math.cbrt(cubeRoot);
//     setRootResult(`Cube root of ${cubeRoot} is ${result.toFixed(4)}`);
//   };

//   return (
//     <div className='container'>
//     <div className="calculator">
//         <h2>Complex Number Calculator</h2>
//         <label for="real1">Real Part 1:</label>
//         <input type="number" id="real1" />
//         <label for="imaginary1">Imaginary Part 1:</label>
//         <input type="number" id="imaginary1" />
//         <br/>
//         <label for="real2">Real Part 2:</label>
//         <input type="number" id="real2" />
//         <label for="imaginary2">Imaginary Part 2:</label>
//         <input type="number" id="imaginary2" />
//         <br />
//         <button onclick={addComplexNumbers}>Add</button>
//         <button onclick={subtractComplexNumbers}>Subtract</button>
//         <button onclick={multiplyComplexNumbers}>Multiply</button>
//         <p id="complexResult" className="result">{complexResult} </p>
//     </div>


//     <title>Boolean Algebra Simplifier</title>
   
//     <div className="calculator">
//       <h2>Boolean Algebra Simplifier</h2>
//       <label for="booleanExpression">Boolean Expression:</label>
//       <input type="text" id="booleanExpression" placeholder="Enter boolean expression" /><br/>
  
//       <button onclick={simplifyBoolean}>Simplify</button><br/>
  
//       <h3>Result:</h3>
//       <p id="result"></p>
//     </div>


//     <div className="calculator">
//       <h2>Partial Fraction Decomposer</h2>
//       <input id="inputFunction" placeholder="Enter rational function" />
//       <button onclick="decompose()">Decompose</button>
//       <div id="partresult" className="result"></div>
//     </div>
  

//     <div className="calculator">
//         <h2>Inequality Calculator</h2>
//         <input type="text" id="inequalityInput" placeholder="Enter inequality expression" />
//         <button onclick="calculateInequality()">Calculate</button>
//         <div id="solutionSet"></div>
//     </div>
    

//     <div className="calculator">
//         <h2>Flow Rate Calculator</h2>
//         <div className="input-group">
//           <label for="pipe-diameter">Pipe Diameter (m):</label>
//           <input type="number" id="pipe-diameter" step="any" placeholder="Enter pipe diameter" />
//         </div>
//         <div className="input-group">
//           <label for="velocity">Velocity (m/s):</label>
//           <input type="number" id="velocity" step="any" placeholder="Enter flow velocity" />
//         </div>
//         <button onclick="calculateFlowRate()">Calculate Flow Rate</button>
//         <div className="result">
//           <label for="flow-rate">Flow Rate (m³/s):</label>
//           <output id="flow-rate"></output>
//         </div>
//       </div>


//     <div className="calculator">
//         <h2>Impulse Calculator</h2>
//         <div>
//             <label for="force">Force (N):</label>
//             <input type="number" id="force" placeholder="Enter force" />
//         </div>
//         <div>
//             <label for="time">Time (s):</label>
//             <input type="number" id="time" placeholder="Enter time" />
//         </div>
//         <button onclick="calculateImpulse()">Calculate Impulse</button>
//         <div id="impulseresult"></div>
//     </div>

//     <div className="calculator">
//         <h2>Prime Factorization Calculator</h2>
//         <input type="number" id="numberInput" placeholder="Enter an integer" />
//         <button onclick="factorize()">Factorize</button>
//         <div id="factorizationResult"></div>
//       </div>

    
//     <div className="calculator">
//         <h2>Percentage Calculator</h2>
//         <label for="originalValue">Original Value:</label>
//         <input type="number" id="originalValue" />
//         <label for="percentageChange">Percentage Change (%):</label>
//         <input type="number" id="percentageChange" />
//         <button onclick="calculatePercentage()">Calculate</button>
//         <p id="percentageResult" className="result">New Value: </p>
//     </div>

    
//     <div className="calculator">
//         <h2>Exponential Calculator</h2>
//         <div>
//             <label for="base">Base:</label>
//             <input type="number" id="base" placeholder="Enter base" />
//         </div>
//         <div>
//             <label for="exponent">Exponent:</label>
//             <input type="number" id="exponent" placeholder="Enter exponent"/>
//         </div>
//         <button onclick="calculateExponential()">Calculate</button>
//         <div>
//             <label for="exporesult">Result:</label>
//             <input type="text" id="exporesult" readonly />
//         </div>
//     </div>


    
//     <div className="calculator">
//         <h1>Cube Calculator</h1>
//         <label for="number">Enter an integer:</label>
//         <input type="number" id="number" placeholder="Enter an integer" />
//         <button onclick="calculateCube()">Calculate Cube</button>
//         <div id="cresult"></div>
//     </div>
  
    
//     <div className="calculator">
//         <h2>Cube Root Calculator</h2>
//         <label for="cubeRootNumber">Enter Integer:</label>
//         <input type="number" id="number" placeholder="Enter an integer" />

//         <button onclick="calculateCubeRoot()">Calculate Cube Root</button>
//         <p id="rootResult" className="result">Root Value</p>
//     </div>
//   </div>
//   )
// };

// export default MathAlgebraCalculators;

// old code

// new code

import React, { useState } from 'react';
import * as math from 'mathjs';

const MathAlgebraCalculators = () => {
  const [complex, setComplex] = useState({ real1: '', imaginary1: '', real2: '', imaginary2: '' });
  const [complexResult, setComplexResult] = useState('');
  const [booleanExpression, setBooleanExpression] = useState('');
  const [booleanResult, setBooleanResult] = useState('');
  const [rationalFunction, setRationalFunction] = useState('');
  const [partialResult, setPartialResult] = useState('');
  const [inequality, setInequality] = useState('');
  const [inequalityResult, setInequalityResult] = useState('');
  const [pipeDiameter, setPipeDiameter] = useState('');
  const [velocity, setVelocity] = useState('');
  const [flowRate, setFlowRate] = useState('');
  const [force, setForce] = useState('');
  const [time, setTime] = useState('');
  const [impulse, setImpulse] = useState('');
  const [number, setNumber] = useState('');
  const [factorizationResult, setFactorizationResult] = useState('');
  const [originalValue, setOriginalValue] = useState('');
  const [percentageChange, setPercentageChange] = useState('');
  const [percentageResult, setPercentageResult] = useState('');
  const [base, setBase] = useState('');
  const [exponent, setExponent] = useState('');
  const [expoResult, setExpoResult] = useState('');
  const [cube, setCube] = useState('');
  const [cubeResult, setCubeResult] = useState('');
  const [cubeRoot, setCubeRoot] = useState('');
  const [rootResult, setRootResult] = useState('');

  const handleComplexChange = (e) => setComplex({ ...complex, [e.target.id]: e.target.value });
  const handleInequalityChange = (e) => setInequality(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);

  const addComplexNumbers = () => {
    const real1 = parseFloat(complex.real1);
    const imaginary1 = parseFloat(complex.imaginary1);
    const real2 = parseFloat(complex.real2);
    const imaginary2 = parseFloat(complex.imaginary2);

    const realResult = real1 + real2;
    const imaginaryResult = imaginary1 + imaginary2;

    setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
  };

  const subtractComplexNumbers = () => {
    const real1 = parseFloat(complex.real1);
    const imaginary1 = parseFloat(complex.imaginary1);
    const real2 = parseFloat(complex.real2);
    const imaginary2 = parseFloat(complex.imaginary2);

    const realResult = real1 - real2;
    const imaginaryResult = imaginary1 - imaginary2;

    setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
  };

  const multiplyComplexNumbers = () => {
    const real1 = parseFloat(complex.real1);
    const imaginary1 = parseFloat(complex.imaginary1);
    const real2 = parseFloat(complex.real2);
    const imaginary2 = parseFloat(complex.imaginary2);

    const realResult = (real1 * real2) - (imaginary1 * imaginary2);
    const imaginaryResult = (real1 * imaginary2) + (imaginary1 * real2);

    setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
  };

  const simplifyBoolean = () => {
    let expression = booleanExpression;

    expression = expression.replace(/\btrue\b/gi, 'true')
                           .replace(/\bfalse\b/gi, 'false')
                           .replace(/\band\b/gi, '&&')
                           .replace(/\bor\b/gi, '||')
                           .replace(/\bnot\b/gi, '!');

    try {
      let simplifiedValue = eval(expression);
      setBooleanResult(`Simplified Value: ${simplifiedValue}`);
    } catch (e) {
      setBooleanResult('Error: Invalid expression');
    }
  };

  const doDecompose = () => {
    if (!rationalFunction) {
      alert('Please enter a rational function.');
      return;
    }

    try {
      let parsedFunction = math.parse(rationalFunction);
      let simplifiedFunction = math.simplify(parsedFunction);
      let partialFractions = partialFractionDecomposition(simplifiedFunction);

      let result = '';
      partialFractions.forEach((fraction, index) => {
        result += `Partial Fraction ${index + 1}: ${fraction.toString()}\n`;
      });

      setPartialResult(result);
    } catch (error) {
      alert('An error occurred while decomposing the function.');
    }
  };

  const partialFractionDecomposition = (expr) => {
    let fractions = [];
    let numerator = expr.numerator;
    let denominator = expr.denominator;

    let factoredDenominator = math.factor(denominator);
    let terms = factoredDenominator.split('*');

    terms.forEach((term) => {
      let partialFraction = math.divide(numerator, term);
      fractions.push(partialFraction);
    });

    return fractions;
  };

  const calculateInequality = () => {
    const parts = inequality.split(" ");
    if (parts.length !== 5) {
      alert("Invalid inequality format. Please use 'ax + b > c' format.");
      return;
    }

    const a = parseFloat(parts[0]);
    const xSign = parts[1];
    const b = parseFloat(parts[2]);
    const operator = parts[3];
    const c = parseFloat(parts[4]);

    if (isNaN(a) || isNaN(b) || isNaN(c) || xSign !== '+' || operator !== '>') {
      alert("Invalid inequality format. Please use 'ax + b > c' format.");
      return;
    }

    let solutionSet = a > 0 ? `Solution set for ${inequality}: x > ${(c - b) / a}` : `Solution set for ${inequality}: x < ${(c - b) / a}`;
    setInequalityResult(solutionSet);
  };

  const calculateFlowRate = () => {
    const diameter = parseFloat(pipeDiameter);
    const velocityValue = parseFloat(velocity);

    const radius = diameter / 2;
    const area = Math.PI * radius ** 2;
    const flowRateValue = area * velocityValue;

    setFlowRate(flowRateValue.toFixed(4));
  };

  const calculateImpulse = () => {
    const impulseValue = force * time;
    setImpulse(`Impulse (I) = ${impulseValue.toFixed(2)} Ns`);
  };

  const factorize = () => {
    let num = parseInt(number);
    let originalNumber = num;
    let factors = [];

    for (let i = 2; i <= Math.sqrt(num); i++) {
      while (num % i === 0) {
        factors.push(i);
        num /= i;
      }
    }

    if (num > 1) factors.push(num);
    setFactorizationResult(`Prime factors of ${originalNumber} are: ${factors.join(', ')}`);
  };

  const calculatePercentage = () => {
    const original = parseFloat(originalValue);
    const percentage = parseFloat(percentageChange);

    const newValue = original + (original * (percentage / 100));
    setPercentageResult(`New Value: ${newValue}`);
  };

  const calculateExponential = () => {
    const baseValue = parseFloat(base);
    const exponentValue = parseFloat(exponent);

    if (!isNaN(baseValue) && !isNaN(exponentValue)) {
      const result = Math.pow(baseValue, exponentValue);
      setExpoResult(result);
    } else {
      setExpoResult('Invalid input');
    }
  };

  const calculateCube = () => {
    if (cube === '') {
      alert('Please enter an integer.');
      return;
    }

    const result = Math.pow(cube, 3);
    setCubeResult(`The cube of ${cube} is ${result}.`);
  };

  const calculateCubeRoot = () => {
    if (cubeRoot === '') {
      alert('Please enter an integer.');
      return;
    }

    const result = Math.cbrt(cubeRoot);
    setRootResult(`Cube root of ${cubeRoot} is ${result.toFixed(3)}.`);
  };

  return (
    <div className="container mt-5">
      <h1>Math Algebra Calculators</h1>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Complex Numbers</h2>
          <input type="text" id="real1" className="form-control" placeholder="Real Part of 1st Complex Number" value={complex.real1} onChange={handleComplexChange} />
          <input type="text" id="imaginary1" className="form-control" placeholder="Imaginary Part of 1st Complex Number" value={complex.imaginary1} onChange={handleComplexChange} />
          <input type="text" id="real2" className="form-control" placeholder="Real Part of 2nd Complex Number" value={complex.real2} onChange={handleComplexChange} />
          <input type="text" id="imaginary2" className="form-control" placeholder="Imaginary Part of 2nd Complex Number" value={complex.imaginary2} onChange={handleComplexChange} />
          <button className="btn btn-primary" onClick={addComplexNumbers}>Add</button>
          <button className="btn btn-secondary" onClick={subtractComplexNumbers}>Subtract</button>
          <button className="btn btn-success" onClick={multiplyComplexNumbers}>Multiply</button>
          <div className="mt-2">{complexResult}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Simplify Boolean Expressions</h2>
          <input type="text" className="form-control" placeholder="Enter Boolean Expression" value={booleanExpression} onChange={(e) => setBooleanExpression(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={simplifyBoolean}>Simplify</button>
          <div className="mt-2">{booleanResult}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Rational Functions - Partial Fraction Decomposition</h2>
          <input type="text" className="form-control" placeholder="Enter Rational Function" value={rationalFunction} onChange={(e) => setRationalFunction(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={doDecompose}>Decompose</button>
          <div className="mt-2">{partialResult}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Solve Inequalities</h2>
          <input type="text" className="form-control" placeholder="Enter Inequality (e.g., 2x + 3 > 5)" value={inequality} onChange={handleInequalityChange} />
          <button className="btn btn-primary mt-2" onClick={calculateInequality}>Solve</button>
          <div className="mt-2">{inequalityResult}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Flow Rate Calculation</h2>
          <input type="text" className="form-control" placeholder="Pipe Diameter (m)" value={pipeDiameter} onChange={(e) => setPipeDiameter(e.target.value)} />
          <input type="text" className="form-control" placeholder="Flow Velocity (m/s)" value={velocity} onChange={(e) => setVelocity(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={calculateFlowRate}>Calculate</button>
          <div className="mt-2">Flow Rate: {flowRate} m³/s</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Impulse Calculation</h2>
          <input type="text" className="form-control" placeholder="Force (N)" value={force} onChange={(e) => setForce(e.target.value)} />
          <input type="text" className="form-control" placeholder="Time (s)" value={time} onChange={(e) => setTime(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={calculateImpulse}>Calculate</button>
          <div className="mt-2">{impulse}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Prime Factorization</h2>
          <input type="text" className="form-control" placeholder="Enter a Number" value={number} onChange={handleNumberChange} />
          <button className="btn btn-primary mt-2" onClick={factorize}>Factorize</button>
          <div className="mt-2">{factorizationResult}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Percentage Change</h2>
          <input type="text" className="form-control" placeholder="Original Value" value={originalValue} onChange={(e) => setOriginalValue(e.target.value)} />
          <input type="text" className="form-control" placeholder="Percentage Change" value={percentageChange} onChange={(e) => setPercentageChange(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={calculatePercentage}>Calculate</button>
          <div className="mt-2">{percentageResult}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Exponential Calculation</h2>
          <input type="text" className="form-control" placeholder="Base" value={base} onChange={(e) => setBase(e.target.value)} />
          <input type="text" className="form-control" placeholder="Exponent" value={exponent} onChange={(e) => setExponent(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={calculateExponential}>Calculate</button>
          <div className="mt-2">Result: {expoResult}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Cube Calculation</h2>
          <input type="text" className="form-control" placeholder="Enter a Number" value={cube} onChange={(e) => setCube(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={calculateCube}>Calculate</button>
          <div className="mt-2">Result: {cubeResult}</div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2>Cube Root Calculation</h2>
          <input type="text" className="form-control" placeholder="Enter a Number" value={cubeRoot} onChange={(e) => setCubeRoot(e.target.value)} />
          <button className="btn btn-primary mt-2" onClick={calculateCubeRoot}>Calculate</button>
          <div className="mt-2">Result: {rootResult}</div>
        </div>
      </div>
    </div>
  );
};

export default MathAlgebraCalculators;

// new code ⬆️



//     <div className="calculator">
//         <h2>Prime Factorization Calculator</h2>
//         <input type="number" id="numberInput" placeholder="Enter an integer" />
//         <button onclick="factorize()">Factorize</button>
//         <div id="factorizationResult"></div>
//       </div>

    
//     <div className="calculator">
//         <h2>Percentage Calculator</h2>
//         <label for="originalValue">Original Value:</label>
//         <input type="number" id="originalValue" />
//         <label for="percentageChange">Percentage Change (%):</label>
//         <input type="number" id="percentageChange" />
//         <button onclick="calculatePercentage()">Calculate</button>
//         <p id="percentageResult" className="result">New Value: </p>
//     </div>

// Abhyudai, [18-07-2024 01:32]
// <div className="calculator">
//         <h2>Exponential Calculator</h2>
//         <div>
//             <label for="base">Base:</label>
//             <input type="number" id="base" placeholder="Enter base" />
//         </div>
//         <div>
//             <label for="exponent">Exponent:</label>
//             <input type="number" id="exponent" placeholder="Enter exponent"/>
//         </div>
//         <button onclick="calculateExponential()">Calculate</button>
//         <div>
//             <label for="exporesult">Result:</label>
//             <input type="text" id="exporesult" readonly />
//         </div>
//     </div>


    
//     <div className="calculator">
//         <h1>Cube Calculator</h1>
//         <label for="number">Enter an integer:</label>
//         <input type="number" id="number" placeholder="Enter an integer" />
//         <button onclick="calculateCube()">Calculate Cube</button>
//         <div id="cresult"></div>
//     </div>
  
    
//     <div className="calculator">
//         <h2>Cube Root Calculator</h2>
//         <label for="cubeRootNumber">Enter Integer:</label>
//         <input type="number" id="number" placeholder="Enter an integer" />

//         <button onclick="calculateCubeRoot()">Calculate Cube Root</button>
//         <p id="rootResult" className="result">Root Value</p>
//     </div>
//   </div>
//   )
// }