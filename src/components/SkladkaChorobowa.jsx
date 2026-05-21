// Import funkcji do obliczania składki chorobowej oraz obiektu stałych `RATES`
import { computeChorobowa, RATES } from './skladkiUtils'

// Eksport komponentu wyświetlającego składkę chorobową
export const SkladkaChorobowa = ({ brutto = 0, rate }) => {
    // Konwersja prop `brutto` na liczbę; jeśli nie można, użyj 0
    const base = Number(brutto) || 0
    // Używana stawka: jeśli przekazano `rate`, użyj jej; inaczej `RATES.chorobowa`
    const usedRate = rate !== undefined ? rate : RATES.chorobowa
    // Obliczona kwota składki chorobowej dla danej podstawy
    const amount = computeChorobowa(base)

    // Zwróć element listy wyświetlający nazwę składki, stawkę i kwotę
    return (
        <>
            <li>𑣲 Składka chorobowa ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}