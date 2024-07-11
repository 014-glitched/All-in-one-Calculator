// import React from 'react';

// const ConversionCalculator = () => {
//   return (
//     <div>
//       <h2>Conversion Calculator</h2>
//       {/* Add your calculator logic here */}
//     </div>
//   );
// };

// export default ConversionCalculator;



//?

// import React, { useState } from 'react';

// // Individual conversion components
// const LengthConversion = ({ value, setValue, fromUnit, setFromUnit, toUnit, setToUnit, result, convertLength, units }) => (
//   <div>
//     <h3>Length Conversion</h3>
//     <div>
//       <label>Value:</label>
//       <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
//     </div>
//     <div>
//       <label>From:</label>
//       <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
//         {Object.keys(units).map((unit) => (
//           <option key={unit} value={unit}>{unit}</option>
//         ))}
//       </select>
//     </div>
//     <div>
//       <label>To:</label>
//       <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
//         {Object.keys(units).map((unit) => (
//           <option key={unit} value={unit}>{unit}</option>
//         ))}
//       </select>
//     </div>
//     <button onClick={convertLength}>Convert</button>
//     {result && <div><h4>Result: {result}</h4></div>}
//   </div>
// );

// const WeightConversion = ({ value, setValue, fromUnit, setFromUnit, toUnit, setToUnit, result, convertWeight, units }) => (
//   <div>
//     <h3>Weight Conversion</h3>
//     <div>
//       <label>Value:</label>
//       <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
//     </div>
//     <div>
//       <label>From:</label>
//       <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
//         {Object.keys(units).map((unit) => (
//           <option key={unit} value={unit}>{unit}</option>
//         ))}
//       </select>
//     </div>
//     <div>
//       <label>To:</label>
//       <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
//         {Object.keys(units).map((unit) => (
//           <option key={unit} value={unit}>{unit}</option>
//         ))}
//       </select>
//     </div>
//     <button onClick={convertWeight}>Convert</button>
//     {result && <div><h4>Result: {result}</h4></div>}
//   </div>
// );

// const TemperatureConversion = ({ value, setValue, fromUnit, setFromUnit, toUnit, setToUnit, result, convertTemperature }) => (
//   <div>
//     <h3>Temperature Conversion</h3>
//     <div>
//       <label>Value:</label>
//       <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
//     </div>
//     <div>
//       <label>From:</label>
//       <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
//         <option value="celsius">Celsius</option>
//         <option value="fahrenheit">Fahrenheit</option>
//         <option value="kelvin">Kelvin</option>
//       </select>
//     </div>
//     <div>
//       <label>To:</label>
//       <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
//         <option value="celsius">Celsius</option>
//         <option value="fahrenheit">Fahrenheit</option>
//         <option value="kelvin">Kelvin</option>
//       </select>
//     </div>
//     <button onClick={convertTemperature}>Convert</button>
//     {result && <div><h4>Result: {result}</h4></div>}
//   </div>
// );

// const ConversionCalculator = () => {
//   const [conversionType, setConversionType] = useState("length");
//   const [value, setValue] = useState(0);
//   const [fromUnit, setFromUnit] = useState("meters");
//   const [toUnit, setToUnit] = useState("kilometers");
//   const [result, setResult] = useState(null);

//   const lengthUnits = {
//     meters: 1,
//     kilometers: 0.001,
//     centimeters: 100,
//     millimeters: 1000,
//     miles: 0.000621371,
//     yards: 1.09361,
//     feet: 3.28084,
//     inches: 39.3701,
//   };

//   const weightUnits = {
//     kilograms: 1,
//     grams: 1000,
//     milligrams: 1000000,
//     pounds: 2.20462,
//     ounces: 35.274,
//   };

//   const convertLength = () => {
//     const valueInMeters = value * lengthUnits[fromUnit];
//     const convertedValue = valueInMeters * lengthUnits[toUnit];
//     setResult(convertedValue.toFixed(2));
//   };

//   const convertWeight = () => {
//     const valueInKilograms = value * weightUnits[fromUnit];
//     const convertedValue = valueInKilograms * weightUnits[toUnit];
//     setResult(convertedValue.toFixed(2));
//   };

