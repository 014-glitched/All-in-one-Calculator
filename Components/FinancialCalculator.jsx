// import React from "react";

// const FinancialCalculator = () => {
  
//   return (
//     <div>
//       <h2>Financial Calculator</h2>
//       {/* Add your calculator logic here */}
      
//     </div>
//   );
// };

// export default FinancialCalculator;



//??

import React, { useState } from "react";
import "./FinancialCalculator.css"; // Import your external CSS file

const FinancialCalculator = () => {
  const [calculatorType, setCalculatorType] = useState("simpleInterest");

  const renderCalculator = () => {
    switch (calculatorType) {
      case "simpleInterest":
        return <SimpleInterestCalculator />;
      case "compoundInterest":
        return <CompoundInterestCalculator />;
      case "currency":
        return <CurrencyCalculator />;
      case "salary":
        return <SalaryCalculator />;
      case "retirement":
        return <RetirementCalculator />;
      case "salesTax":
        return <SalesTaxCalculator />;
      case "investment":
        return <InvestmentCalculator />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Financial Calculator</h2>
      <div>
        <label>Select Calculator:</label>
        <select
          value={calculatorType}
          onChange={(e) => setCalculatorType(e.target.value)}
        >
          <option value="simpleInterest">Simple Interest Calculator</option>
          <option value="compoundInterest">Compound Interest Calculator</option>
          <option value="currency">Currency Calculator</option>
          <option value="salary">Salary Calculator</option>
          <option value="retirement">Retirement Calculator</option>
          <option value="salesTax">Sales and Tax Calculator</option>
          <option value="investment">Investment Calculator</option>
        </select>
      </div>
      
      {renderCalculator()}
    </div>
  );
};

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateSimpleInterest = () => {
    const interest = (principal * interestRate * timePeriod) / 100;
    const total = principal + interest;
    setSimpleInterest(interest);
    setTotalAmount(total);
  };

  return (
    <div>
      <h3>Simple Interest Calculator</h3>
      <div>
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Interest Rate:</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Time Period (in years):</label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateSimpleInterest}>Calculate</button>
      <div>
        <h4>Simple Interest: {simpleInterest}</h4>
        <h4>Total Amount: {totalAmount}</h4>
      </div>
    </div>
  );
};

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [compoundingFrequency, setCompoundingFrequency] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [compoundInterest, setCompoundInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateCompoundInterest = () => {
    const amount =
      principal *
      Math.pow(
        1 + interestRate / (100 * compoundingFrequency),
        compoundingFrequency * timePeriod
      );
    const interest = amount - principal;
    setCompoundInterest(interest);
    setTotalAmount(amount);
  };

  return (
    <div>
      <h3>Compound Interest Calculator</h3>
      <div>
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Interest Rate:</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Compounding Frequency:</label>
        <input
          type="number"
          value={compoundingFrequency}
          onChange={(e) => setCompoundingFrequency(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Time Period (in years):</label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateCompoundInterest}>Calculate</button>
      <div>
        <h4>Compound Interest: {compoundInterest}</h4>
        <h4>Total Amount: {totalAmount}</h4>
      </div>
    </div>
  );
};

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertCurrency = () => {
    // Implement currency conversion logic here (API call or predefined rates)
    // For simplicity, let's assume a straightforward conversion
    const conversionRate = 0.85; // Example conversion rate
    const converted = amount * conversionRate;
    setConvertedAmount(converted);
  };

  return (
    <div>
      <h3>Currency Calculator</h3>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Source Currency:</label>
        <input
          type="text"
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
        />
      </div>
      <div>
        <label>Target Currency:</label>
        <input
          type="text"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        />
      </div>
      <button onClick={convertCurrency}>Convert</button>
      <div>
        <h4>Converted Amount: {convertedAmount}</h4>
      </div>
    </div>
  );
};

const SalaryCalculator = () => {
  const [grossSalary, setGrossSalary] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [bonuses, setBonuses] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  const calculateNetSalary = () => {
    const net = grossSalary - deductions + bonuses;
    setNetSalary(net);
  };

  return (
    <div>
      <h3>Salary Calculator</h3>
      <div>
        <label>Gross Salary:</label>
        <input
          type="number"
          value={grossSalary}
          onChange={(e) => setGrossSalary(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Deductions:</label>
        <input
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Bonuses:</label>
        <input
          type="number"
          value={bonuses}
          onChange={(e) => setBonuses(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateNetSalary}>Calculate</button>
      <div>
        <h4>Net Salary: {netSalary}</h4>
      </div>
    </div>
  );
};

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(0);
  const [retirementAge, setRetirementAge] = useState(0);
  const [savings, setSavings] = useState(0);
  const [expectedReturnRate, setExpectedReturnRate] = useState(0);
  const [retirementCorpus, setRetirementCorpus] = useState(0);

  const calculateRetirementCorpus = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const interest = (savings * expectedReturnRate * yearsToRetirement) / 100;
    const corpus = savings + interest;
    setRetirementCorpus(corpus);
  };

  return (
    <div>
      <h3>Retirement Calculator</h3>
      <div>
        <label>Current Age:</label>
        <input
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Retirement Age:</label>
        <input
          type="number"
          value={retirementAge}
          onChange={(e) => setRetirementAge(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Savings:</label>
        <input
          type="number"
          value={savings}
          onChange={(e) => setSavings(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Expected Return Rate:</label>
        <input
          type="number"
          value={expectedReturnRate}
          onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateRetirementCorpus}>Calculate</button>
      <div>
        <h4>Retirement Corpus: {retirementCorpus}</h4>
      </div>
    </div>
  );
};

const SalesTaxCalculator = () => {
  const [originalAmount, setOriginalAmount] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTax = () => {
    const tax = (originalAmount * taxRate) / 100;
    const total = originalAmount + tax;
    setTaxAmount(tax);
    setTotalAmount(total);
  };

  return (
    <div>
      <h3>Sales and Tax Calculator</h3>
      <div>
        <label>Original Amount:</label>
        <input
          type="number"
          value={originalAmount}
          onChange={(e) => setOriginalAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Tax Rate:</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateTax}>Calculate</button>
      <div>
        <h4>Tax Amount: {taxAmount}</h4>
        <h4>Total Amount: {totalAmount}</h4>
      </div>
    </div>
  );
};

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [investmentPeriod, setInvestmentPeriod] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [investmentValue, setInvestmentValue] = useState(0);

  const calculateInvestmentValue = () => {
    let total = initialInvestment;
    for (let i = 1; i <= investmentPeriod; i++) {
      total = total + monthlyContribution;
      total = total * (1 + interestRate / 100);
    }
    setInvestmentValue(total);
  };

  return (
    <div>
      <h3>Investment Calculator</h3>
      <div>
        <label>Initial Investment:</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Monthly Contribution:</label>
        <input
          type="number"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Investment Period (in years):</label>
        <input
          type="number"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Expected Interest Rate:</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateInvestmentValue}>Calculate</button>
      <div>
        <h4>Investment Value: {investmentValue}</h4>
      </div>
    </div>
  );
};

export default FinancialCalculator;
