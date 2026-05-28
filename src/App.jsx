import { useState } from 'react'
import './App.css'
import { WyswietlWynik } from './components/WyswietlWynik'

function App() {
  const [wynagrodzenieBrutto, setWynagrodzenieBrutto] = useState('')
  const [rodzajOpodatkowania, setRodzajOpodatkowania] = useState('-----')
  const [statusUczen, setStatusUczen] = useState(false)

  return (
    <>
      <div className='wybor'>
        <label htmlFor="wynagrodzenieBrutto">Wpisz swoje wynagrodzenie brutto: </label>
        <input type="number" name="wynagrodzenieBrutto" id="wynagrodzenieBrutto" min="0" step="0.01" value={wynagrodzenieBrutto} onChange={(e) => setWynagrodzenieBrutto(e.target.value)}
        />
        <label htmlFor="wynagrodzenieBrutto"> PLN</label> <br />

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

        <input type="checkbox" name="statusUczen" id="statusUczen" checked={statusUczen} 
        onChange={(e) => setStatusUczen(e.target.checked)} />
        <label htmlFor="statusUczen">Uczeń/Student</label>
      </div>

      <br />

      <WyswietlWynik
        brutto={wynagrodzenieBrutto}
        rodzajOpodatkowania={rodzajOpodatkowania}
        statusUczen={statusUczen}
      />
    </>
  )
}

export default App
