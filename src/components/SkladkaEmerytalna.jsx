import { computeEmerytalna, RATES } from './skladkiUtils'

export const SkladkaEmerytalna = ({ brutto = 0, rate }) => {
    const base = Number(brutto) || 0
    const usedRate = rate !== undefined ? rate : RATES.emerytalna
    const amount = computeEmerytalna(base)

    return (
        <>
            <li>𑣲 Składka emerytalna ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}