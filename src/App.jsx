// Import hooka `useState` z biblioteki React
import { useState } from 'react'
// Import stylów komponentu aplikacji
import './App.css'
// Import komponentu odpowiedzialnego za wyświetlenie wyników obliczeń
import { WyswietlWynik } from './components/WyswietlWynik'

// Główny komponent aplikacji
function App() {
  // Stan przechowujący wartość wynagrodzenia brutto jako string
  const [wynagrodzenieBrutto, setWynagrodzenieBrutto] = useState('')
  // Stan przechowujący wybór rodzaju opodatkowania (domyślnie placeholder)
  const [rodzajOpodatkowania, setRodzajOpodatkowania] = useState('-----')
  // Stan przechowujący informację czy użytkownik jest uczniem/studentem (checkbox)
  const [statusUczen, setStatusUczen] = useState(false)

  // Zwracana część renderująca UI aplikacji
  return (
    <>
      {/* Kontener wyborów i pól formularza */}
      <div className='wybor'>
        {/* Etykieta pola wpisywania wynagrodzenia brutto */}
        <label htmlFor="wynagrodzenieBrutto">Wpisz swoje wynagrodzenie brutto: </label>
        {/* Pole wejściowe typu number dla kwoty brutto; aktualizuje stan przy zmianie */}
        <input type="number" name="wynagrodzenieBrutto" id="wynagrodzenieBrutto" min="0" step="0.01" value={wynagrodzenieBrutto} onChange={(e) => setWynagrodzenieBrutto(e.target.value)}
        />
        {/* Etykieta jednostki walutowej */}
        <label htmlFor="wynagrodzenieBrutto"> PLN</label> <br />

        {/* Pole select do wyboru rodzaju opodatkowania */}
        <select
          name="rodzajOpodatkowania"
          id="rodzajOpodatkowania"
          value={rodzajOpodatkowania}
          onChange={(e) => setRodzajOpodatkowania(e.target.value)}
        >
          {/* Opcja domyślna (placeholder) */}
          <option value="-----">-----------</option>
          {/* Opcja: skala podatkowa */}
          <option value="skala">Skala podatkowa</option>
          {/* Opcja: podatek liniowy */}
          <option value="linowy">Podatek liniowy</option>
        </select>

        {/* Checkbox oznaczający czy osoba jest uczniem/studentem */}
        <input type="checkbox" name="statusUczen" id="statusUczen" checked={statusUczen} 
        onChange={(e) => setStatusUczen(e.target.checked)} />
        {/* Etykieta dla checkboxa */}
        <label htmlFor="statusUczen">Uczeń/Student</label>
      </div>

      {/* Przerwa wizualna (znacznik <br />) */}
      <br />

      {/* Wywołanie komponentu wyświetlającego wyniki obliczeń */}
      <WyswietlWynik
        // Przekazanie wartości brutto do komponentu wyników
        brutto={wynagrodzenieBrutto}
        // Przekazanie wybranego rodzaju opodatkowania
        rodzajOpodatkowania={rodzajOpodatkowania}
        // Przekazanie informacji czy użytkownik jest uczniem/studentem
        statusUczen={statusUczen}
      />
    </>
  )
}

// Eksport domyślny komponentu App
export default App
