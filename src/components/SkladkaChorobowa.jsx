// Import helper that computes chorobowa and default rates
import { computeChorobowa, RATES } from './skladkiUtils'

// Component: displays chorobowa (sickness) contribution for given `brutto`
export const SkladkaChorobowa = ({ brutto = 0, rate }) => {
    // Ensure brutto is a number
    const base = Number(brutto) || 0
    // Choose displayed rate (prop overrides default)
    const usedRate = rate !== undefined ? rate : RATES.chorobowa
    // Compute the amount using shared helper
    const amount = computeChorobowa(base)

    // Render the formatted list item
    return (
        <>
            <li>Składka chorobowa ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}