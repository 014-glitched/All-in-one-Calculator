// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from '../Components/Header';
// // import CardComponent from '../Components/Card'; // Rename import to avoid name conflict
// import BMICalculator from '../Components/BMICalculator';
// import './App.css';
// import Card from '../Components/Card';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Card />} />
//         <Route path="/bmi-calculator" element={<BMICalculator />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// App.jsx

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from '../Components/Header';
// import Card from '../Components/Card';
// import BMICalculator from '../Components/BMICalculator'; // Import BMICalculator component
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Card />} />
//         <Route path="/bmi-calculator" element={<BMICalculator />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



//????
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
import Header from '../Components/Header';

// import BMICalculator from './Components/BMICalculator';

import BMICalculator from '../Components/BMICalculator';

import Card from '../Components/Card';
import FinancialCalculator from '../Components/FinancialCalculator';
import HealthFitnessCalculator from '../Components/HealthFitnessCalculator';
import ConversionCalculator from '../Components/ConversionCalculator';
import GeometryCalculator from '../Components/GeometryCalculator';
import MathAlgebraCalculators from '../Components/MathAlgebraCalculators';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/financial" element={<FinancialCalculator />} />
        <Route path="/health-fitness" element={<HealthFitnessCalculator />} />
        <Route path="/conversion" element={<ConversionCalculator />} />
        <Route path="/geometry" element={<GeometryCalculator />} />
        <Route path="/math-algebra" element={<MathAlgebraCalculators />} />
      </Routes>
    </Router>
  );
};

export default App;


//??/
{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}