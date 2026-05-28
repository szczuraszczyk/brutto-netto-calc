import { computeEmerytalna, computeRentowa, computeChorobowa, computeSkladkiRazem, RATES } from './skladkiUtils'
import { SkladkaChorobowa } from "./SkladkaChorobowa"
import { SkladkaEmerytalna } from "./SkladkaEmerytalna"
import { SkladkaRentowa } from "./SkladkaRentowa"

export const WyswietlWynik = ({ brutto = 0, rodzajOpodatkowania, statusUczen }) => {
    const base = Number(brutto) || 0

    const emerytalna = computeEmerytalna(base)
    const rentowa = computeRentowa(base)
    const chorobowa = computeChorobowa(base)

    const skladkiRazem = computeSkladkiRazem(base)

    let taxRate = null
    if (statusUczen) taxRate = 0
    else if (rodzajOpodatkowania === 'skala') taxRate = 0.17
    else if (rodzajOpodatkowania === 'linowy') taxRate = 0.19

    const podstawaOpodatkowania = Math.max(0, base - skladkiRazem)

    const podatek = taxRate === null ? null : podstawaOpodatkowania * taxRate

    const netto = base - skladkiRazem - (podatek || 0)

    return (
        <>
            <p>Kwota Netto: <strong>{netto.toFixed(2)} PLN</strong></p>
            <div className='wynik'>
                <ul>
                    <SkladkaEmerytalna brutto={base} rate={RATES.emerytalna} />
                    <SkladkaRentowa brutto={base} rate={RATES.rentowa} />
                    <SkladkaChorobowa brutto={base} rate={RATES.chorobowa} />
                    <li>𑣲 Składki razem: {skladkiRazem.toFixed(2)} PLN</li>
                    {taxRate === null ? (
                        <li>𑣲 Podatek: wybierz rodzaj opodatkowania</li>
                    ) : (
                        <li>𑣲 Podatek ({(taxRate * 100).toFixed(2)}%): {podatek.toFixed(2)} PLN</li>
                    )}
                </ul>
            </div>
        </>
    )
}
