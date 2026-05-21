// Import React hook for local component state
import { useState } from 'react'
// Import component-specific styles
import './App.css'
// Import the result display component
import { WyswietlWynik } from './components/WyswietlWynik'

function App() {
  // State: input value for gross salary (string while typing)
  const [wynagrodzenieBrutto, setWynagrodzenieBrutto] = useState('')
  // State: selected tax type (default placeholder '-----')
  const [rodzajOpodatkowania, setRodzajOpodatkowania] = useState('-----')
  // State: whether user is a student (affects tax)
  const [statusUczen, setStatusUczen] = useState(false)

  return (
    <>
      <div>
        {/* Label for the gross salary input */}
        <label htmlFor="wynagrodzenieBrutto">Wpisz swoje wynagrodzenie brutto: </label>
        {/* Number input bound to `wynagrodzenieBrutto` state; updates on change */}
        <input
          type="number"
          name="wynagrodzenieBrutto"
          id="wynagrodzenieBrutto"
          min="0"
          step="0.01"
          value={wynagrodzenieBrutto}
          onChange={(e) => setWynagrodzenieBrutto(e.target.value)}
        />
        {/* Currency label */}
        <label htmlFor="wynagrodzenieBrutto">PLN</label> <br />

        {/* Dropdown to choose taxation method; value synced with state */}
        <select
          name="rodzajOpodatkowania"
          id="rodzajOpodatkowania"
          value={rodzajOpodatkowania}
          onChange={(e) => setRodzajOpodatkowania(e.target.value)}
        >
          <option value="-----">-----------</option>
          <option value="skala">Skala podatkowa</option>
          <option value="linowy">Podatek liniowy</option>
        </select>
        <br />

        {/* Checkbox toggling student status (checked from state) */}
        <input
          type="checkbox"
          name="statusUczen"
          id="statusUczen"
          checked={statusUczen}
          onChange={(e) => setStatusUczen(e.target.checked)}
        />
        <label htmlFor="statusUczen">Uczeń/Student</label>
      </div>

      <br />
      <br />

      {/* Render the result component and pass current inputs as props */}
      <WyswietlWynik
        brutto={wynagrodzenieBrutto}
        rodzajOpodatkowania={rodzajOpodatkowania}
        statusUczen={statusUczen}
      />
    </>
  )
}

export default App
