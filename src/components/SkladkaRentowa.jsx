import { computeRentowa, RATES } from './skladkiUtils'

export const SkladkaRentowa = ({ brutto = 0, rate }) => {
    const base = Number(brutto) || 0
    const usedRate = rate !== undefined ? rate : RATES.rentowa
    const amount = computeRentowa(base)

    return (
        <>
            <li>𑣲 Składka rentowa ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}