// Import funkcji do obliczania składki emerytalnej oraz obiektu stałych `RATES`
import { computeEmerytalna, RATES } from './skladkiUtils'

// Eksport komponentu wyświetlającego składkę emerytalną
export const SkladkaEmerytalna = ({ brutto = 0, rate }) => {
    // Konwersja prop `brutto` na liczbę; jeśli nie można, użyj 0
    const base = Number(brutto) || 0
    // Używana stawka: jeśli przekazano `rate` przez props, użyj jej, w przeciwnym razie użyj RATES.emerytalna
    const usedRate = rate !== undefined ? rate : RATES.emerytalna
    // Obliczona kwota składki emerytalnej dla danej podstawy
    const amount = computeEmerytalna(base)

    // Zwróć element listy wyświetlający nazwę składki, stawkę i kwotę
    return (
        <>
            <li>𑣲 Składka emerytalna ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}