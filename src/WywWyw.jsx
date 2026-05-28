import React, { useState } from 'react';
import './App.css';

// --- KOMPONENT 1: Formularz wejściowy ---
function CalculatorForm({ gross, setGross, taxType, setTaxType, isStudent, setIsStudent }) {
  // Blokada wpisywania wartości ujemnych
  const handleGrossChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setGross(value);
    }
  };

  return (
    <div className="form-section">
      <h2>Wprowadź dane</h2>
      
      <div className="form-group">
        <label>Kwota brutto (PLN):</label>
        <input 
          type="number" 
          min="0" 
          value={gross} 
          onChange={handleGrossChange} 
          placeholder="np. 8000"
        />
      </div>

      <div className="form-group">
        <label>Rodzaj opodatkowania:</label>
        <select value={taxType} onChange={(e) => setTaxType(e.target.value)}>
          <option value="skala">Skala podatkowa (12%)</option>
          <option value="liniowy">Podatek liniowy (19%)</option>
        </select>
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input 
            type="checkbox" 
            checked={isStudent} 
            onChange={(e) => setIsStudent(e.target.checked)} 
          />
          Status osoby uczącej się (do 26 r.ż. - ulga PIT-0)
        </label>
      </div>
    </div>
  );
}

// --- KOMPONENT 2: Wyświetlanie wyników ---
function ResultsDisplay({ calculations }) {
  return (
    <div className="results-section">
      <h2>Podsumowanie wynagrodzenia</h2>
      
      <div className="net-salary">
        <h3>Kwota Netto:</h3>
        <p className="net-amount">{calculations.netto.toFixed(2)} PLN</p>
      </div>

      <div className="details-list">
        <h4>Składki na ubezpieczenie społeczne (ZUS):</h4>
        <ul>
          <li>Emerytalna (9.76%): <span>{calculations.emerytalna.toFixed(2)} PLN</span></li>
          <li>Rentowa (1.50%): <span>{calculations.rentowa.toFixed(2)} PLN</span></li>
          <li>Chorobowa (2.45%): <span>{calculations.chorobowa.toFixed(2)} PLN</span></li>
        </ul>

        <h4>Pozostałe potrącenia:</h4>
        <ul>
          <li>Składka zdrowotna (9%): <span>{calculations.zdrowotna.toFixed(2)} PLN</span></li>
          <li>Zaliczka na podatek dochodowy (PIT): <span>{calculations.podatek.toFixed(2)} PLN</span></li>
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const [gross, setGross] = useState('');
  const [taxType, setTaxType] = useState('skala');
  const [isStudent, setIsStudent] = useState(false);

  // LOGIKA OBLICZENIOWA (Uruchamia się automatycznie przy każdej zmianie stanu)
  const calculateSalary = () => {
    const kwotaBrutto = parseFloat(gross) || 0;

    // Obliczanie składek ZUS
    const emerytalna = kwotaBrutto * 0.0976;
    const rentowa = kwotaBrutto * 0.015;
    const chorobowa = kwotaBrutto * 0.0245;
    const sumaZus = emerytalna + rentowa + chorobowa;

    // Obliczanie składki zdrowotnej
    const podstawaZdrowotnej = kwotaBrutto - sumaZus;
    const zdrowotna = podstawaZdrowotnej * 0.09;

    // Obliczanie podatku
    const kosztyUzyskaniaPrzychodu = 250; 
    let podstawaOpodatkowania = Math.round(podstawaZdrowotnej - kosztyUzyskaniaPrzychodu);
    if (podstawaOpodatkowania < 0) podstawaOpodatkowania = 0;

    let podatek = 0;
    if (taxType === 'skala') {
      podatek = (podstawaOpodatkowania * 0.12) - 300; // 300zł to miesięczna kwota wolna
    } else if (taxType === 'liniowy') {
      podatek = podstawaOpodatkowania * 0.19;
    }

    podatek = Math.round(podatek);
    if (podatek < 0) podatek = 0;

    // Uwzględnienie statusu studenta (Ulga PIT-0 dla młodych)
    if (isStudent) {
      podatek = 0; 
    }

    // Wyliczenie netto
    const netto = kwotaBrutto - sumaZus - zdrowotna - podatek;

    return {
      emerytalna,
      rentowa,
      chorobowa,
      zdrowotna,
      podatek,
      netto: netto > 0 ? netto : 0 // Zabezpieczenie przed ujemnym netto
    };
  };

  const calculations = calculateSalary();

  return (
    <div className="calculator-container">
      <h1>Kalkulator Wynagrodzenia</h1>
      <div className="calculator-grid">
        <CalculatorForm 
          gross={gross} setGross={setGross}
          taxType={taxType} setTaxType={setTaxType}
          isStudent={isStudent} setIsStudent={setIsStudent}
        />
        <ResultsDisplay calculations={calculations} />
      </div>
    </div>
  );
}