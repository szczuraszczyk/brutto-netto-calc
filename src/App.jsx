import { useState } from 'react'
import './App.css'
import { WyswietlWynik } from './components/WyswietlWynik'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <label htmlFor="wynagrodzenieBrutto">Wpisz swoje wynagrodzenie brutto: </label>
        <input type="number" name="wynagrodzenieBrutto" id='wynagrodzenieBrutto' min='0' />
        <label htmlFor="wynagrodzenieBrutto">PLN</label> <br />
        <select name="rodzajOpodatkowania" id="rodzajOpodatkowania">
          <option value="-----">-----------</option>
          <option value="skala">Skala podatkowa</option>
          <option value="linowy">Podatek liniowy</option>
        </select> <br />
        <input type="checkbox" name="statusUczen" id="statusUczen" />
        <label htmlFor="statusUczen">Uczeń/Student</label>
      </div>
      <br /><br />

      <WyswietlWynik />

    </>
  )
}

export default App
