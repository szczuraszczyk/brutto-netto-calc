// Import helper that computes emerytalna and default rate constants
import { computeEmerytalna, RATES } from './skladkiUtils'

// Component: displays emerytalna (pension) contribution for given `brutto`
export const SkladkaEmerytalna = ({ brutto = 0, rate }) => {
    // Normalize brutto to number (safeguard against empty string)
    const base = Number(brutto) || 0
    // Decide which rate to display: prefer prop `rate`, otherwise default
    const usedRate = rate !== undefined ? rate : RATES.emerytalna
    // Compute actual amount using shared helper
    const amount = computeEmerytalna(base)

    // Render a single list item with the rate and formatted amount
    return (
        <>
            <li>Składka emerytalna ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}