// Import funkcji do obliczania składki rentowej oraz obiektu stałych `RATES`
import { computeRentowa, RATES } from './skladkiUtils'

// Eksport komponentu wyświetlającego składkę rentową
export const SkladkaRentowa = ({ brutto = 0, rate }) => {
    // Konwersja prop `brutto` na liczbę; jeśli nie można, użyj 0
    const base = Number(brutto) || 0
    // Używana stawka: priorytet ma przekazany `rate`, w przeciwnym razie `RATES.rentowa`
    const usedRate = rate !== undefined ? rate : RATES.rentowa
    // Obliczona kwota składki rentowej dla danej podstawy
    const amount = computeRentowa(base)

    // Zwróć element listy z nazwą składki, stawką i obliczoną kwotą
    return (
        <>
            <li>𑣲 Składka rentowa ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}