//   const convertTemperature = () => {
//     let convertedValue;
//     if (fromUnit === "celsius" && toUnit === "fahrenheit") {
//       convertedValue = (value * 9) / 5 + 32;
//     } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
//       convertedValue = ((value - 32) * 5) / 9;
//     } else if (fromUnit === "celsius" && toUnit === "kelvin") {
//       convertedValue = value + 273.15;
//     } else if (fromUnit === "kelvin" && toUnit === "celsius") {
//       convertedValue = value - 273.15;
//     } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
//       convertedValue = ((value - 32) * 5) / 9 + 273.15;
//     } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
//       convertedValue = ((value - 273.15) * 9) / 5 + 32;
//     }
//     setResult(convertedValue.toFixed(2));
//   };

//   const renderConversionComponent = () => {
//     switch (conversionType) {
//       case "length":
//         return (
//           <LengthConversion
//             value={value}
//             setValue={setValue}
//             fromUnit={fromUnit}
//             setFromUnit={setFromUnit}
//             toUnit={toUnit}
//             setToUnit={setToUnit}
//             result={result}
//             convertLength={convertLength}
//             units={lengthUnits}
//           />
//         );
//       case "weight":
//         return (
//           <WeightConversion
//             value={value}
//             setValue={setValue}
//             fromUnit={fromUnit}
//             setFromUnit={setFromUnit}
//             toUnit={toUnit}
//             setToUnit={setToUnit}
//             result={result}
//             convertWeight={convertWeight}
//             units={weightUnits}
//           />
//         );
//       case "temperature":
//         return (
//           <TemperatureConversion
//             value={value}
//             setValue={setValue}
//             fromUnit={fromUnit}
//             setFromUnit={setFromUnit}
//             toUnit={toUnit}
//             setToUnit={setToUnit}
//             result={result}
//             convertTemperature={convertTemperature}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2>Conversion Calculator</h2>
//       <div>
//         <label>Conversion Type:</label>
//         <select value={conversionType} onChange={(e) => setConversionType(e.target.value)}>
//           <option value="length">Length</option>
//           <option value="weight">Weight</option>
//           <option value="temperature">Temperature</option>
//         </select>
//       </div>
//       {renderConversionComponent()}
//     </div>
//   );
// };

// export default ConversionCalculator;



//............

import React, { useState } from 'react';

const LengthConversion = ({ value, setValue, fromUnit, setFromUnit, toUnit, setToUnit, result, convertLength, units }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-bold">Length Conversion</h3>
    <div>
      <label className="block">Value:</label>
      <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} className="border border-gray-300 rounded-md p-2" />
    </div>
    <div>
      <label className="block">From:</label>
      <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="border border-gray-300 rounded-md p-2">
        {Object.keys(units).map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
    </div>
    <div>
      <label className="block">To:</label>
      <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="border border-gray-300 rounded-md p-2">
        {Object.keys(units).map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
    </div>
    <button onClick={convertLength} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Convert
    </button>
    {result && <div><h4 className="font-semibold">Result: {result}</h4></div>}
  </div>
);

// Include similar updates for WeightConversion, TemperatureConversion, and other components as needed...

const ConversionCalculator = () => {
  const [conversionType, setConversionType] = useState("length");
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("kilometers");
  const [result, setResult] = useState(null);

  const lengthUnits = {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    miles: 0.000621371,
    yards: 1.09361,
    feet: 3.28084,
    inches: 39.3701,
  };

  const convertLength = () => {
    const valueInMeters = value * lengthUnits[fromUnit];
    const convertedValue = valueInMeters * lengthUnits[toUnit];
    setResult(convertedValue.toFixed(2));
  };

  // Include similar functions for convertWeight, convertTemperature, etc.

  const renderConversionComponent = () => {
    switch (conversionType) {
      case "length":
        return (
          <LengthConversion
            value={value}
            setValue={setValue}
            fromUnit={fromUnit}
            setFromUnit={setFromUnit}
            toUnit={toUnit}
            setToUnit={setToUnit}
            result={result}
            convertLength={convertLength}
            units={lengthUnits}
          />
        );
      // Include cases for weight and temperature conversions
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md space-y-6">
      <h2 className="text-xl font-bold">Conversion Calculator</h2>
      <div>
        <label className="block">Conversion Type:</label>
        <select value={conversionType} onChange={(e) => setConversionType(e.target.value)} className="border border-gray-300 rounded-md p-2">
          <option value="length">Length</option>
          {/* Include options for weight and temperature conversions */}
        </select>
      </div>
      {renderConversionComponent()}
    </div>
  );
};

export default ConversionCalculator;
