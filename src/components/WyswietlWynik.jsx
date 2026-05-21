// Import helpers to compute contributions and default rates
import { computeEmerytalna, computeRentowa, computeChorobowa, computeSkladkiRazem, RATES } from './skladkiUtils'
// Import components that display individual contributions
import { SkladkaChorobowa } from "./SkladkaChorobowa"
import { SkladkaEmerytalna } from "./SkladkaEmerytalna"
import { SkladkaRentowa } from "./SkladkaRentowa"

// Component that computes and displays the full breakdown and netto
export const WyswietlWynik = ({ brutto = 0, rodzajOpodatkowania, statusUczen }) => {
    // Normalize brutto to number (handles empty string)
    const base = Number(brutto) || 0

    // Compute each contribution using shared helpers
    const emerytalna = computeEmerytalna(base)
    const rentowa = computeRentowa(base)
    const chorobowa = computeChorobowa(base)

    // Sum of all social contributions
    const skladkiRazem = computeSkladkiRazem(base)

    // Determine tax rate based on props: student -> 0, otherwise by choice
    let taxRate = null
    if (statusUczen) taxRate = 0
    else if (rodzajOpodatkowania === 'skala') taxRate = 0.17
    else if (rodzajOpodatkowania === 'linowy') taxRate = 0.19

    // Taxable base = gross minus contributions (not below 0)
    const podstawaOpodatkowania = Math.max(0, base - skladkiRazem)
    // Compute tax amount if taxRate is known
    const podatek = taxRate === null ? null : podstawaOpodatkowania * taxRate

    // Netto = gross - contributions - tax
    const netto = base - skladkiRazem - (podatek || 0)

    return (
        <>
            {/* Display net amount formatted to 2 decimals */}
            <p>Kwota Netto: <strong>{netto.toFixed(2)} PLN</strong></p>
            <ul>
                {/* Each Skladka component computes and renders its own amount */}
                <SkladkaEmerytalna brutto={base} rate={RATES.emerytalna} />
                <SkladkaRentowa brutto={base} rate={RATES.rentowa} />
                <SkladkaChorobowa brutto={base} rate={RATES.chorobowa} />
                {/* Show combined contributions */}
                <li>Składki razem: {skladkiRazem.toFixed(2)} PLN</li>
                {/* Show tax info or prompt to choose taxation */}
                {taxRate === null ? (
                    <li>Podatek: wybierz rodzaj opodatkowania</li>
                ) : (
                    <li>Podatek ({(taxRate * 100).toFixed(2)}%): {podatek.toFixed(2)} PLN</li>
                )}
            </ul>
        </>
    )
}
