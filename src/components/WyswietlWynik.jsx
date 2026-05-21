import { computeEmerytalna, computeRentowa, computeChorobowa, computeSkladkiRazem, RATES } from './skladkiUtils'
import { SkladkaChorobowa } from "./SkladkaChorobowa"
import { SkladkaEmerytalna } from "./SkladkaEmerytalna"
import { SkladkaRentowa } from "./SkladkaRentowa"

// Komponent wyświetlający wynik obliczeń: netto, składki i podatek
export const WyswietlWynik = ({ brutto = 0, rodzajOpodatkowania, statusUczen }) => {
    // Konwertuj przekazane `brutto` na liczbę (bezpiecznie, domyślnie 0)
    const base = Number(brutto) || 0

    // Obliczenia poszczególnych składek na podstawie kwoty brutto
    const emerytalna = computeEmerytalna(base)
    const rentowa = computeRentowa(base)
    const chorobowa = computeChorobowa(base)

    // Suma wszystkich składek (do odjęcia od podstawy opodatkowania)
    const skladkiRazem = computeSkladkiRazem(base)

    // Ustalenie stawki podatkowej:
    // - jeśli `statusUczen` jest prawdziwy => zwolnienie (0)
    // - 'skala' => 17% (0.17)
    // - 'linowy' => 19% (0.19)
    // - null => nie wybrano typu opodatkowania
    let taxRate = null
    if (statusUczen) taxRate = 0
    else if (rodzajOpodatkowania === 'skala') taxRate = 0.17
    else if (rodzajOpodatkowania === 'linowy') taxRate = 0.19

    // Podstawa opodatkowania nie może być ujemna
    const podstawaOpodatkowania = Math.max(0, base - skladkiRazem)

    // Oblicz podatek tylko gdy znamy stawkę
    const podatek = taxRate === null ? null : podstawaOpodatkowania * taxRate

    // Netto = brutto - składki - podatek (jeżeli istnieje)
    const netto = base - skladkiRazem - (podatek || 0)

    return (
        <>
            {/* Wyświetl główną kwotę netto */}
            <p>Kwota Netto: <strong>{netto.toFixed(2)} PLN</strong></p>
            <div className='wynik'>
                <ul>
                    {/* Szczegółowe komponenty składek (wyświetlają wartości dla każdej składki) */}
                    <SkladkaEmerytalna brutto={base} rate={RATES.emerytalna} />
                    <SkladkaRentowa brutto={base} rate={RATES.rentowa} />
                    <SkladkaChorobowa brutto={base} rate={RATES.chorobowa} />
                    {/* Podsumowanie: suma składek */}
                    <li>𑣲 Składki razem: {skladkiRazem.toFixed(2)} PLN</li>
                    {/* Informacja o podatku: albo prośba o wybór, albo wyliczona kwota */}
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
