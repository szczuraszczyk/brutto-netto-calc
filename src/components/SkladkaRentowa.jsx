// Import helper that computes rentowa and default rates
import { computeRentowa, RATES } from './skladkiUtils'

// Component: displays rentowa (disability) contribution for given `brutto`
export const SkladkaRentowa = ({ brutto = 0, rate }) => {
    // Normalize brutto to a safe number
    const base = Number(brutto) || 0
    // Use provided rate for display or fallback to default
    const usedRate = rate !== undefined ? rate : RATES.rentowa
    // Compute the contribution amount using helper
    const amount = computeRentowa(base)

    // Render the list item with formatted amount
    return (
        <>
            <li>Składka rentowa ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}