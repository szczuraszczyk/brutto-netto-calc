import { computeChorobowa, RATES } from './skladkiUtils'

export const SkladkaChorobowa = ({ brutto = 0, rate }) => {
    const base = Number(brutto) || 0
    const usedRate = rate !== undefined ? rate : RATES.chorobowa
    const amount = computeChorobowa(base)

    return (
        <>
            <li>𑣲 Składka chorobowa ({usedRate}%): {amount.toFixed(2)} PLN</li>
        </>
    )
}